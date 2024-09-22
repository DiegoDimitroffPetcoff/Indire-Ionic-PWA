import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
import { budgetIteratores } from "./bugetIterator";

export function MainBudget({ dataIterated }) {
  const { budgetIterator } = budgetIteratores();

  let lastSecondNumber = null;
  let custoTotal = 0;
  let subtotal = 0; // Agregar variable subtotal

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
        const previousSubtotal = subtotal;
        subtotal = 0; // Resetear subtotal para la nueva sección

        lastSecondNumber = secondNumber;

        return [
          item.budget.map((budget, budgetIndex) => {
            subtotal += budget.uniteValue; // Sumar el valor unitario al subtotal
            custoTotal += budget.uniteValue; // Sumar al costo total
            if (!budget.alternative) {
              return budgetIterator({ item, index, budget, budgetIndex });
            }
          }),
          React.createElement(
            View,
            { style: styles.tableRow, key: `espacio-${index}` },
            React.createElement(Text, { style: styles.tableColSpace }, ""),
            React.createElement(Text, { style: styles.tableCol }, ""), // Fila en blanco para la estética
            React.createElement(Text, { style: styles.tableCol }, ""),
            React.createElement(Text, { style: styles.tableCol }, ""),
            React.createElement(Text, { style: styles.tableCol }, ""),
            React.createElement(Text, { style: styles.tableCol }, "Subtotal: "), // Columna del subtotal
            React.createElement(
              Text,
              { style: styles.tableCol },
              previousSubtotal
            ) // Mostrar el subtotal previo
          ),
        ];
      } else {
        lastSecondNumber = secondNumber;

        return item.budget.map((budget, budgetIndex) => {
          subtotal += budget.uniteValue; // Sumar el valor unitario al subtotal
          if (!budget.alternative) {
            return budgetIterator({ item, index, budget, budgetIndex });
          }
        });
      }
    }),
    // Finalmente, muestra el costo total general si lo deseas
    React.createElement(
      View,
      { style: styles.tableRow },
      React.createElement(Text, { style: styles.tableColSpace }, ""),
      React.createElement(Text, { style: styles.tableCol }, "Total General"),
      React.createElement(
        Text,
        { style: styles.tableCol },
        custoTotal.toFixed(2)
      ) // Mostrar el costo total general
    )
  );
}
