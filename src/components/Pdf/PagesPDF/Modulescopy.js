import React from "react";
import { Page, View, Text, Image } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../../public/styles";
import { Header } from "./Header";
import { budgetTemplate } from "../../../utils/budgetTemplate";

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
        let template = budgetTemplate(module, isSameTemplate);
        const images = Array.isArray(module.img) ? module.img : [];

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
          React.createElement(
            Text,
            { style: styles.moduleText },
            module.description,
            module.budget && module.budget.length > 0 && !isSameTemplate
              ? template
              : ""
          ),

          images.length > 0 &&
            !isSameTemplate &&
            React.createElement(
              View,
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                },
              },
              images.map((imageSrc, imgIndex) =>
                React.createElement(Image, {
                  key: imgIndex,
                  src: imageSrc,
                  style: {
                    width: 100,
                    height: 100,
                    marginBottom: 10,
                  },
                })
              )
            )
        );
      })
    )
  );
}
