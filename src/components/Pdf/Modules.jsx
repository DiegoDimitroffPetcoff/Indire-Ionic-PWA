import {
  Page,
  View,
  Text,
  Document,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { getDynamicStyles, styles } from "../../../public/styles";

import { BudgetTable } from "./BudgetTable";
import { TableOfContents } from "./TableOfContents";
import { Header } from "./Header";
export function Modules({ data }) {
  let allData = [];

  function iterateModules(modules) {
    modules.forEach((module, moduleId) => {
      allData.push({
        name: module.module,
        description: module.description,
        title: module.title,
        idTemplate: `${moduleId + 1}`,
        budget: module.budget || [],
      });

      if (module.sections && module.sections.length > 0) {
        module.sections.forEach((section, sectionId) => {
          section.content.forEach((content) => {
            allData.push({
              name: section.name,
              description: content.description,
              title: content.title,
              idTemplate: `    # ${sectionId + 1}`,
              budget: section.budget || [],
            });
          });

          if (section.sections && section.sections.length > 0) {
            section.sections.forEach((subsection, subsectionId) => {
              subsection.content.forEach((subContent) => {
                allData.push({
                  name: subsection.name,
                  description: subContent.description,
                  title: subContent.title,
                  idTemplate: `    # .${sectionId + 1}.${subsectionId + 1}`,
                  budget: subsection.budget || [],
                });
              });

              if (subsection.sections && subsection.sections.length > 0) {
                subsection.sections.forEach(
                  (subSubsection, subSubsectionId) => {
                    subSubsection.content.forEach((subSubContent) => {
                      allData.push({
                        name: subSubsection.name,
                        description: subSubContent.description,
                        title: subSubContent.title,
                        idTemplate: `    # .${sectionId + 1}.${
                          subsectionId + 1
                        }.${subSubsectionId + 1}`,
                        budget: subSubsection.budget || [],
                      });
                    });
                  }
                );
              }
            });
          }
        });
      }
    });
  }

  if (data[1] && data[1].modules) {
    iterateModules(data[1].modules);
  }
  let lastidTemplate = null;

  return (
    <>
      <Page size="A4" style={styles.page}>
        <Header data={{ data }} />
        <View>
          {/*        <TableOfContents allData={allData} /> */}

          {allData.map((module, index) => {
            const isSameTemplate = lastidTemplate === module.idTemplate;
            lastidTemplate = module.idTemplate;

            return (
              <View key={index} style={styles.module}>
                <Text style={[styles.moduleName, getDynamicStyles(index)]}>
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
      <Page size="A4" style={styles.page}>
        <BudgetTable allData={allData} />
      </Page>
    </>
  );
}
