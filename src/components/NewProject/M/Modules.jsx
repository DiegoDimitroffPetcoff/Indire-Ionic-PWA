import { useContext, useState } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";

import { ProjectContext } from "../../../context/ProjectContext";
import { TemplatesBar } from "./TemplatesBar/TemplatesBar";
import { FirstAccordionSection } from "./S/FirstAccordionSection/FirstAccordionSection";
import { AlertDelete } from "../../../utils/AlertDelete";
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
export function Modules({ moduleId }) {
  const { project, handleChangeModules, deleteSection } =
    useContext(ProjectContext);
  let module = project[1].modules[moduleId];

  return (
    <div className="moduleContent" key={moduleId}>
      <h2>{module.module}</h2>
      <TemplatesBar moduleId={moduleId} type={"module"} />
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
      {module.sections.map((section, sectionId) => {
        let FirstSection = `# ${sectionId + 1} - ${section.name}`;

        return (
          <IonAccordionGroup key={sectionId}>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>{FirstSection}</IonLabel>
                <IonButton
                  color="danger"
                  onClick={() => deleteSection(moduleId, sectionId)}
                >
                  Delete
                </IonButton>
              </IonItem>
              <FirstAccordionSection
                key={sectionId}
                firstSectionId={sectionId}
                moduleId={moduleId}
              />
            </IonAccordion>
          </IonAccordionGroup>
        );
      })}
      <TemplatesBar moduleId={moduleId} type={"mainSection"} />
    </div>
  );
}
