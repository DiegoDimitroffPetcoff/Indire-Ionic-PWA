import React from "react";
import { Text } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../styles";
let lastidTemplate = null;
export function titles(module) {
  const isSameTemplate = lastidTemplate === module.idTemplate;
  let titleTemplate = `${module.idTemplate}. ${module.name || module.title}`
  lastidTemplate = module.idTemplate;
  if (module.type !== "module") {
    titleTemplate =  `#${module.idTemplate.slice(2)}. ${module.name || module.title}`
  }
  return React.createElement(
    Text,
    {
      style: [styles.moduleName, getDynamicStyles(module.type)],
      id: !isSameTemplate && lastidTemplate,
    },
    isSameTemplate
      ? module.name || module.title
      : titleTemplate
  );
}
