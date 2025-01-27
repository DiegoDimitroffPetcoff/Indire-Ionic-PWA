import { useContext, useEffect, useState } from "react";
import { IonInput, IonTextarea } from "@ionic/react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { ProjectContext } from "../../../context/ProjectContext";
import { TemplatesBar } from "./TemplatesBar/TemplatesBar";
import { FirstAccordionSection } from "./S/FirstAccordionSection/FirstAccordionSection";
import { AlertDelete } from "../../../utils/AlertDelete";
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
/*------------- MODULO--------------- */
export function Modules({ moduleId }) {
  const {
    project,
    handleChangeModules,
    addSection,
    deleteSection,
    addCounter,
    handleChangeSection,
  } = useContext(ProjectContext);

  const [inputValues, setInputValues] = useState({});
  let module = project[1].modules[moduleId];

  useEffect(() => {
    addCounter(moduleId, moduleId + 1);
  }, []);


  const handleBlur = (e, moduleId, sectionId) => {
    handleChangeSection(e, 'name', moduleId, sectionId);
    setInputValues(prev => ({ ...prev, [sectionId]: '' })); // Clear input for the specific section
  };

  const handleInputChange = (sectionId, value) => {
    setInputValues(prev => ({ ...prev, [sectionId]: value }));
  };
  return (
    <div className="moduleContent" key={moduleId}>
      <h2 className="moduleTitle">
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
        let FirstSection = `${moduleId + 1}. # ${sectionId + 1} ${
          section.name
        } `;

        return (
          <IonAccordionGroup expand="inset" key={sectionId}>
            <IonAccordion value="first">
              <IonItem slot="header" color="dark">
                <IonLabel>
                  {FirstSection}
                  <IonInput
                    value={inputValues[sectionId] || ''} // Use state for specific section
               onIonBlur={(e) => handleBlur(e, moduleId, sectionId)}
                    onIonInput={(e) => handleInputChange(sectionId, e.detail.value)}
                  ></IonInput>
                </IonLabel>
                <IonButton
                  expand="block"
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

      {module.module ===
        "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS" && (
        <IonButton
          color="light"
          onClick={() => addSection(moduleId)}
          expand="full"
        >
          Add Section
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>{" "}
        </IonButton>
      )}
    </div>
  );
}
