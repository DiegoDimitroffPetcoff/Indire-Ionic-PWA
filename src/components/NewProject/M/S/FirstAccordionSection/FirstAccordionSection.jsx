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
  const { project, addSubSection, handleChangeSection, deleteSubSection } =
    useContext(ProjectContext);
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
                    <IonLabel>{`# ${sectionId + 1}.${sectionId + 1}`}</IonLabel>
                  </IonItem>
                </IonAccordion>

                <SubSection
                  moduleId={moduleId}
                  firstSectionId={firstSectionId}
                  sectionId={sectionId}
                />
              </IonAccordionGroup>
            );
          })}
        {/*-----TASKBAR----- */}
        <TaskBar
          moduleId={moduleId}
          firstSectionId={firstSectionId}
          handle={handleChangeSection}
          deleteFunction={deleteSubSection}
          add={addSubSection}
        />
        <IonButton
          onClick={() => addSubSection(moduleId, firstSectionId)}
          expand="full"
        >
          Add SubSection
        </IonButton>
      </div>
    </>
  );
}
