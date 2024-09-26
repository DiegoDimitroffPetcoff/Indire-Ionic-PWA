import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";

export function Alternative({ item, index }) {
  const { budget, idTemplate } = item;

  const isBudgetArray = Array.isArray(budget) && budget.length > 0;

  if (!isBudgetArray) {
    return null;
  }

  return budget.map((budgetItem, budgetIndex) => {
    if (budgetItem.alternative) {
      return React.createElement(
        View,
        { style: styles.tableRow, key: `${index}-${budgetIndex}` },
        React.createElement(Text, { style: styles.tableCol }, idTemplate),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.description || "-"
        ),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.amount || "-"
        ),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.qtd || "-"
        ),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.un || "-"
        ),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.uniteValue || "-"
        ),

        React.createElement(Text, { style: styles.tableCol }, "-"),
        React.createElement(
          Text,
          { style: styles.tableCol },
          budgetItem.alternative || "-"
        )
      );
    }
  });
}
