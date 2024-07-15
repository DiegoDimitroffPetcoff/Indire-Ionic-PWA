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
export function Modules({ data }) {
  const [introduction, modules] = data;

  let moduleCounter = 1;
  /* console.log(modules.modules); */
  return (
    <View>
      {modules.modules.map((module, moduleIndex) => {
        //if there is no description or title, de module is not gonna be showed

        if (module.description.trim() !== "" || module.title.trim() !== "") {
          return (
            <View key={moduleIndex} style={styles.module}>
              <Text style={styles.moduleTitle}>
                # {moduleCounter++}.{module.module.toUpperCase()}
              </Text>
              <Text style={styles.moduleText}>
                {capitalizeFirstLetter(module.description)}
              </Text>
              {/* EL MAIN SECTION ESTA SOLO EN EL MOCK TENGO QUE ELIMINARLOS */}
              {/*       {module.mainSection && (
                <RenderSections sections={module.mainSection} />
              )} */}
              <View>
                {module.sections && (
                  <RenderFirstSections sections={module.sections} />
                )}
              </View>
            </View>
          );
        }
      })}
    </View>
  );
}
