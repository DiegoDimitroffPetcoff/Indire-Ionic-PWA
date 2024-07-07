import { useContext } from "react";
import {
  IonInput,
  IonTextarea,
  IonButton,
  IonContent,
  IonPopover,
} from "@ionic/react";

import { ProjectContext } from "../../../context/ProjectContext";
import modulesTemplates from "../../../templates/moduloTemplate.json";
import { TemplatesBar } from "./TemplatesBar/TemplatesBar";
import { FirstAccordionSection } from "./FirstAccordionSection/FirstAccordionSection";
export function Modules({ moduleId }) {
  const {
    project,
    addSection,
    addMainSection,
    handleChangeModules,
    deleteMainSection,
  } = useContext(ProjectContext);
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
      {module.mainSection.map((_, idMainSection) => (
        <div className="tools">
          <FirstAccordionSection
            idMainSection={idMainSection}
            module={module}
            moduleId={moduleId}
            addSection={addSection}
          />
          <button onClick={() => deleteMainSection(moduleId, idMainSection)}>
            Delete
          </button>
        </div>
      ))}
      <IonButton id="click-trigger">AGREGAR</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        {modulesTemplates.map((template) => (
          <>
            <IonContent
              class="ion-padding"
              onClick={() => addMainSection(moduleId, template.title)}
            >
              {template.title}
            </IonContent>
          </>
        ))}
      </IonPopover>
    </div>
  );
}
