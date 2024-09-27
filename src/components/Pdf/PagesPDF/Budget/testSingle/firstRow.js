import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";

export function firstRow({ Alternative }) {
  return React.createElement(
    View,
    { style: styles.table },
    React.createElement(
      View,
      { style: [styles.tableRow, styles.tableHeader] },
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 2, // 20% para "ARTIGO"
          },
        },
        "ARTIGO"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 4, // 40% para "DESIGNACAO"
          },
        },
        "DESIGNACAO"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 1, // 10% para "Un."
          },
        },
        "Un."
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 1, // 10% para "Qtd."
          },
        },
        "Qtd."
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 1, // 10% para "CUSTO UNITARIO"
          },
        },
        "CUSTO UNITARIO"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 1, // 10% para "CUSTO PARCIAL"
          },
        },
        "CUSTO PARCIAL"
      ),
      React.createElement(
        Text,
        {
          style: {
            ...styles.tableCol,
            flex: 2, // 10% para "CUSTO TOTAL"
          },
        },
        "CUSTO TOTAL"
      )
    )
  );
}
