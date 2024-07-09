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
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
export function SubSection({ moduleId, firstSectionId, sectionId }) {
  const {
    project,
    handleChangeSection,
    handleDeleteImage,
    addSubSection,
    deleteSubSection,
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

<TaskBar
          moduleId={moduleId}
          firstSectionId={firstSectionId}
          handle={handleChangeSection}
          deleteFunction={deleteSubSection}
          add={addSubSection}
        />


    </>
  );
}
