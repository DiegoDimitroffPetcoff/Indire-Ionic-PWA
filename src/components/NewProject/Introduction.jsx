import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

export function Introduction({ projectId }) {
  const { project, handleChange } = useContext(ProjectContext);

  const projectContent = project[projectId]|| [];
  return (
    <>
      <input
        value={projectContent.title}
        placeholder="Title"
        onChange={(e) => handleChange(e, projectId, null, "title")}
      />
      <input
        value={projectContent.img}
        placeholder="img"
        onChange={(e) => handleChange(e, projectId, null, "img")}
      />
    </>
  );
}
