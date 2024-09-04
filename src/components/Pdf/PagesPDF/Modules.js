import React from "react";
import { Page, View, Text, Image } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../../public/styles";
import { Header } from "./Header";
import { budgetTemplate } from "../../../utils/budgetTemplate";
import { FirstSection } from "./FirstSection";

export function Modules({
  module,
  isSameTemplate,
  dynamicStyle,
  lastidTemplate,
}) {
  let template = budgetTemplate(module, isSameTemplate);
  const images = Array.isArray(module.img) ? module.img : [];

  return React.createElement(
    View,
    { key: `${lastidTemplate}`, style: styles.module },
    React.createElement(
      Text,
      {
        style: [styles.moduleName, dynamicStyle],
        id: !isSameTemplate && lastidTemplate,
      },
      isSameTemplate && module.name !== undefined
        ? module.name
        : `${module.idTemplate}. ${module.name || module.title}`
    ),
    /* --------------CONTENT-------------- */
    module.content &&
      module.content.map((content, index) => {
        let title;
        if (index === 0) {
          title = "";
        } else {
          title = `${module.idTemplate}. ${content.title}`;
        }
        return React.createElement(View, { key: index }, [
          React.createElement(
            Text,
            { key: `${index}-description`, style: styles.moduleName },
            title
          ),
          React.createElement(
            Text,
            { key: `${index}-description`, style: styles.moduleText },
            content.description
          ),
        ]);
      }),

    /* --------------IMAGES-------------- */
    images.length > 0 &&
      !isSameTemplate &&
      React.createElement(
        View,
        {
          style: {
            display: "flex",
            flexDirection: "row", // Align images in a row
            flexWrap: "wrap", // Allow wrapping to new lines
            justifyContent: "space-between", // Adjust spacing between images
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
            }, // Adjust styles as needed
          })
        )
      ),
    /* --------------BUDGET-------------- */
    React.createElement(
      Text,
      { style: styles.moduleText },

      module.budget && module.budget.length > 0 && !isSameTemplate
        ? template
        : ""
    )
  );
}
