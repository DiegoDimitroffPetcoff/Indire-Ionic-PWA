import {
  IonLabel,
  IonItem,
  IonAccordionGroup,
  IonAccordion,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import modulesTemplates from "../../../templates/moduloTemplate.json";
import { ProjectContext } from "../../../context/ProjectContext";
import { useContext, useState } from "react";
export function ModuleAccordion({ moduleId }) {
  const [accordionValue, setAccordionValue] = useState(null);
  const { addMainSection } = useContext(ProjectContext);
  return (
    <IonAccordionGroup value={accordionValue} key={moduleId}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>
        </IonItem>
        <div className="ion-padding" slot="content">
          <div className="btnContainerTemplate">
            {modulesTemplates &&
              modulesTemplates.map((template,id) => {
                return (
                  <IonItem className="clickable-label" key={id}>
                    <IonLabel
                      onClick={() => {
                        addMainSection(moduleId, template.module);
                        setAccordionValue(null);
                      }}
                    >
                      {template.title}
                    </IonLabel>
                  </IonItem>
                );
              })}
          </div>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
