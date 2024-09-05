import React from "react";
import { View } from "@react-pdf/renderer";
import { styles } from "../../styles";
import { descriptions } from "./descriptions";
import { titles } from "./titles";

export function Content({ dataIterated }) {
  return React.createElement(
    View,
    null,
    dataIterated.map((module, index) => {
      return React.createElement(
        View,
        { key: index, style: styles.module },
        titles(module),
        descriptions(module)
      );
    })
  );
}
