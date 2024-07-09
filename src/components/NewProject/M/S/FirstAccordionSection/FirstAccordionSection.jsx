import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { Section } from "../Section";
import { ProjectContext } from "../../../../../context/ProjectContext";
import { useContext } from "react";

export function FirstAccordionSection({ moduleId, firstSectionId }) {
  const { project, addSection, addSubSection, deleteMainSection } =
    useContext(ProjectContext);
  let section = project[1].modules[moduleId].sections[firstSectionId];

  return (
    <>
      <div className="ion-padding" slot="content">
        {section.sections &&
          section.sections.map((section, sectionId) => {
            return (
              <IonAccordionGroup key={sectionId}>
                <IonAccordion value="first">
                  <IonItem slot="header" color="light">
                    <IonLabel>{`# ${sectionId + 1}.${sectionId + 1}`}</IonLabel>
                  </IonItem>
                </IonAccordion>
             
                <Section moduleId={moduleId}firstSectionId={firstSectionId} sectionId={sectionId} />
              </IonAccordionGroup>
            );
          })}
        <IonButton
          onClick={() => addSubSection(moduleId, firstSectionId)}
          expand="full"
        >
          Add Section
        </IonButton>
      </div>
    </>
  );
}
