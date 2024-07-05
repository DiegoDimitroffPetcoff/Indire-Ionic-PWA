import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import {
  IonInput,
  IonIcon,
  IonTextarea,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
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

  return (
    <>
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

          {section.sections.length > 0 &&
            section.sections.map((_, subsectionId) => {
              return (
                <IonAccordionGroup key={subsectionId}>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                      <IonLabel>{`Subsection ${moduleId + 1}.${
                        sectionId + 1
                      }`}.{subsectionId +1}</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      <Subsection1
                        sectionId={sectionId}
                        key={sectionId}
                        moduleId={moduleId}
                        subsectionId={subsectionId}
                      />
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              );
            })}
        </div>
      ))}
    </>
  );
}
