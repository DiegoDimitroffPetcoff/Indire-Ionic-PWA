import { useContext } from "react";
import { Budget } from "../../Budget/Buget";
import { IonInput, IonTextarea, IonLabel } from "@ionic/react";
import { ProjectContext } from "../../../../../context/ProjectContext";
import { TaskBar } from "../../TaskBar/Taskbar";

export function Subsection1({ section, moduleId, sectionId }) {
  const {
    handleChangeSubSection,
    handleDeleteImage,
    addSubSection,
    deleteSubSection,
  } = useContext(ProjectContext);
  let sectionCounter = sectionId;
  let subSectionCounter = sectionId;

  return (
    <>
      {section.map((content, contentId) => (
        <div key={contentId} style={{ background: "red", margin: "10px" }}>
          <IonLabel>
            <h3>Section: # {`${sectionCounter}.${++subSectionCounter}`}</h3>
          </IonLabel>
          <IonInput
            label="Title"
            labelPlacement="floating"
            fill="outline"
            rows={10}
            value={content.content.title}
            onIonChange={(e) =>
              handleChangeSubSection(e, moduleId, sectionId, "title")
            }
          />
          <IonTextarea
            label="Descripcion"
            labelPlacement="floating"
            fill="outline"
            rows={5}
            value={content.content.description}
            onIonChange={(e) =>
              handleChangeSubSection(e, moduleId, sectionId, "description")
            }
          />

          {content.img &&
            content.img.map((img, idx) => (
              <img
                src={img}
                alt={`imagen-`}
                key={idx}
                style={{ maxWidth: "100px", margin: "10px" }}
                onClick={() => handleDeleteImage(moduleId, sectionId, idx)}
              />
            ))}
          {content.budget.map((budget, idBudget) => {
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
            handle={handleChangeSubSection}
            deleteFunction={deleteSubSection}
            //ACA VA AGREGAR SUB SUB SECTION
            add={addSubSection}
          />
        </div>
      ))}
    </>
  );
}
