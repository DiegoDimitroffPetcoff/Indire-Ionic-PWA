import { useContext, useEffect, useState } from "react";
import "./PdfView.css";
import { Document, Font, PDFDownloadLink } from "@react-pdf/renderer";
import { IonContent } from "@ionic/react";

import { ProjectContext } from "../../context/ProjectContext";
import { Iterator } from "../../utils/Iterator";
import { Introduction } from "./PagesPDF/Introduction";
import { Modules } from "./PagesPDF/Modules";
import { BudgetTable } from "./PagesPDF/BudgetTable";
import { TableOfContents } from "./PagesPDF/TableOfContents";
import { useRenderPDF } from "../../hooks/useRenderPDF";

export const PdfView = () => {
  const { project } = useContext(ProjectContext);

  const { url, loading, error } = useRenderPDF(project);

  if (loading) return <p>Generating PDF...</p>;
  if (error) return <p>Error generating PDF: {error.message}</p>;

  return (
    <IonContent>{url && <iframe src={url} title="PDF Document" />}</IonContent>
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
