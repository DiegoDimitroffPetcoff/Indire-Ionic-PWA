import {
  Page,
  View,
  Text,
  Document,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { styles } from "./styles";

import { BudgetTable } from "./BudgetTable";
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
              idTemplate: `#${moduleId + 1}.${sectionId + 1}`,
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
                  idTemplate: `#${moduleId + 1}.${sectionId + 1}.${
                    subsectionId + 1
                  }`,
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
                        idTemplate: `#${moduleId + 1}.${sectionId + 1}.${
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
    <View>
      {allData.map((module, index) => {
        const isSameTemplate = lastidTemplate === module.idTemplate;
        lastidTemplate = module.idTemplate;

        lastidTemplate = module.idTemplate;
        return (
          <View key={index} style={styles.module}>
            <Text style={styles.moduleTitle}>
              {isSameTemplate
                ? module.title
                : `${module.idTemplate}. ${module.title}`}
            </Text>
            <Text style={styles.moduleText}>{module.description}</Text>
          </View>
        );
      })}
      <BudgetTable allData={allData} />
    </View>
  );
}
/*       {modules.modules.map((module, moduleIndex) => {
        //if there is no description or title, the module is not gonna be showed
        if (module.description.trim() !== "" || module.title.trim() !== "") {
          console.log(module);
          return (
            <View key={moduleIndex} style={styles.module}>
              <Text style={styles.moduleTitle}>
                # {moduleIndex + 1}.{module.module.toUpperCase()}
              </Text>
              <Text style={styles.moduleText}>
                {capitalizeFirstLetter(module.description)}
              </Text>

              <View>
                {module.sections && (
                  <RenderFirstSections sections={module.sections} moduleIndex={moduleIndex}/>
                )}
              </View>

              <BudgetTable allData={allData} />
            </View>
          );
        }
      })}
         */