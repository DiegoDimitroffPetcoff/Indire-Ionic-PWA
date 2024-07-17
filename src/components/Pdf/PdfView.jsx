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

import { styles } from "./styles";
import { Header } from "./Header";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { Introduction } from "./Introduction";
import { Modules } from "./Modules";
import { BudgetTable } from "./BudgetTable";

export const PdfView = () => {
  const { project } = useContext(ProjectContext);

  return (
    <IonContent>
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

export const MyDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header data={{ data }} />
        <Introduction data={data} />
        <Modules data={data} />

        {/*         <BudgetTable budget={data} /> */}
      </Page>
    </Document>
  );
};
