import React from "react";
import { Text, View, Page } from "@react-pdf/renderer";
import { styles } from "../../../../../public/styles";

import { Header } from "../Header";
import { Single } from "./testSingle/single";
import { Alternative } from "./testSingle/alternative";
import { firstRow } from "./testSingle/firstRow";
import { alternativeResoult } from "./testSingle/alternativeResoult";

export const BudgetTable = ({ data, dataIterated }) => {
  if (dataIterated && dataIterated.length !== 0) {
    let dataMapped = alternativeResoult(dataIterated);

    return [
      React.createElement(
        Page,
        { size: "A4", style: styles.page },
        React.createElement(Header, { data }),

        React.createElement(firstRow, { Alternative: false }),
        dataMapped.map((item, index) => {
          return React.createElement(Single, { item, index });
        })
      ),
      React.createElement(
        Page,
        { size: "A4", style: styles.page },
        React.createElement(Header, { data }),

        React.createElement(firstRow, { Alternative: true }),
        dataMapped.map((item, index) => {
          return React.createElement(Alternative, { item, index });
        })
      ),
    ];
  }
  return null;
};
