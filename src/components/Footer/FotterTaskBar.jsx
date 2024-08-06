import {
  IonButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonCol,
  IonGrid,
} from "@ionic/react";
import {
  copyOutline,
  downloadOutline,
  clipboardOutline,
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useIsSignedIn } from "@microsoft/mgt-react";

import { pdf, Document, Page } from "@react-pdf/renderer";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext, useEffect, useState } from "react";
import { MyDocument } from "../Pdf/PdfView";
import PostOneDrive from "../../services/PostOneDrive";

export function FotterTaskBar({ setView, view }) {
  const [isSignedIn] = useIsSignedIn();

  const { project, AddProjectToList } = useContext(ProjectContext);
  const { title } = project[0].introduction;
  const handleSaveToOneDrive = async () => {
    try {
      const blob = await pdf(<MyDocument data={project} />).toBlob();
      await PostOneDrive(blob, title);
    } catch (error) {
      setError(error);
      console.error("Failed to upload to OneDrive", error);
    }
  };

  return (
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <PDFDownloadLink
            document={<MyDocument data={project} />}
            fileName={title + ".pdf"}
          >
            {({ blob, url, loading, error }) => {
              return (
                <>
                  <IonButton
                    fill="outline"
                    disabled={loading}
                    onClick={() => {
                      PostOneDrive(blob);
                    }}
                  >
                    <IonIcon slot="end" icon={downloadOutline}></IonIcon>
                    {loading
                      ? "..."
                      : error
                      ? `Erro: ${error.message}`
                      : "Download"}
                  </IonButton>
                  {error && (
                    <p style={{ color: "red" }}>
                      Failed to generate PDF: {error.message}
                    </p>
                  )}
                </>
              );
            }}
          </PDFDownloadLink>
          <IonCol>
            {" "}
            <IonButton
              fill="outline"
              routerLink="/projectList"
              onClick={() => AddProjectToList(project)}
            >
              <IonIcon slot="end" icon={saveOutline}></IonIcon>
              Salvar cópia no dispositivo
            </IonButton>
          </IonCol>
          <IonCol>
            {" "}
            <IonButton
              disabled={!isSignedIn}
              fill="outline"
              onClick={handleSaveToOneDrive}
            >
              <IonIcon slot="end" icon={cloudCircle}></IonIcon>
              OnDrive
            </IonButton>
          </IonCol>
          <IonCol>
            {" "}
            <IonButton fill="outline">
              <IonIcon slot="end" icon={documentOutline}></IonIcon>
              Word
            </IonButton>
          </IonCol>
          <IonCol>
            {" "}
            <IonButton fill="outline" onClick={() => setView(!view)}>
              <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
              PDF
            </IonButton>
          </IonCol>
          <IonCol>
            {" "}
            <IonButton fill="outline">
              <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
              Projeto
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
}
