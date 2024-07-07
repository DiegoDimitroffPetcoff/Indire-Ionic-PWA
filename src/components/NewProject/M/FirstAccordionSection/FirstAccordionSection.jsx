import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton
} from "@ionic/react";
import { Section } from "../S/Section";

export function FirstAccordionSection({ module, moduleId,addSection }) {
  return (
    <>
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>{`# ${moduleId + 1}`}</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            {module.sections &&
              module.sections.map((_, sectionId) => {
                return (
                  <IonAccordionGroup key={sectionId}>
                    <IonAccordion value="first">
                      <IonItem slot="header" color="light">
                        <IonLabel>{`# ${moduleId + 1}.${
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
