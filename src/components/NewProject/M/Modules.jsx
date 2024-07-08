import { useContext } from "react";
import { IonInput, IonTextarea } from "@ionic/react";

import { ProjectContext } from "../../../context/ProjectContext";

import { TemplatesBar } from "./TemplatesBar/TemplatesBar";
import { FirstAccordionSection } from "./S/FirstAccordionSection/FirstAccordionSection";
import { ModuleAccordion } from "./ModuleAccordion";
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
      {module.mainSection.map((_, idMainSection) => (
        <FirstAccordionSection
          id={idMainSection}
          idMainSection={idMainSection}
          module={module}
          moduleId={moduleId}
          addSection={addSection}
        />
      ))}
      <ModuleAccordion moduleId={moduleId} />
    </div>
  );
}
