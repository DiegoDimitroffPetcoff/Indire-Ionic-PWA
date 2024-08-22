import { useContext } from "react";
import "./PdfView.css";
import { IonContent } from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
import { useRenderPDF } from "../../hooks/useRenderPDF";

const PdfView = () => {
  const { project } = useContext(ProjectContext);
  const { url, loading, error } = useRenderPDF(project);
  if (loading) return <p>Generating PDF...</p>;
  if (error) return <p>Error generating PDF: {error.message}</p>;
  return (
    
    <IonContent>{url && <iframe src={url} title="PDF Document" />}</IonContent>
  );
};
export default PdfView;
