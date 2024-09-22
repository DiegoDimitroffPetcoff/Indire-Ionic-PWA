import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
export const budgetIteratores = () => {
  function budgetIterator({ item, index, budget, budgetIndex }) {
    return React.createElement(
      View,
      { style: styles.tableRow, key: `${index}-${budgetIndex}` },
      React.createElement(Text, { style: styles.tableCol }, item.idTemplate),
      React.createElement(Text, { style: styles.tableCol }, budget.description),
      React.createElement(Text, { style: styles.tableCol }, budget.amount),
      React.createElement(Text, { style: styles.tableCol }, budget.qtd),
      React.createElement(Text, { style: styles.tableCol }, budget.un),
      React.createElement(Text, { style: styles.tableCol }, budget.uniteValue),
      React.createElement(Text, { style: styles.tableCol }, ""),
    
    );
  }

  return { budgetIterator };
};
