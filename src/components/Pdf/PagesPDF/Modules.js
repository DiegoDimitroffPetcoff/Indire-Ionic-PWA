import React from "react";
import { Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";
import { Header } from "./Header";
import { Content } from "./content/content";

export function Modules({ data, dataIterated }) {
  return React.createElement(
    Page,
    { size: "A4", style: styles.page },
    React.createElement(Header, { data }),
    React.createElement(Content, { dataIterated })
  );
}
