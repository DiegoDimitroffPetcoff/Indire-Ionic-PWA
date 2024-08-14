import {
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
} from "@ionic/react";
import { copyOutline } from "ionicons/icons";

import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext, useEffect, useState } from "react";

export function TemplatesBar({ moduleId, firstSectionId, sectionId, type }) {
  const {
    addTemplateOnModule,
    addTemplateSubSection,
    deleteTemplate,
    subsectionTemplates,
    modulesTemplates,
  } = useContext(ProjectContext);
  const [accordionValue, setAccordionValue] = useState(null);
  let action;
  let templateMapped;
  let key;

  switch (type) {
    case "module":
      key = "MODULE_TEMPLATES";
      action = addTemplateOnModule;
      templateMapped = modulesTemplates;
      break;
    case "subsection":
      key = "SUBSECTION_TEMPLATES";

      action = addTemplateSubSection;
      templateMapped = subsectionTemplates;
      break;
    case "subsection2":
      key = "SUBSECTION_TEMPLATES";

      action = addTemplateSubSection;
      templateMapped = subsectionTemplates;
      break;
    default:
      action = null;
  }

  return (
    <IonAccordionGroup
      className="IonAccordionGroup"
      value={accordionValue}
      key={moduleId}
    >
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonIcon ios={copyOutline} md={copyOutline}></IonIcon>
        </IonItem>

        <div slot="content" className="btnContainerTemplate">
          {templateMapped &&
            templateMapped.map((template, id) => {
              return (
                <IonLabel key={id}>
                  <IonButtons>
                    <IonButton
                      color={"danger"}
                      onClick={() => deleteTemplate(key, id)}
                    >
                      X
                    </IonButton>
                  </IonButtons>
                  <IonItem className="clickable-label" key={id}>
                    <IonLabel
                      onClick={() => {
                        action(
                          type,
                          template,
                          moduleId,
                          firstSectionId,
                          sectionId
                        );
                        setAccordionValue(null);
                      }}
                    >
                      <h6>{template.name}</h6>
                    </IonLabel>
                  </IonItem>
                </IonLabel>
              );
            })}
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
