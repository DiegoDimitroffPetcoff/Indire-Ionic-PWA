import React from "react";
import { Page, View, Text } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../../public/styles";
import { Header } from "./Header";

export function Modules({ data, dataIterated }) {
  let lastidTemplate = null;

  return React.createElement(
    Page,
    { size: "A4", style: styles.page },
    React.createElement(Header, { data }),

    React.createElement(
      View,
      null,
      dataIterated.map((module, index) => {
        const isSameTemplate = lastidTemplate === module.idTemplate;
        let dynamicStyle = isSameTemplate
          ? getDynamicStyles(2)
          : getDynamicStyles(1);

        lastidTemplate = module.idTemplate;

        return React.createElement(
          View,
          { key: index, style: styles.module },
          React.createElement(
            Text,
            {
              style: [styles.moduleName, dynamicStyle],
              id: !isSameTemplate && lastidTemplate,
            },
            isSameTemplate
              ? module.name || module.title
              : `${module.idTemplate}. ${module.name || module.title}`
          ),
          React.createElement(Text, { style: styles.moduleText }, module.description)
        );
      })
    )
  );
}
