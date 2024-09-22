import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
import { budgetIteratores } from "./bugetIterator";

export function AlternativeBudget({ dataIterated }) {
  const { budgetIterator } = budgetIteratores();

  let lastSecondNumber = null;
  let custoTotal = 0;

  return React.createElement(
    View,
    { style: styles.table },
    React.createElement(
      View,
      { style: [styles.tableRow, styles.tableHeader] },
      React.createElement(Text, { style: styles.tableCol }, "ARTIGO"),
      React.createElement(Text, { style: styles.tableCol }, "DESIGNACAO"),
      React.createElement(Text, { style: styles.tableCol }, "Un."),
      React.createElement(Text, { style: styles.tableCol }, "Qtd."),
      React.createElement(Text, { style: styles.tableCol }, "CUSTO UNITARIO"),
      React.createElement(Text, { style: styles.tableCol }, "CUSTO PARCIAL"),
      React.createElement(Text, { style: styles.tableCol }, "CUSTO TOTAL")
    ),
    dataIterated.map((item, index) => {
      const secondNumber = item.idTemplate.split(".")[1];

      const isNewSection = secondNumber !== lastSecondNumber;

      if (isNewSection && lastSecondNumber !== null) {
        lastSecondNumber = secondNumber;

        return [
          React.createElement(
            View,
            { style: styles.tableRow, key: `espacio-${index}` },
            React.createElement(Text, { style: styles.tableColSpace }, "")
          ),

          item.budget.map((budget, budgetIndex) => {
            if (!budget.alternative) {
              return budgetIterator({ item, index, budget, budgetIndex });
            }
          }),
        ];
      } else {
        lastSecondNumber = secondNumber;

        return item.budget.map((budget, budgetIndex) => {
          if (budget.alternative) {
            return budgetIterator({ item, index, budget, budgetIndex });
          }
        });
      }
    })
  );
}
