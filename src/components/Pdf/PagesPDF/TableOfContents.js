import React from "react";
import { View, Link, Text, Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { Header } from "./Header";

export function TableOfContents({ data, dataIterated }) {
  function generateIndex(data) {
    let index = [];
    let currentPage = 1;
    let lastTemplate = null;
    data.forEach((item) => {
      if (lastTemplate !== item.idTemplate) {
        index.push({
          title: item.name ? item.name : item.title,
          idTemplate: item.idTemplate,
          page: currentPage,
        });
        currentPage += 1;
      }
      lastTemplate = item.idTemplate;
    });
    return index;
  }

  const indexList = generateIndex(dataIterated);

  return React.createElement(
    Page,
    { size: "A4", style: styles.page },
    React.createElement(Header, { data }),
    React.createElement(
      View,
      { style: styles.tableOfContents },
      React.createElement(Text, { style: styles.indexTitle }, "ÍNDICE"),
      indexList.map((item, index) =>
        React.createElement(
          View,
          {
            key: index,
            style: { flexDirection: "row", justifyContent: "space-between" },
          },
          
          React.createElement(
            Link,
            { style: styles.indexPageNumber, src: `#${item.idTemplate}` },
            React.createElement(Text, null, item.idTemplate)
          ),
          React.createElement(
            Text,
            { style: styles.indexItem },
            capitalizeFirstLetter(item.title)
          ),
        )
      )
    )
  );
}
