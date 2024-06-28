import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

export function Introduction() {
  const { project, handleChangeIntroduction } = useContext(ProjectContext);

  const projectContent = project[0].introduction || [];

  return (
    <>
      <input
        value={projectContent.title}
        placeholder="Title"
        onChange={(e) => handleChangeIntroduction(e, "title")}
      />
      <input
        value={projectContent.sub_title}
        placeholder="sub_title"
        onChange={(e) => handleChangeIntroduction(e, "sub_title")}
      />

      <input
        type="file"
        alt="Main Image on Project"
        accept="image/*"
        placeholder="main_img_url"
        onChange={(e) => handleChangeIntroduction(e, "main_img_url")}
      />
      <img
        src={projectContent.main_img_url}
        alt="Vista previa"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <input
        value={projectContent.address}
        placeholder="address"
        onChange={(e) => handleChangeIntroduction(e, "address")}
      />
      <input
        type="number"
        value={projectContent.project_number}
        placeholder="project_number"
        onChange={(e) => handleChangeIntroduction(e, "project_number")}
      />
      <input
        type="date"
        value={projectContent.date}
        placeholder="date"
        onChange={(e) => handleChangeIntroduction(e, "date")}
      />
      <input
        type="number"
        value={projectContent.version}
        placeholder="version"
        onChange={(e) => handleChangeIntroduction(e, "version")}
      />
    </>
  );
}
