import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { TaskBar } from "../TaskBar/Taskbar";
import { Budget } from "../Budget/Buget";

import { ContentHandler } from "../ContentHandler/ContentHandler";
export function Section({ moduleId, firstSectionId, sectionId }) {
  const {
    project,
    handleChangeSection,
    handleDeleteImage,
    addSubSection,
    deleteSection,
  } = useContext(ProjectContext);

  let section =
    project[1].modules[moduleId].sections[firstSectionId].sections[sectionId];

  return (
    <>
      {/*-----CONTENT----- */}
      {section.content &&
        section.content.map((content, contentId) => {
          return (
            <ContentHandler
              key={contentId}
              moduleId={moduleId}
              firstSectionId={firstSectionId}
              sectionId={sectionId}
              contentId={contentId}
            />
          );
        })}

      {/*-----IMG----- */}
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

      {/*-----TASKBAR----- */}
      <TaskBar
        moduleId={moduleId}
        sectionId={sectionId}
        handle={handleChangeSection}
        deleteFunction={deleteSection}
        add={addSubSection}
      />

      {/*-----SECTIONS----- */}
      {/*       {section.sections.length > 0 &&
        section.sections.map((_, subsectionId) => {
          return (
            <IonAccordionGroup key={subsectionId}>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>
                    {`# ${moduleId + 1}.${sectionId + 1}`}.{subsectionId + 1}
                  </IonLabel>
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
        })} */}
    </>
  );
}
