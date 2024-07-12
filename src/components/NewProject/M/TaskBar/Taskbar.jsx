import { useState, useContext } from "react";
import {
  addCircle,
  closeCircle,
  card,
  arrowDownCircle,
  arrowUpRightBoxSharp,
} from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { AlertDelete } from "../../../../utils/AlertDelete";

export function TaskBar({
  description,
  moduleId,
  firstSectionId,
  sectionId,
  sectionId2,
  contentDescription,
  invisible,
}) {
  const { addBudget, addContent, deleteSubSection, handleImg, addSubSection } =
    useContext(ProjectContext);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className="tools">
        <IonButton
          color="primary"
          expandable="expandable"
          onClick={() =>
            addContent(
              contentDescription,
              moduleId,
              firstSectionId,
              sectionId,
              sectionId2
            )
          }
        >
          <IonIcon ios={addCircle} md={addCircle}></IonIcon>
          {/*   Add content */}
        </IonButton>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) =>
            handleImg(e, moduleId, firstSectionId, sectionId, "img")
          }
          expand="full"
        />
        <IonButton
          onClick={() =>
            addBudget(
              contentDescription,
              moduleId,
              firstSectionId,
              sectionId,
              sectionId2
            )
          }
          expand="full"
        >
          <IonIcon ios={card} md={card}></IonIcon>
        </IonButton>
        <IonButton
          color="danger"
          onClick={() =>
            deleteSubSection(
              contentDescription,
              moduleId,
              firstSectionId,
              sectionId,
              sectionId2
            )
          }
          expand="full"
        >
          <IonIcon ios={closeCircle} md={closeCircle}></IonIcon>{" "}
        </IonButton>
        {!invisible && (
          <IonButton
            color="secondary"
            onClick={() =>
              addSubSection(description, moduleId, firstSectionId, sectionId)
            }
            expand="full"
          >
            Add Sub-Section
            <IonIcon
              ios={arrowUpRightBoxSharp}
              md={arrowUpRightBoxSharp}
            ></IonIcon>{" "}
          </IonButton>
        )}
      </div>
    </>
  );
}
