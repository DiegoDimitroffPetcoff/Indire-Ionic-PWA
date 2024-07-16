import { useContext, useEffect, useState } from "react";
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
  const { project, handleChangeModules, deleteSection, addCounter } =
    useContext(ProjectContext);
  let module = project[1].modules[moduleId];
  useEffect(() => {
   /*  console.log(`Modules component with moduleId ${moduleId} has rendered`); */
    addCounter(moduleId, moduleId + 1) 
  },[]);
  return (
    <div className="moduleContent" key={moduleId}>
      <h2>
        {moduleId + 1}.{module.module}
      </h2>
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
        let title = section.content[0].title
        let FirstSection = `${moduleId + 1}. # ${sectionId + 1}  ${title}`;

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
