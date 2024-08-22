import React from "react";
import { Text, View, Image, Page } from "@react-pdf/renderer";
import { styles } from "../../../../public/styles";

export function Introduction({ introduction }) {
/*   const { introduction } = data[0]; */

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
              React.createElement(Text, { style: styles.text }, introduction.address),
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
                { style: styles.contentProjectInformation },
                `${introduction.project_number}-${introduction.title}-V${introduction.version}`
              )
            )
          )
        : React.createElement(Text, null)
    )
  );
}
