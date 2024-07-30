import { useContext, useEffect } from "react";
import { Modules } from "./M/Modules";
import { Introduction } from "./I/Introduction";
import { IonContent, IonButton } from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";
import { useParams } from "react-router";

interface RouteParams {
  id: string;
}

export function Project() {
  const { handleSubmite, project, updateProject } = useContext(ProjectContext);
  const { id } = useParams<RouteParams>();
  let modules: any[] = project[1].modules || [];

  return (
    <IonContent>
      <IonButton onClick={() => updateProject()}>Refresh</IonButton>
      <form onSubmit={handleSubmite}>
        <Introduction />
        {modules.map((_, moduleId) => (
          <Modules moduleId={moduleId} key={moduleId} />
        ))}
      </form>
    </IonContent>
  );
}
