import {
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { copyOutline } from "ionicons/icons";

import moduloTemplateJson from "../../../../templates/moduleTemplate.json";
import sectionTemplateJson from "../../../../templates/subsectionTemplate.json";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext, useState } from "react";
export function TemplatesBar({ moduleId,firstSectionId, type }) {
  const { addTemplateOnModule, addTemplateSubSection } = useContext(ProjectContext);
  const [accordionValue, setAccordionValue] = useState(null);
  let action;
  let templateMapped;

  switch (type) {
    case "module":
      action = addTemplateOnModule;
      templateMapped = moduloTemplateJson
      break;
    case "subsection":
      action = addTemplateSubSection;
      templateMapped = sectionTemplateJson
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
            {templateMapped &&
              templateMapped.map((template, id) => {
                return (
                  <IonItem className="clickable-label" key={id}>
                    <IonLabel
                      onClick={() => {
                        /* en action, el seg parametro agrega el titulo */

                        action("subsection",template,moduleId,firstSectionId, );
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
