import { Document, Font } from "@react-pdf/renderer";
import { IonContent } from "@ionic/react";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { Introduction } from "./Introduction";
import { Modules } from "./Modules";
import { BudgetTable } from "./BudgetTable";
import "./PdfView.css";
import { Iterator } from "../../utils/Iterator";
import { TableOfContents } from "./TableOfContents";

export const PdfView = () => {
  const { project } = useContext(ProjectContext);

  return (
    <IonContent>
      <PDFDownloadLink document={<MyDocument data={project} />}>
        {({ blob, url, loading, error }) => {
          if (loading) return <p>Cargando PDF...</p>;
          if (error) return <p>Error al generar el PDF: {error.message}</p>;
          return <iframe src={url} title="PDF Document" />;
        }}
      </PDFDownloadLink>
    </IonContent>
  );
};

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
  let dataIterated;
  if (data[1] && data[1].modules) {
    dataIterated = Iterator(data[1].modules);
  } else {
    dataIterated = [];
  }

  return (
    <Document>
      <Introduction data={data} />
      <TableOfContents data={data} dataIterated={dataIterated} />
      <Modules data={data} dataIterated={dataIterated} />
      <BudgetTable dataIterated={dataIterated} />
    </Document>
  );
};
