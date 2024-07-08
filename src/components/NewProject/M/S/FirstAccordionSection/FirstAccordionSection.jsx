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

export function FirstAccordionSection({ moduleId, idMainSection }) {
  const { project, addSection, deleteMainSection } = useContext(ProjectContext);
  let module = project[1].modules[moduleId];

  return (
    <>
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>
              {`# ${idMainSection + 1} - ${
                module.mainSection[idMainSection].name
              }`}
            </IonLabel>
            <IonButton color="danger" onClick={() => deleteMainSection(moduleId, idMainSection)}>
              Delete
            </IonButton>
          </IonItem>
          <div className="ion-padding" slot="content">
            {module.sections &&
              module.sections.map((_, sectionId) => {
                return (
                  <IonAccordionGroup key={sectionId}>
                    <IonAccordion value="first">
                      <IonItem slot="header" color="light">
                        <IonLabel>{`# ${idMainSection + 1}.${
                          sectionId + 1
                        }`}</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        <Section
                          sectionId={sectionId}
                          key={sectionId}
                          moduleId={moduleId}
                        />
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                );
              })}
            <IonButton onClick={() => addSection(moduleId)} expand="full">
              Add Section
            </IonButton>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
}
