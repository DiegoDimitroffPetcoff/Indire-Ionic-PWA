import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";
import { lastNumber } from "./lastNumber";

export function Single({ item, index }) {
  const { id, main, amount, description, qtd, un } = item;

  // Verificar si hay un valor principal (main)
  if (!main) {
    return null;
  }

  const dinamycStyles = lastNumber(id) ? styles.lastTableCol : styles.tableCol;

  return React.createElement(
    View,
    { style: styles.tableRow, key: index },
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 2 } },
      `
      ${id.replace(/^6\./, " #")}
      `
    ),
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 4 } },
      `
      ${description || "-"}
      `
    ),
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 1 } },
      `
      ${amount || "-"}
      `
    ),
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 1 } },
      `
      ${qtd || "-"}
      `
    ),
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 1 } },
      `
      ${un || "-"}
      `
    ),
    React.createElement(
      Text,
      { style: { ...dinamycStyles, flex: 1 } },
      `
      ${main || "-"}
      `
    ),
    React.createElement(
      Text, 
      { style: { ...dinamycStyles, flex: 2 } }, 
      `
      -
      `
    )
  );
}
