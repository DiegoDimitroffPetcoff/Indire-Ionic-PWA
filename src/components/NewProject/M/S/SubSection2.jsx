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
export function SubSection2({
  moduleId,
  firstSectionId,
  sectionId,
  sectionId2,
}) {
  const {
    project,
    handleChangeSection,
    deleteImage,
    addSubSection,
    deleteSubSection,
  } = useContext(ProjectContext);

  let section =
    project[1].modules[moduleId].sections[firstSectionId].sections[sectionId]
      .sections[sectionId2];

  return (
    <>
      {/*-----CONTENT----- */}
      <ContentHandler
      description="subsection2"
        moduleId={moduleId}
        firstSectionId={firstSectionId}
        sectionId={sectionId}
        sectionId2={sectionId2}
      />

      {/*-----IMG VIEW----- */}
      {section.img &&
        section.img.map((img, idx) => (
          <img
            src={img}
            alt={`imagen-`}
            key={idx}
            style={{ maxWidth: "100px", margin: "10px" }}
            onClick={() =>
              deleteImage(moduleId, firstSectionId, sectionId, idx)
            }
          />
        ))}

      {/*-----BUDGET VIEW----- */}

      {section.budget.map((budget, idBudget) => {
        return (
          <Budget
            moduleId={moduleId}
            firstSectionId={firstSectionId}
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
        sectionId={sectionId}
        sectionId2={sectionId2}
      />
    </>
  );
}
