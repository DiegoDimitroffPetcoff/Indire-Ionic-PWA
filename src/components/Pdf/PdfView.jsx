import {
  Page,
  View,
  Text,
  Document,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { IonContent } from "@ionic/react";

import data from "./mock.json";
import { RenderSections } from "./RenderSections";
import { styles } from "./styles";
import { Header } from "./Header";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { Introduction } from "./Introduction";
export const PdfView = () => {
  const { project } = useContext(ProjectContext);

  return (
    <IonContent>
      {" "}
      <PDFViewer width="100%" height="100%">
        <MyDocument data={project} />
      </PDFViewer>
    </IonContent>
  );
};
// Register fonts
Font.register({
  family: "Arial",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/arial/v15/QldKNThLqRwH-OJ1UHjlKGlZ5YMk5Jw.woff2",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/arial/v15/QldKNThLqRwH-OJ1UHjlKGlZ5YMk5Jw.woff2",
      fontWeight: 700,
    },
  ],
});

const MyDocument = ({ data }) => {
  const [introduction, modules] = data;
  console.log(modules);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let moduleCounter = 1;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header data={{ data }} />
        <Introduction data={data} />
        {modules.modules.map((module, moduleIndex) => {
          //if there is no description or title, de module is not gonna be showed

          if (module.description !== "" || module.title !== "") {
            return (
              <View key={moduleIndex} style={styles.module}>
                <Text style={styles.moduleTitle}>
                  {moduleCounter++}.{module.module.toUpperCase()}
                </Text>
                <Text style={styles.moduleText}>
                  {capitalizeFirstLetter(module.description)}
                </Text>
                {module.mainSection && (
                  <RenderSections sections={module.mainSection} />
                )}
                {module.sections && (
                  <RenderSections sections={module.sections} />
                )}
              </View>
            );
          }
        })}
        )
      </Page>
    </Document>
  );
};
/* 


        {data[0].map((page, pageIndex) => ({
          /*         {page.modules &&
          modules.modules.map((module, moduleIndex) => (
            <View key={moduleIndex} style={styles.module}>
              <Text style={styles.moduleTitle}>{module.module}</Text>
              <Text style={styles.moduleText}>{module.description}</Text>
              {module.mainSection && (
                <RenderSections sections={module.mainSection} />
              )}
              {module.sections && <RenderSections sections={module.sections} />}
            </View>
          ))}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        /> 
      }))}



*/
