import { useContext } from "react";
import { IonInput, IonIcon, IonTextarea, IonButton,IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react";
import { logoApple, documents } from "ionicons/icons";

import { ProjectContext } from "../../../context/ProjectContext";
import { Section } from "./S/Section";
export function Modules({ module, moduleId }) {
  const { addSection, handleChangeModules } = useContext(ProjectContext);

  return (
    <div className="moduleContent" key={moduleId}>
      <div className="moduleTitleContainer">
        <h2>{module.module}</h2>
        <IonButton color="secondary">
          <IonIcon slot="start" ios={logoApple} md={documents}></IonIcon>
          Template 1
        </IonButton>
      </div>

      <IonInput
        label="Title"
        labelPlacement="floating"
        fill="outline"
        value={module.title}
        onIonChange={(e) => handleChangeModules(e, moduleId, "title")}
      />
      <IonTextarea
        label="Description"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={module.description}
        onIonChange={(e) => handleChangeModules(e, moduleId, "description")}
      />
      {module.sections &&
        module.sections.map((_, sectionId) => {
          return (
            <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>{`Section `}</IonLabel>
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
  );
}
