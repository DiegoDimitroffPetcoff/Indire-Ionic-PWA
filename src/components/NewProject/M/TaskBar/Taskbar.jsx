import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonButton } from "@ionic/react";

export function TaskBar({ moduleId, sectionId, handle, deleteFunction, add }) {
  const { addBudget } = useContext(ProjectContext);

  return (
    <>
      <div className="tools">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handle(e, moduleId, sectionId, "img")}
          expand="full"
        />
        <IonButton onClick={() => addBudget(moduleId, sectionId)} expand="full">
          Add Budget
        </IonButton>
        <IonButton
          color="danger"
          onClick={() => deleteFunction(moduleId, sectionId)}
          expand="full"
        >
          Delete Section
        </IonButton>
        <IonButton
          color="secondary"
          onClick={() => add(moduleId, sectionId)}
          expand="full"
        >
          Add Sub Section
        </IonButton>
      </div>
    </>
  );
}
