import {
  Page,
  Text,
  View,
  Document,
  Image,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { IonContent } from "@ionic/react";

import data from "./mock.json";
import { RenderSections } from "./RenderSections";
import { styles } from "./styles";
export const PdfView = () => (
  <IonContent>
    {" "}
    <PDFViewer width="100%" height="100%">
      <MyDocument data={data} />
    </PDFViewer>
  </IonContent>
);
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

const MyDocument = ({ data }) => (
  <Document>
    {data.map((page, pageIndex) => (
      <Page key={pageIndex} size="A4" style={styles.page}>
        {page.introduction && (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>{page.introduction.title}</Text>
              <Text style={styles.subTitle}>{page.introduction.sub_title}</Text>
              <Image style={styles.logo} src={page.introduction.main_img_url} />
              <Text style={styles.text}>{page.introduction.address}</Text>
              <Text style={styles.text}>
                Project Number: {page.introduction.project_number}
              </Text>
              <Text style={styles.text}>Date: {page.introduction.date}</Text>
              <Text style={styles.text}>
                Version: {page.introduction.version}
              </Text>
            </View>
            {page.introduction.main_img_url && (
              <Image
                style={styles.mainImage}
                src={page.introduction.main_img_url}
              />
            )}
          </View>
        )}
        {page.modules &&
          page.modules.map((module, moduleIndex) => (
            <View key={moduleIndex} style={styles.section}>
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
      </Page>
    ))}
  </Document>
);
