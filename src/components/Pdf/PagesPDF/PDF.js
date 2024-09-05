import React from "react";
import { Page, Document, Text, View } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../../public/styles";
import { Introduction } from "./Introduction";
import { Iterator } from "../../../utils/Iterator";
import { Modules } from "./Modules.js";
import { TableOfContents } from "./TableOfContents";
import { BudgetTable } from "./BudgetTable";
import { Header } from "./Header";

export const PDF = (data) => {
  if (!data || !data[0]) {
    return React.createElement(
      Document,
      null,
      React.createElement(Page, { size: "A4", style: styles.page })
    );
  }

  let lastidTemplate = null;

  // Desestructuración de datos
  const { introduction } = data[0];
  const dataIterated = data[1]?.modules ? Iterator(data[1].modules) : [];

  return React.createElement(
    Document,
    null,
    React.createElement(Introduction, { introduction }),
    React.createElement(TableOfContents, { data, dataIterated }),
    React.createElement(Modules, { data, dataIterated }),
    React.createElement(BudgetTable, { dataIterated })
  );
};
