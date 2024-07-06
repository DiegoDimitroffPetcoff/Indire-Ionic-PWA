import { useContext } from "react";
import {
  IonInput,
  IonTextarea,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { ProjectContext } from "../../../context/ProjectContext";
import { Section } from "./S/Section";
import { TemplatesBar } from "./TemplatesBar/TemplatesBar";
export function Modules({ moduleId }) {
  const { project, addSection, handleChangeModules } =
    useContext(ProjectContext);
  let module = project[1].modules[moduleId];

  return (
    <div className="moduleContent" key={moduleId}>
      <h2>{module.module}</h2>
      <TemplatesBar moduleId={moduleId} />
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
          </div>
        </IonAccordion>
      </IonAccordionGroup>
      <IonButton onClick={() => addSection(moduleId)} expand="full">
        Add Section
      </IonButton>
    </div>
  );
}
