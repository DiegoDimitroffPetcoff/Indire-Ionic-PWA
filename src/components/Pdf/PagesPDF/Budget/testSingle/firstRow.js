import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";
/* import { budgetIteratores } from "./bugetIterator"; */

export function firstRow({ Alternative }) {
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
      React.createElement(Text, { style: styles.tableCol }, "CUSTO TOTAL"),
      Alternative
        ? React.createElement(
            Text,
            { style: styles.tableCol },
            "ALTERNATIVAAA!!"
          )
        : null
    )
  );
}
