import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
import { MainBudget } from "./MainBudget";
import { AlternativeBudget } from "./AlternativeBudget";
import { Header } from "../Header";
import { Single } from "./testSingle/single";
import { firstRow } from "./testSingle/firstRow";

export const BudgetTable = ({ data, dataIterated }) => {
  if (dataIterated && dataIterated.length !== 0) {
    return React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(Header, { data }),
      /*       React.createElement(MainBudget, { dataIterated }),
      React.createElement(AlternativeBudget, { dataIterated }) */
      React.createElement(firstRow, { dataIterated }),
      dataIterated.map((item, index) => {
        return React.createElement(Single, { item, index });
      })
    );
  }
  return null;
};
