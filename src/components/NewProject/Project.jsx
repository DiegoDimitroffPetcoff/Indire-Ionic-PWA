import { useForm } from "../../hooks/useForm";
import { Content } from "./Content";
import { Introduction } from "./Introduction";
import { Section } from "./Section";

export function Project() {
  const { handleChange, handleSubmite, addContent, addSection, project } =
    useForm();

  return (
    <form
      onSubmit={handleSubmite}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {project &&
        project.map((project, projectId) => {
          return (
            <div key={projectId}>
              <Introduction project={project} projectId={projectId} />
              <Content
                project={project}
                projectId={projectId}
                handleChange={handleChange}
              />
              <Section
                project={project}
                projectId={projectId}
                handleChange={handleChange}
              />
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
