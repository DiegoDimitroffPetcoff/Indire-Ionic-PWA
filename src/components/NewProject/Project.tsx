import { useContext, useEffect } from "react";
import { Modules } from "./M/Modules";
import { Introduction } from "./I/Introduction";
import { IonContent } from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";
import { useParams } from "react-router";
interface RouteParams {
  id: string;
}

export function Project() {
  const { handleSubmite } = useContext(ProjectContext);
  const { project } = useContext(ProjectContext);
  const modules: any[] = project[1].modules || [];
  const { id } = useParams<RouteParams>();
  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);
  return (
    <IonContent>
      <form onSubmit={handleSubmite}>
        <Introduction />
        {modules.map((_, moduleId) => {
          return <Modules moduleId={moduleId} key={moduleId} />;
        })}
      </form>
    </IonContent>
  );
}
