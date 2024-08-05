import { useContext, useEffect, useState } from "react";
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
  const { handleSubmite, project, resetProjectAndList } =
    useContext(ProjectContext);
  /*   const { id } = useParams<RouteParams>(); */
  let modules: any[] = project[1].modules || [];
  const [initialProject, setInitialProject] = useState(null);

  useEffect(() => {
    console.log(
      "Almacenar el estado inicial del proyecto cuando el componente se monta"
    );

    setInitialProject(JSON.parse(JSON.stringify(project)));
  }, []);

  return (
    <IonContent>
      <IonButton onClick={() => resetProjectAndList(initialProject)}>
        Restaurar ao estado inicial
      </IonButton>

      <form onSubmit={handleSubmite}>
        <Introduction />
        {modules.map((_, moduleId) => (
          <Modules moduleId={moduleId} key={moduleId} />
        ))}
      </form>
    </IonContent>
  );
}
