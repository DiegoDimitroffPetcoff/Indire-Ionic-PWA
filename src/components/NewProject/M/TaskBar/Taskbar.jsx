import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonButton } from "@ionic/react";

export function TaskBar({ moduleId, sectionId }) {
  const { addSection, delenteSection, addBudget } = useContext(ProjectContext);

  return (
    <>
      <div className="tools">
        <IonButton
          onClick={() => delenteSection(moduleId, sectionId)}
          expand="full"
        >
          Add Images
        </IonButton>
        <IonButton
          onClick={() => addBudget(moduleId, sectionId)}
          expand="full"
        >
          Add Budget
        </IonButton>
        <IonButton
          color="danger"
          onClick={() => delenteSection(moduleId, sectionId)}
          expand="full"
        >
          Delete Section
        </IonButton>
        <IonButton
          color="secondary"
          onClick={() => addSection(moduleId, sectionId)}
          expand="full"
        >
          Add Sub Section
        </IonButton>
      </div>
    </>
  );
}
