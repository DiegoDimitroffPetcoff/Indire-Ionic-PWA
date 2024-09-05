import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../../styles";

export function descriptions(module) {
  if (module.type === "module") {
    return React.createElement(
      Text,
      { style: styles.moduleText },
      module.description
    );
  } else {
    if (Array.isArray(module.content)) {
      console.log(module);

      return [
        module.content.map((content, index) => {
          return [
            React.createElement(
              Text,
              { key: index + "-title", style: styles.moduleName },
              content.title
            ),
            React.createElement(
              Text,
              { key: index + "-description", style: styles.moduleText },
              content.description
            ),
          ];
        }),
        module.img.length > 0 &&
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
            module.img.map((imageSrc, imgIndex) =>
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
      ];
    }
  }
}
