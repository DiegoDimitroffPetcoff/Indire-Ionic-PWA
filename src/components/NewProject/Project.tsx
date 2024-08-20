import { useContext, useEffect, useState } from "react";
import { Modules } from "./M/Modules";
import { Introduction } from "./I/Introduction";
import {
  IonContent,
  IonButton,
  IonSpinner,
  IonCol,
  IonGrid,
  IonRow,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";
import { useParams } from "react-router";
import { saveProject } from "../../services/storageService";
import { Spinner } from "../Spinner/Spinner";
import { useHistory } from "react-router";
interface RouteParams {
  id: string;
}

export function Project() {
  const { handleSubmite, project, setProject } = useContext(ProjectContext);

  let modules: any[] = project ? project[1].modules : [];
  const [initialProject, setInitialProject] = useState(null);

  // Simulate saving the initial project state when the component mounts
  useEffect(() => {
    if (project) {
      console.log(
        "Almacenar el estado inicial del proyecto cuando el componente se monta"
      );
      setInitialProject(JSON.parse(JSON.stringify(project)));
      saveProject("initialProject", project);
    }
  }, [project]);

  const restoreInitialProject = () => {
    if (initialProject) {
      setProject(JSON.parse(JSON.stringify(initialProject)));
    }
  };

  // Render the spinner if the project is null
  if (!project || !modules) {
    return <Spinner />;
  }
  const canGoBack = history.length > 2;
  return (
    <IonContent>
{/*       {canGoBack && (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/projectList" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      )} */}
      <form onSubmit={handleSubmite}>
        <Introduction />
        {modules.map((_, moduleId) => (
          <Modules moduleId={moduleId} key={moduleId} />
        ))}
      </form>
    </IonContent>
  );
}
