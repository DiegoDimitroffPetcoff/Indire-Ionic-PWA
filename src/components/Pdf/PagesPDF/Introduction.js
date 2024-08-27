import React from "react";
import { Text, View, Image, Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";
import { dateChanger } from "../../../utils/dateChanger";

export function Introduction({ introduction }) {
  return React.createElement(
    Page,
    { size: "A4", style: styles.page },
    React.createElement(
      View,
      null,
      introduction
        ? React.createElement(
            View,
            null,
            React.createElement(Image, {
              style: styles.logo,
              src: "/INDIRE_LOGO.png",
            }),
            React.createElement(
              View,
              { style: styles.header },
              React.createElement(
                Text,
                { style: styles.mainTitle },
                introduction.title
              ),
              React.createElement(
                Text,
                { style: styles.text },
                introduction.address
              ),
              introduction.main_img_url
                ? React.createElement(Image, {
                    style: styles.mainImg,
                    src: introduction.main_img_url,
                  })
                : React.createElement(Image, {
                    style: styles.mainImg,
                    src: "/empty.png",
                    alt: "No image Added",
                  }),
              React.createElement(
                Text,
                { style: styles.sub_title },
                introduction.sub_title
              ),
              React.createElement(
                Text,
                { style: styles.sub_title },
                dateChanger(introduction.date)
              ),
              React.createElement(
                Text,
                { style: styles.contentProjectInformation },
                `Ref.`,
                React.createElement(
                  Text,
                  { style: styles.superscript },
                  "a"
                ),
                `${dateChanger(introduction.date)}_${introduction.project_number}_${introduction.title}_V${introduction.version}`
              )
            )
          )
        : React.createElement(Text, null)
    )
  );
}
