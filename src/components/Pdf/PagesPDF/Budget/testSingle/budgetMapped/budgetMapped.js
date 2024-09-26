import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../../public/styles";
/* import { budgetIteratores } from "./bugetIterator"; */

export function budgetMapped({ budget, index }) {
  console.log(budget);

  const { description, amount, qtd, un, uniteValue } = budget;
  return React.createElement(
    View,
    { style: styles.tableRow, key: `${index}` },

    React.createElement(Text, { style: styles.tableCol }, description),
    React.createElement(Text, { style: styles.tableCol }, amount),
    React.createElement(Text, { style: styles.tableCol }, qtd),
    React.createElement(Text, { style: styles.tableCol }, un),
    React.createElement(Text, { style: styles.tableCol }, uniteValue)
  );
}
