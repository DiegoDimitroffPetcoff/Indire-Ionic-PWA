import React from "react";
import { View } from "@react-pdf/renderer";
import { styles } from "../../styles";
import { descriptions } from "./descriptions";
import { titles } from "./titles";

export function Content({ dataIterated }) {
  return React.createElement(
    View,
    null,
    dataIterated.map((module, i) => {
      return React.createElement(
        View,
        { key: i, style: styles.module },
        titles(module),
        descriptions(module)
      );
    })
  );
}
