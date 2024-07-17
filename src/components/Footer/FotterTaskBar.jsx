import {
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
} from "@ionic/react";
import {
  create,
  copyOutline,
  clipboardOutline,
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";
import { useParams } from "react-router";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { MyDocument } from "../Pdf/PdfView";

export function FotterTaskBar({ setView }) {
  const { project } = useContext(ProjectContext);
  const { title } = project[0].introduction;
  return (
    <IonFooter>
      <IonToolbar>
        <IonButtons slot="start">
          <PDFDownloadLink
            document={<MyDocument data={project} />}
            fileName={title + ".pdf"}
          >
            {({ blob, url, loading, error }) => (
              <>
                <IonButton fill="outline" disabled={loading}>
                  <IonIcon slot="end" icon={saveOutline}></IonIcon>
                  {loading
                    ? "Loading..."
                    : error
                    ? `Error: ${error.message}`
                    : "Save"}
                </IonButton>
                {error && (
                  <p style={{ color: "red" }}>
                    Failed to generate PDF: {error.message}
                  </p>
                )}
              </>
            )}
          </PDFDownloadLink>
        </IonButtons>
        <IonButtons slot="start">
          <IonButton fill="outline">
            <IonIcon slot="end" icon={cloudCircle}></IonIcon>
            OnDrive
          </IonButton>
        </IonButtons>

        <IonButtons slot="start">
          <IonButton fill="outline">
            <IonIcon slot="end" icon={copyOutline}></IonIcon>
            Template
          </IonButton>
        </IonButtons>

        <IonButtons slot="start">
          <IonButton fill="outline">
            <IonIcon slot="end" icon={documentOutline}></IonIcon>
            Word
          </IonButton>
        </IonButtons>
        <IonButtons slot="start" onClick={() => setView(!view)}>
          <IonButton fill="outline">
            <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
            PDF
          </IonButton>
        </IonButtons>
        <IonButtons slot="start" onClick={() => setView(!view)}>
          <IonButton fill="outline">
            <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
            PROJECT
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
}
