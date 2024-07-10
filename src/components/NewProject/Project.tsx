import { useContext } from "react";
import { Modules } from "./M/Modules";
import { Introduction } from "./I/Introduction";

import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";

export function Project() {
  const { handleSubmite } = useContext(ProjectContext);
  const { project } = useContext(ProjectContext);
  const modules:any[] = project[1].modules || [];

  return (
    <form onSubmit={handleSubmite}>
    <Introduction />  
      {modules.map((_, moduleId) => {
        return <Modules moduleId={moduleId} key={moduleId} />;
      })}

      <button>guardar</button>
    </form>
  );
}
