import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";
import { lastNumber } from "./lastNumber";

export function Alternative({ item, index }) {
  const { budget, idTemplate } = item;

  const isBudgetArray = Array.isArray(budget) && budget.length > 0;

  if (!isBudgetArray) {
    return null;
  }

  return budget.map((budgetItem, budgetIndex) => {
    if (budgetItem.alternative) {
      console.log(budgetItem.alternative);
      
/*       const dinamycStyles = lastNumber(idTemplate)     */
      const dinamycStyles = budgetItem.alternative !== "A" 
        ? styles.lastTableCol
        : styles.tableCol;

      return React.createElement(
        View,
        { style: styles.tableRow, key: `${index}-${budgetIndex}` },
        React.createElement(Text, { style: dinamycStyles }, idTemplate.replace(/^6\./, " #")),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.description || "-"
        ),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.amount || "-"
        ),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.qtd || "-"
        ),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.un || "-"
        ),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.uniteValue || "-"
        ),

        React.createElement(Text, { style: dinamycStyles }, "-"),
        React.createElement(
          Text,
          { style: dinamycStyles },
          budgetItem.alternative || "-"
        )
      );
    }
  });
}
