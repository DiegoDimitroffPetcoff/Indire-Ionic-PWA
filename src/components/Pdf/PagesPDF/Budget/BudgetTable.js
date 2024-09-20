import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";
import { MainBudget } from "./MainBudget";
import { AlternativeBudget } from "./AlternativeBudget";
import { Header } from "../Header";

export const BudgetTable = ( { data, dataIterated }) => {
  if (dataIterated && dataIterated.length !== 0) {
    return React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(Header, { data }),
      React.createElement(MainBudget, { dataIterated }),
      React.createElement(AlternativeBudget, { dataIterated })
    );
  }
  return null;
};
