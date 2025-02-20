import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { TaskBar } from "../TaskBar/Taskbar";
import { Budget } from "../Budget/Buget";

import { ContentHandler } from "../ContentHandler/ContentHandler";
import { SubSection2 } from "./SubSection2";
import { TemplatesBar } from "../TemplatesBar/TemplatesBar";
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
/*------------- SUBSECTION--------------- */
export function SubSection({ moduleId, firstSectionId, sectionId }) {
  const { project, deleteImage, addSubSection } = useContext(ProjectContext);

  let section =
    project[1].modules[moduleId].sections[firstSectionId].sections[sectionId];

  return (
    <>
      <div style={{ display: "flex", alignContent: "center" }}>
        <TemplatesBar
          moduleId={moduleId}
          firstSectionId={firstSectionId}
          sectionId={sectionId}
          type={"subsection2"}
        />
        <IonButton
          className="buttonAdd"
          color="light"
          onClick={() =>
            addSubSection("subsection2", moduleId, firstSectionId, sectionId)
          }
          expand="full"
        >
          Add Sub-Section
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>{" "}
        </IonButton>
      </div>
      {/*-----CONTENT----- */}
      <ContentHandler
        description="subsection"
        contentDescription="subsection"
        moduleId={moduleId}
        firstSectionId={firstSectionId}
        sectionId={sectionId}
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
            idBudget={idBudget}
            budget={budget}
            key={idBudget}
            description={"subsection"}
            moduleId={moduleId}
            firstSectionId={firstSectionId}
            sectionId={sectionId}
          />
        );
      })}

      {section.sections.map((sectionMapped, sectionId2) => {
        return (
          <IonAccordionGroup expand="inset" key={sectionId2}>
            <IonAccordion value="first">
              <IonItem slot="header">
                <IonLabel>{`# ${firstSectionId + 1}.${sectionId + 1}.${
                  sectionId2 + 1
                }   - ${
                  sectionMapped.content &&
                  sectionMapped.content.length > 0 ?
                  sectionMapped.content[0].title : ""
                }`}</IonLabel>
              </IonItem>
              <div slot="content" className="accordion-content">
                <SubSection2
                  moduleId={moduleId}
                  firstSectionId={firstSectionId}
                  sectionId={sectionId}
                  sectionId2={sectionId2}
                />
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        );
      })}

      <TaskBar
        moduleId={moduleId}
        firstSectionId={firstSectionId}
        sectionId={sectionId}
        description="subsection2"
        contentDescription="subsection"
        invisible={true}
      />
    </>
  );
}
