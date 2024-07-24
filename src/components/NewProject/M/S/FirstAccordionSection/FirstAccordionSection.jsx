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
    <>
      <div className="ion-padding" slot="content">
      <TemplatesBar moduleId={moduleId} firstSectionId={firstSectionId} type={"subsection"} />
      <IonButton
          color="secondary"
          onClick={() => addSubSection("subsection", moduleId, firstSectionId)}
          expand="full"
        >
          Add Sub-Section
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>{" "}
        </IonButton>
        {section.sections &&
          section.sections.map((_, sectionId) => {
            return (
              <IonAccordionGroup key={sectionId}>
                <IonAccordion value="first">
                  <IonItem slot="header" color="secondary">
                    <IonLabel>{`${moduleId + 1}. # ${firstSectionId + 1}.${
                      sectionId + 1
                    }`}</IonLabel>


     

                  </IonItem>
                  <div className="ion-padding" slot="content">
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
    </>
  );
}
