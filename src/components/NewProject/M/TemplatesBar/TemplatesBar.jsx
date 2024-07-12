import {
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { copyOutline } from "ionicons/icons";

import moduloTemplateJson from "../../../../templates/sectionTemplate.json";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext, useState } from "react";
export function TemplatesBar({ moduleId, type }) {
  const { moduleTemplate, addSection } = useContext(ProjectContext);
  const [accordionValue, setAccordionValue] = useState(null);
  let action;

  switch (type) {
    case "module":
      action = moduleTemplate;
      break;
    case "mainSection":
      action = addSection;
      break;
    default:
      action = null;
  }
 
  return (
    <IonAccordionGroup value={accordionValue} key={moduleId}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonIcon ios={copyOutline} md={copyOutline}></IonIcon>
        </IonItem>

        <div className="ion-padding" slot="content">
          <div className="btnContainerTemplate">
            {moduloTemplateJson &&
              moduloTemplateJson.map((template, id) => {
                return (
                  <IonItem className="clickable-label" key={id}>
                    <IonLabel
                      onClick={() => {
                        action(moduleId, template.name);
                        setAccordionValue(null);
                      }}
                    >
                      {template.name}
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
