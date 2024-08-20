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
import { PDFDownloadLink } from "@react-pdf/renderer";

import { styles } from "../../../public/styles";
import { Header } from "./Header";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext,  } from "react";
import { Introduction } from "./Introduction";
import { Modules } from "./Modules";
import { BudgetTable } from "./BudgetTable";
import "./PdfView.css"
export const PdfView = () => {
  const { project } = useContext(ProjectContext);

  return (
    <IonContent>
{/*       <PDFViewer width="100%" height="100%">
        <MyDocument data={project} />
      </PDFViewer> */}
    <div>
      <PDFDownloadLink document={<MyDocument data={project} />}>
        {({ blob, url, loading, error }) => {
          if (loading) return <p>Cargando PDF...</p>;
          if (error) return <p>Error al generar el PDF: {error.message}</p>;

          return (
            <iframe
              src={url}
              title="PDF Document"
              width="100%"
              height="600px"
            />
          );
        }}
      </PDFDownloadLink>
    </div>
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
      <Introduction data={data} />
      <Modules data={data} />

      {/*         <BudgetTable budget={data} /> */}
    </Document>
  );
};
