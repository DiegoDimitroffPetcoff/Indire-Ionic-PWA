import { Page, View, Text } from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../public/styles";

import { Header } from "./Header";
export function Modules({ data, dataIterated }) {
  let lastidTemplate = null;

  return (
    <Page size="A4" style={styles.page}>
      <Header data={data} />

      <View>
        {dataIterated.map((module, index) => {
          const isSameTemplate = lastidTemplate === module.idTemplate;
          lastidTemplate = module.idTemplate;

          return (
            <View key={index} style={styles.module}>
              <Text
                style={[styles.moduleName, getDynamicStyles(index)]}
                id={!isSameTemplate && lastidTemplate}
              >
                {isSameTemplate
                  ? module.name
                    ? module.name
                    : module.title
                  : `${module.idTemplate}. ${
                      module.name ? module.name : module.title
                    }`}
              </Text>
              <Text style={styles.moduleText}>{module.title}</Text>
              <Text style={styles.moduleText}>{module.description}</Text>
            </View>
          );
        })}
      </View>
    </Page>
  );
}
