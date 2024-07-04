import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonTextarea, IonLabel } from "@ionic/react";
import { TaskBar } from "../TaskBar/Taskbar";
import { Budget } from "../Budget/Buget";
import { Subsection1 } from "./Subsections/Subtection1";
export function Section({ moduleId, sectionId }) {
  const {
    project,
    handleChangeSection,
    handleDeleteImage,
    addSubSection,
    deleteSection,
  } = useContext(ProjectContext);

  let section = project[1].modules[moduleId].sections[sectionId];

  let updateSection = sectionId;

  return (
    <>
      <IonLabel>
        <h3>Section: #{++updateSection}</h3>
      </IonLabel>

      {section.content.map((content, contentId) => (
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

          {section.img &&
            section.img.map((img, idx) => (
              <img
                src={img}
                alt={`imagen-`}
                key={idx}
                style={{ maxWidth: "100px", margin: "10px" }}
                onClick={() => handleDeleteImage(moduleId, sectionId, idx)}
              />
            ))}
          {section.budget.map((budget, idBudget) => {
            return (
              <Budget
                moduleId={moduleId}
                sectionId={sectionId}
                idBudget={idBudget}
                budget={budget}
                key={idBudget}
              />
            );
          })}

          <TaskBar
            moduleId={moduleId}
            sectionId={sectionId}
            handle={handleChangeSection}
            deleteFunction={deleteSection}
            add={addSubSection}
          />
          <Subsection1
            section={section.sections}
            moduleId={moduleId}
            sectionId={sectionId}
          />
        </div>
      ))}
    </>
  );
}
