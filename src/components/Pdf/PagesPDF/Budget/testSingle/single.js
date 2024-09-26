import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";
import { lastNumber } from "./lastNumber";

export function Single({ item, index }) {
  const { budget, idTemplate } = item;

  const isBudgetArray = Array.isArray(budget) && budget.length > 0;

  if (!isBudgetArray) {
    return null;
  }

  return budget.map((budgetItem, budgetIndex) => {
    const dinamycStyles = lastNumber(idTemplate)
      ? styles.lastTableCol
      : styles.tableCol;

    return React.createElement(
      View,
      { style: styles.tableRow, key: `${index}-${budgetIndex}` },
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 2, // 40% para "designación"
          },
        },
        idTemplate.replace(/^6\./, " #")
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 4, // 30% para "descripción"
          },
        },
        budgetItem.description || "-"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 1, // 20% para "monto"
          },
        },
        budgetItem.amount || "-"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 1, // 10% para "cantidad"
          },
        },
        budgetItem.qtd || "-"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 1, // 10% para "Un"
          },
        },
        budgetItem.un || "-"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 1, // 20% para "valor unitario"
          },
        },
        budgetItem.uniteValue || "-"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...dinamycStyles,
            flex: 2, // Para el último elemento
          },
        },
        "-"
      )
    );
  });
}
