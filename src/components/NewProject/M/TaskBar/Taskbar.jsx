import { useContext, useState } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonButton } from "@ionic/react";

export function TaskBar({ moduleId, sectionId }) {
  const { addSection, delenteSection, addBudget, handleChangeSection } =
    useContext(ProjectContext);

  return (
    <>
      <div className="tools">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleChangeSection(e,moduleId, sectionId, "img")}
          expand="full"
        />


        <IonButton onClick={() => addBudget(moduleId, sectionId)} expand="full">
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
