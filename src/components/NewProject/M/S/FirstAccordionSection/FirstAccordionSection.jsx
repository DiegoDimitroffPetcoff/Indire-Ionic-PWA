import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import { SubSection } from "../SubSection";
import { ProjectContext } from "../../../../../context/ProjectContext";
import { useContext } from "react";
import { TaskBar } from "../../TaskBar/Taskbar";
import { TemplatesBar } from "../../TemplatesBar/TemplatesBar";
/*------------- FIRST-SECTION -> SECTION--------------- */
/*------------- FIRST-SECTION -> SECTION--------------- */
/*------------- FIRST-SECTION -> SECTION--------------- */
/*------------- FIRST-SECTION -> SECTION--------------- */

export function FirstAccordionSection({ moduleId, firstSectionId }) {
  const { project, addSubSection } = useContext(ProjectContext);
  let section = project[1].modules[moduleId].sections[firstSectionId];

  return (
    <div slot="content" style={{ padding: "1%" }}>
      <div style={{ display: "flex", alignContent: "center" }}>
        <TemplatesBar
          moduleId={moduleId}
          firstSectionId={firstSectionId}
          type={"subsection"}
        />
        <IonButton
          className="buttonAdd"
          color="light"
          onClick={() => addSubSection("subsection", moduleId, firstSectionId)}
          expand="full"
        >
          Add Sub-Section
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>{" "}
        </IonButton>

      </div>
      {section.sections &&
        section.sections.map((sectionMapped, sectionId) => {
       /* aca podria agregar un add section con secitonMapped */
          return (
            <IonAccordionGroup expand="inset" key={sectionId}>
              <IonAccordion className="subSectionContent" value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>
                    {`${moduleId + 1}. - # ${firstSectionId + 1}.${
                      sectionId + 1
                    }`}
                    -{" "}
                    {sectionMapped.content &&
                      sectionMapped.content.length > 0 &&
                      sectionMapped.content[0].title}
                  </IonLabel>
                </IonItem>
                <div
                  slot="content"
                  style={{ padding: "0px 0px 10px 10px", margin: "5px" }}
                >
                  <SubSection
                    moduleId={moduleId}
                    firstSectionId={firstSectionId}
                    sectionId={sectionId}
                  />
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          );
        })}
    </div>
  );
}
