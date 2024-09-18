import {
  IonButton,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonCol,
  IonGrid,
} from "@ionic/react";
import {
  downloadOutline,
  clipboardOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";

import { useIsSignedIn } from "@microsoft/mgt-react";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import PostOneDrive from "../../services/PostOneDrive";
import { useRenderPDF } from "../../hooks/useRenderPDF";
import { Spinner } from "../Spinner/Spinner";

export function FotterTaskBar({ setView, view }) {
  const [isSignedIn] = useIsSignedIn();
  const { project, AddProjectToList, selectedFolder } =
    useContext(ProjectContext);
  const { url, error } = useRenderPDF(project);

  if (!project) {
    return <Spinner message={"Carregando projeto..."} />;
  }
  if (error) {
    return "Ocorreu um erro, tente novamente mais tarde";
  }
  const { title } = project[0].introduction;

  const handleSaveToOneDrive = async () => {
    try {
      await PostOneDrive(project, title, selectedFolder);
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
