import {
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import moduloTemplateJson from "../../../../templates/moduloTemplate.json";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext, useState } from "react";
export function TemplatesBar({ moduleId, type }) {
  const { moduleTemplate, addMainSection } = useContext(ProjectContext);
  const [accordionValue, setAccordionValue] = useState(null);
  let action;

  switch (type) {
    case "module":
      action = moduleTemplate;
      break;
    case "mainSection":
      action = addMainSection;
      break;
    default:
      action = null;
  }
  return (
    <IonAccordionGroup value={accordionValue} key={moduleId}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>
        </IonItem>

        <div className="ion-padding" slot="content">
          <div className="btnContainerTemplate">
            {moduloTemplateJson &&
              moduloTemplateJson.map((template, id) => {
                return (
                  <IonItem className="clickable-label" key={id}>
                    <IonLabel
                      onClick={() => {
                        action(moduleId, template);
                        setAccordionValue(null);
                      }}
                    >
                      {template.module}
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
/* TODO
 debo crear dos Slots separados
 1- Crud de los templates
 2- Pintar los templates
*/
