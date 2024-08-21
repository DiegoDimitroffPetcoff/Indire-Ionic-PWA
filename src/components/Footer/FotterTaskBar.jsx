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
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useIsSignedIn } from "@microsoft/mgt-react";
import { pdf } from "@react-pdf/renderer";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { MyDocument } from "../Pdf/PdfView";
import PostOneDrive from "../../services/PostOneDrive";

export function FotterTaskBar({ setView, view }) {
  const [isSignedIn] = useIsSignedIn();
  const { project, subsectionTemplates, modulesTemplates, AddProjectToList } =
    useContext(ProjectContext);

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
    try {
      const blob = await pdf(<MyDocument data={project} />).toBlob();
      await PostOneDrive(blob, title);
    } catch (error) {
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
                <IonCol>
                  <IonButton fill="outline" disabled={loading}>
                    <IonIcon icon={downloadOutline}></IonIcon>
                    {loading ? <>...</> : error ? `Erro: ${error.message}` : ""}
                  </IonButton>
                  {error && (
                    <p style={{ color: "red" }}>
                      Failed to generate PDF: {error.message}
                    </p>
                  )}
                </IonCol>
              );
            }}
          </PDFDownloadLink>
          <IonCol>
            <IonButton
              fill="outline"
              routerLink="/projectList"
              onClick={() => AddProjectToList(project)}
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
