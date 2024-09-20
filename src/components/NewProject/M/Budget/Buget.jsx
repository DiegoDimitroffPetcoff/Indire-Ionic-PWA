import { useContext, useState } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import {
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

export const Budget = ({
  description,
  moduleId,
  firstSectionId,
  sectionId,
  sectionId2,
  idBudget,
  budget,
}) => {
  const { handleBudget, delenteBudget } = useContext(ProjectContext);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="budgetInputs">
      <IonInput
        label="Description"
        labelPlacement="floating"
        fill="outline"
        value={budget.description}
        onIonChange={(e) =>
          handleBudget(
            e,
            description,
            "description",
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          )
        }
      />
      <IonInput
        label="Un"
        type="text"
        placeholder="Número"
        labelPlacement="floating"
        fill="outline"
        value={budget.amount}
        onIonChange={(e) =>
          handleBudget(
            e,
            description,
            "amount",
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          )
        }
      />

      <IonInput
        label="Qtd"
        type="number"
        labelPlacement="floating"
        fill="outline"
        placeholder="Número"
        value={budget.qtd}
        onIonChange={(e) =>
          handleBudget(
            e,
            description,
            "qtd",
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          )
        }
      />
      {/* CORREGIR CUSTO UNITARIO -> "QTD x OTRO NOMBRE" */}
      <IonInput
        label="CUSTO UNITARIO"
        type="number"
        labelPlacement="floating"
        fill="outline"
        placeholder="Número"
        value={budget.un}
        onIonChange={(e) =>
          handleBudget(
            e,
            description,
            "un",
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          )
        }
      />
      <IonInput
        disabled={true}
        label="Custo Parcial"
        labelPlacement="floating"
        fill="outline"
        value={budget.qtd * budget.un}
        onIonChange={(e) => {
          handleBudget(
            e,
            description,
            "uniteValue",
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          );
        }}
      />

      <IonItem>
        <IonSelect
          value={budget.alternative}
          placeholder="Alternative"
          onIonChange={(e) =>
            handleBudget(
              e,
              description,
              "alternative",
              moduleId,
              firstSectionId,
              sectionId,
              sectionId2,
              idBudget
            )
          }
        >
          <IonSelectOption value={null}></IonSelectOption>
          <IonSelectOption value="A">A</IonSelectOption>
          <IonSelectOption value="B">B</IonSelectOption>
          <IonSelectOption value="C">C</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonButton
        id="deleBudget"
        color="danger"
        onClick={() =>
          delenteBudget(
            description,
            moduleId,
            firstSectionId,
            sectionId,
            sectionId2,
            idBudget
          )
        }
        expand="full"
      >
        Delete Budget
      </IonButton>
    </div>
  );
};
