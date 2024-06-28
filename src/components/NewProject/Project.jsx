import { useContext } from "react";
import { Content } from "./Content";
import { Introduction } from "./Introduction";
import { Section } from "./Section";
import { ProjectContext } from "../../context/ProjectContext";

export function Project() {
  const { handleSubmite, addContent, addSection, project } =
    useContext(ProjectContext);

  return (
    <form
      onSubmit={handleSubmite}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {project &&
        project.map((_, projectId) => {
          return (
            <div key={projectId}>
              <Introduction projectId={projectId} />
              <Content projectId={projectId} />
              <Section projectId={projectId} />
              <button onClick={(e) => addContent(e, projectId, null)}>
                Add Content
              </button>
              <button onClick={(e) => addSection(e, projectId, null)}>
                Add Section
              </button>
            </div>
          );
        })}
      <div>
        <button>guardar</button>
      </div>
    </form>
  );
}
