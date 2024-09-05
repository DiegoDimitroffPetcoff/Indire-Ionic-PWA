import React from "react";
import { Text } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../styles";
let lastidTemplate = null;
export function titles(module) {
  const isSameTemplate = lastidTemplate === module.idTemplate;
  let dynamicStyle = isSameTemplate ? getDynamicStyles(2) : getDynamicStyles(1);

  lastidTemplate = module.idTemplate;

  return React.createElement(
    Text,
    {
      style: [styles.moduleName, dynamicStyle],
      id: !isSameTemplate && lastidTemplate,
    },
    isSameTemplate
      ? module.name || module.title
      : `${module.idTemplate}. ${module.name || module.title}`
  );
}
