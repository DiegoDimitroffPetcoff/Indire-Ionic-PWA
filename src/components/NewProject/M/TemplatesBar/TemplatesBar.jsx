import { documents } from "ionicons/icons";
import {
  IonIcon,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import moduloTemplateJson from "../../../../templates/moduloTemplate.json";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext } from "react";
export function TemplatesBar({ moduleId }) {
  const { moduleTemplate } = useContext(ProjectContext);
  return (
    <IonAccordionGroup key={moduleId}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Templates</IonLabel>
        </IonItem>
        <div slot="content">
          <IonItem slot="header" color="danger">
            
            <IonLabel onClick={() => alert("click")}>Agregar</IonLabel>
            <IonLabel onClick={() => alert("click")}>Eliminar</IonLabel>
          </IonItem>
        </div>
        <div slot="content">
          <div className="btnContainerTemplate">
            {moduloTemplateJson.map((template, id) => {
              return (
                <IonButton
                  key={id}
                  size="small"
                  color="secondary"
                  onClick={() => moduleTemplate(moduleId, template)}
                >
                  <IonIcon
                    slot="start"
                    ios={documents}
                    md={documents}
                  ></IonIcon>
                  {template.module}
                </IonButton>
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
