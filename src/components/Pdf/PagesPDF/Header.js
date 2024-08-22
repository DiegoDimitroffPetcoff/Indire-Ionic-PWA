import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";

export function Header({ data }) {
  const { introduction } = data[0];

  return React.createElement(
    View,
    { fixed: true },
    React.createElement(
      Text,
      { style: styles.headerContent },
      introduction.project_number +
        "_" +
        introduction.title +
        "_V" +
        introduction.version
    ),
    React.createElement(Image, { style: styles.logoHeader, src: "/INDIRE_LOGO.png" }),
    React.createElement(Text, { style: styles.headerTitle }, introduction.title),
    React.createElement(Text, { style: styles.headerContent }, introduction.address),
    React.createElement(Text, {
      style: styles.pageNumberHeader,
      render: ({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`,
      fixed: true
    }),
    React.createElement(
      Text,
      { style: styles.headerContent },
      "---------------------------------------------------------------------------------------------------"
    )
  );
}
