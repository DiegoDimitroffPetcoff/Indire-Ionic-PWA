import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { IonInput, IonTextarea } from "@ionic/react";
import { TaskBar } from "./TaskBar/Taskbar";
export function Section({ moduleId, sectionId }) {
  const { project, handleChangeSection } = useContext(ProjectContext);

  let content = project[1].modules[moduleId].sections[sectionId].content;

  return (
    <>
      {content.map((content, contentId) => (
        <div key={contentId} style={{ background: "#f6d5a8", margin: "10px" }}>
          <IonInput
            label="Title"
            labelPlacement="floating"
            fill="outline"
            rows={10}
            value={content.title}
            onIonChange={(e) =>
              handleChangeSection(e, moduleId, sectionId, "title")
            }
          />
          <IonTextarea
            label="Descripcion"
            labelPlacement="floating"
            fill="outline"
            rows={5}
            value={content.description}
            onIonChange={(e) =>
              handleChangeSection(e, moduleId, sectionId, "description")
            }
          />
          <TaskBar moduleId={moduleId} sectionId={sectionId} />
        </div>
      ))}
    </>
  );
}
