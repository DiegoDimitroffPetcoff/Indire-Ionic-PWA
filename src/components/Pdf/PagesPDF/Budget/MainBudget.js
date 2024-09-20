import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
export function MainBudget({dataIterated}) {
    let lastContent;
    let custoTotal = 0;
    return(
        React.createElement(
            View,
            { style: styles.table },
            React.createElement(
              View,
              { style: [styles.tableRow, styles.tableHeader] },
              React.createElement(Text, { style: styles.tableCol }, "ARTIGO"),
              React.createElement(Text, { style: styles.tableCol }, "DESIGNACAO"),
              React.createElement(Text, { style: styles.tableCol }, "Un."),
              React.createElement(Text, { style: styles.tableCol }, "Qtd."),
              React.createElement(
                Text,
                { style: styles.tableCol },
                "CUSTO UNITARIO"
              ),
              React.createElement(
                Text,
                { style: styles.tableCol },
                "CUSTO PARCIAL"
              ),
              React.createElement(Text, { style: styles.tableCol }, "CUSTO TOTAL")
            ),
            dataIterated.map((item, index) => {
              if (item.idTemplate !== lastContent ) {
                lastContent = item.idTemplate;
    
                return item.budget.map((budget, budgetIndex) => {
                  custoTotal += budget.uniteValue;
    
                  if (!budget.alternative ) {
                    return React.createElement(
                      View,
                      { style: styles.tableRow, key: `${index}-${budgetIndex}` },
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        item.idTemplate
                      ),
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        budget.description
                      ),
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        budget.amount
                      ),
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        budget.qtd
                      ),
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        budget.un
                      ),
                      React.createElement(
                        Text,
                        { style: styles.tableCol },
                        budget.uniteValue
                      ),
                      React.createElement(Text, { style: styles.tableCol })
                    );
                  }
                  return null;
                });
              }
            }),
 /*            React.createElement(
              Text,
              { style: styles.tableCol },
              React.createElement(
                Text,
                { style: styles.tableCol },
                `$${custoTotal}`
              )
            ) */
          )
    )
}