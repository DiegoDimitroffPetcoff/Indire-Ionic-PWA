import {
  Page,
  View,
  Text,
  Document,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { styles } from "./styles";
import { RenderSections } from "./RenderSections";
import { RenderFirstSections } from "./RenderFirstSections";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { BudgetTable } from "./BudgetTable";
export function Modules({ data }) {
  const [introduction, modules] = data;

  let moduleCounter = 1;

  let allData = [];

  function iterateModules(modules) {
    modules.forEach((module, moduleId) => {
      // Agregar el módulo principal
      allData.push({
        name: module.module,
        description: module.description,
        title: module.title,
        idTemplate: `#${moduleId + 1}`,
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

  // Llamada a la función con los módulos del JSON
  if (data[1] && data[1].modules) {
    iterateModules(data[1].modules);
  }

  console.log(allData);

  return (
    <View>
      {modules.modules.map((module, moduleIndex) => {
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
    </View>
  );
}
