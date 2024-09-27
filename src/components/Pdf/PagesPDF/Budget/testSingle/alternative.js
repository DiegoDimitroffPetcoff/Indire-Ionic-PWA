import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../../../../../../public/styles";
import { lastNumber } from "./lastNumber";

export function Alternative({ item, index }) {
  const { id, alternativas } = item;

  // Verificar si hay alternativas
  if (!alternativas || Object.keys(alternativas).length === 0) {
    return null;
  }

  return Object.values(alternativas).map((alt, altIndex) => {
    const dinamycStyles = lastNumber(id)
      ? styles.tableCol
      : styles.lastTableCol;

    return [
      React.createElement(
        View,
        { style: styles.tableRow, key: `${index}-${altIndex}` },
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 2 } },
          id.replace(/^6\./, " #")
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 4 } },
          `
        ${alt.description} 
         (Variante ${alt.alternativa} )
         ` || "-"
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${alt.amount}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${alt.qtd}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${alt.un}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${alt.uniteValue}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 2 } },
          `
        ${alt.diferencia}
        `
        )
      ),
      React.createElement(
        View,
        { style: styles.tableRow, key: `${index}-${altIndex}` },
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 2 } },
          id.replace(/^6\./, " #")
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 4 } },
          `
        ${item.description} 
     
         ` || "-"
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${item.amount}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${item.qtd}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        ${item.un}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 1 } },
          `
        -${item.main}
        `
        ),
        React.createElement(
          Text,
          { style: { ...dinamycStyles, flex: 2 } },
          `
     
        `
        )
      ),

      React.createElement(
        View,
        { style: styles.tableRow, key: `${index}-${altIndex}` },
        React.createElement(
          Text,
          null,
          `
        VARIAÇÃO DE CUSTO DA ALTERNATIVA PROPOSTA 
        `
        ),
        React.createElement(
          Text,
          null,
          `
        ${alt.uniteValue}€ 
        `
        )
      ),
    ];
  });
}
