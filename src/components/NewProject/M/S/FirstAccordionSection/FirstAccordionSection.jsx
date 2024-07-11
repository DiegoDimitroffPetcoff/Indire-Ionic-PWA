import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { SubSection } from "../SubSection";
import { ProjectContext } from "../../../../../context/ProjectContext";
import { useContext } from "react";
import { TaskBar } from "../../TaskBar/Taskbar";
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
        {section.sections &&
          section.sections.map((_, sectionId) => {
            return (
              <IonAccordionGroup key={sectionId}>
                <IonAccordion value="first">
                  <IonItem slot="header" color="light">
                    <IonLabel>{`# ${firstSectionId + 1}.${sectionId + 1}`}</IonLabel>
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
        {/*-----TASKBAR----- */}

        <IonButton
          onClick={() => addSubSection("subsection",moduleId, firstSectionId)}
          expand="full"
        >
          Add SubSection
        </IonButton>
      </div>
    </>
  );
}
