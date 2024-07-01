import { useContext } from "react";
import { Modules } from "./Modules";
import { Introduction } from "./Introduction";

import { ProjectContext } from "../../context/ProjectContext";
import "./Project.css";

export function Project() {
  const { handleSubmite } = useContext(ProjectContext);
  const { project } = useContext(ProjectContext);
  const modules = project[1].modules || [];

  return (
    <form onSubmit={handleSubmite}>
    {/*   <Introduction /> */}
      {modules.map((module, moduleId) => {
        return <Modules module={module} moduleId={moduleId} key={moduleId} />;
      })}

      <button>guardar</button>
    </form>
  );
}
