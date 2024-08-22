import { useContext } from "react";
import "./PdfView.css";
import { IonContent } from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
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

/* Font.register({
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
 */
