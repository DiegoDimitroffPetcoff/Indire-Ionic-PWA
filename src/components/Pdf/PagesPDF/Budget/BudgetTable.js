import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";

import { Header } from "../Header";
import { Single } from "./testSingle/single";
import { Alternative } from "./testSingle/alternative";
import { firstRow } from "./testSingle/firstRow";

export const BudgetTable = ({ data, dataIterated }) => {
  if (dataIterated && dataIterated.length !== 0) {
    return [
      React.createElement(
        Page,
        { size: "A4", style: styles.page },
        React.createElement(Header, { data }),

        React.createElement(firstRow, { Alternative: false }),
        dataIterated.map((item, index) => {
          return React.createElement(Single, { item, index });
        })
      ),
      React.createElement(
        Page,
        { size: "A4", style: styles.page },
        React.createElement(Header, { data }),

        React.createElement(firstRow, { Alternative: true }),
        dataIterated.map((item, index) => {
          return React.createElement(Alternative, { item, index });
        })
      ),
    ];
  }
  return null;
};
