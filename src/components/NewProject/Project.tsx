import { useContext, useEffect, useState } from "react";
import { Modules } from "./M/Modules";
import { Introduction } from "./I/Introduction";
import { IonContent } from "@ionic/react";
import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";

import { saveProject } from "../../services/storageService";
import { Spinner } from "../Spinner/Spinner";

interface RouteParams {
  id: string;
}

function Project() {
  const { handleSubmite, project, setProject } = useContext(ProjectContext);

  let modules: any[] = project ? project[1].modules : [];
  const [initialProject, setInitialProject] = useState(null);

  // Simulate saving the initial project state when the component mounts
  useEffect(() => {
    console.log("prokject",project);
    
    if (project) {
      setInitialProject(JSON.parse(JSON.stringify(project)));
      saveProject("initialProject", project);
    }
  }, [project]);

  const restoreInitialProject = () => {
    if (initialProject) {
      setProject(JSON.parse(JSON.stringify(initialProject)));
    }
  };

  if (!project || !modules) {
    return <Spinner />;
  }

  return (
    <IonContent>
      <form onSubmit={handleSubmite}>
        <Introduction />
        {modules.map((_, moduleId) => (
          <Modules moduleId={moduleId} key={moduleId} />
        ))}
      </form>
    </IonContent>
  );
}
export default Project;
