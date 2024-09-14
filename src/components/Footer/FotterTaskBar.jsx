import {
  IonButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonCol,
  IonGrid,
  IonContent,
  IonSpinner,
} from "@ionic/react";
import {
  downloadOutline,
  clipboardOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";

import { useIsSignedIn } from "@microsoft/mgt-react";
import { pdf } from "@react-pdf/renderer";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
/* import { MyDocument } from "../Pdf/PdfView"; */
import PostOneDrive from "../../services/PostOneDrive";
import { useRenderPDF } from "../../hooks/useRenderPDF";
import { PDF } from "../Pdf/PagesPDF/PDF";

export function FotterTaskBar({ setView, view }) {
  const [isSignedIn] = useIsSignedIn();
  const { project, AddProjectToList, selectedFolder } =
    useContext(ProjectContext);
  const { url, loading, error } = useRenderPDF(project);

  // Render the spinner if the project is null
  if (!project) {
    return (
      <IonContent>
        <div className="spinner-container">
          <IonSpinner name="crescent" />
        </div>
      </IonContent>
    );
  }
  const { title } = project[0].introduction;

  const handleSaveToOneDrive = async () => {
    console.log("handleSaveToOneDrive");

    try {
      const blob = await pdf(PDF(project)).toBlob();
      await PostOneDrive(blob, title, selectedFolder);
    } catch (error) {
      console.error("Failed to upload to OneDrive", error);
    }
  };

  return (
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          {url ? (
            <IonCol>
              <IonButton fill="outline">
                <a href={url} download={`${title}.pdf`}>
                  <IonIcon icon={downloadOutline}></IonIcon>
                </a>
              </IonButton>
            </IonCol>
          ) : (
            <IonCol>
              <IonButton fill="outline">
                <IonIcon>...</IonIcon>
              </IonButton>
            </IonCol>
          )}
          <IonCol>
            <IonButton
              fill="outline"
              routerLink="/projectList"
              onClick={() => {
                AddProjectToList(project);
              }}
            >
              <IonIcon icon={saveOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              disabled={!isSignedIn}
              fill="outline"
              onClick={handleSaveToOneDrive}
            >
              <IonIcon icon={cloudCircle}></IonIcon>
            </IonButton>
          </IonCol>
          {/*       <IonCol>
            <IonButton fill="outline">
              <IonIcon icon={documentOutline}></IonIcon>
              Word
            </IonButton>
          </IonCol> */}
          <IonCol>
            <IonButton fill="outline" onClick={() => setView(!view)}>
              <IonIcon icon={clipboardOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
}
