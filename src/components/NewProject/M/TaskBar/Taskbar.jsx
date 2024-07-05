import { useState, useContext } from "react";
import { IonButton, IonAlert } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";

export function TaskBar({ moduleId, sectionId, handle, deleteFunction, add }) {
  const { addBudget } = useContext(ProjectContext);
  const [showAlert, setShowAlert] = useState(false);

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
          onClick={() => setShowAlert(true)}
          expand="full"
        >
          Delete Section
        </IonButton>
        <IonAlert
          isOpen={showAlert}
          header="Eliminar"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => setShowAlert(false),
            },
            {
              text: "OK",
              role: "confirm",
              handler: () => {
                deleteFunction(moduleId, sectionId);
                setShowAlert(false);
              },
            },
          ]}
          onDidDismiss={() => setShowAlert(false)}
        />
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
