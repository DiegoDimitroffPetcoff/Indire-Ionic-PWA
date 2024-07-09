import { useState, useContext } from "react";
import { addCircle, closeCircle, card, arrowDownCircle } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { AlertDelete } from "../../../../utils/AlertDelete";

export function TaskBar({
  moduleId,
  firstSectionId,
  sectionId,
  handle,
  deleteFunction,
  add,
}) {
  const { addBudget, addContent,deleteSubSection } = useContext(ProjectContext);
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
          <IonIcon ios={card} md={card}></IonIcon>
          {/* Add Budget */}
        </IonButton>
        <IonButton
          color="danger"
          onClick={() => deleteSubSection(moduleId, sectionId,firstSectionId)}
          expand="full"
        >
          <IonIcon ios={closeCircle} md={closeCircle}></IonIcon>{" "}
          {/* Delete Section */}
        </IonButton>

        <IonButton
          color="secondary"
          onClick={() => add(moduleId, sectionId)}
          expand="full"
        >
          <IonIcon ios={arrowDownCircle} md={arrowDownCircle}></IonIcon>{" "}
          {/* Add Sub Section */}
        </IonButton>
      </div>
    </>
  );
}
