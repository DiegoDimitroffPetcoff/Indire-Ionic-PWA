import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonTextarea, IonLabel } from "@ionic/react";
import { TaskBar } from "../TaskBar/Taskbar";
import { Budget } from "../Budget/Buget";
export function Section({ moduleId, sectionId }) {
  const { project, handleChangeSection } = useContext(ProjectContext);

  let section = project[1].modules[moduleId].sections[sectionId];
  const budget = project[1].modules[moduleId].sections[sectionId].budget;
  let updateSection = sectionId;
  console.log(section.img);

  return (
    <>
      <IonLabel>
        {" "}
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
                src={img.src}
                alt={`imagen-`}
                key={idx}
                style={{ maxWidth: "100px", margin: "10px" }}
              />
            ))}
          {budget.map((budget, idBudget) => {
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

          <TaskBar moduleId={moduleId} sectionId={sectionId} />
        </div>
      ))}
    </>
  );
}
