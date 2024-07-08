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

export function FirstAccordionSection({ moduleId, sectionId }) {
  const { project, addSection, addSubSection, deleteMainSection } =
    useContext(ProjectContext);
  let section = project[1].modules[moduleId].sections[sectionId];

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
                <Section moduleId={moduleId} sectionId={sectionId} />
              </IonAccordionGroup>
            );
          })}
        <IonButton
          onClick={() => addSubSection(moduleId, sectionId)}
          expand="full"
        >
          Add Section
        </IonButton>
      </div>
    </>
  );
}
