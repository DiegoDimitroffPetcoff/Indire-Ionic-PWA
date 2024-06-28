import { useContext } from "react";
import { Modules } from "./Modules";
import { Introduction } from "./Introduction";

import { ProjectContext } from "../../context/ProjectContext";

export function Project() {
  const { handleSubmite } = useContext(ProjectContext);

  return (
    <form
      onSubmit={handleSubmite}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Introduction />
      <Modules />
      <button>guardar</button>
    </form>
  );
}
