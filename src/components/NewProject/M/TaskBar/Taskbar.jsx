import { useState, useContext } from "react";
import { addCircle, closeCircle , card, arrowDownCircle} from "ionicons/icons";
import { IonButton, IonAlert , IonIcon} from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";

export function TaskBar({ moduleId, sectionId, handle, deleteFunction, add }) {
  const { addBudget, addContent } = useContext(ProjectContext);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className="tools">
      <IonButton
        color="primary"
        expandable="expandable"
        onClick={() => addContent(moduleId, sectionId)}
      >
        <IonIcon ios={addCircle} md={addCircle}></IonIcon>
        {/*   Add content */}
      </IonButton>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handle(e, moduleId, sectionId, null, "img")}
          expand="full"
        />
        <IonButton onClick={() => addBudget(moduleId, sectionId)} expand="full">
        <IonIcon ios={card} md={card}></IonIcon>{/* Add Budget */}
        </IonButton>
        <IonButton
          color="danger"
          onClick={() => setShowAlert(true)}
          expand="full"
        >
         <IonIcon ios={closeCircle} md={closeCircle}></IonIcon> {/* Delete Section */}
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
         <IonIcon ios={arrowDownCircle} md={arrowDownCircle}></IonIcon> {/* Add Sub Section */}
        </IonButton>
      </div>
    </>
  );
}
