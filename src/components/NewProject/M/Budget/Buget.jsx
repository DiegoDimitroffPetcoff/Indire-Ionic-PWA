import { useContext, useState } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonButton, IonAlert } from "@ionic/react";

export const Budget = ({ moduleId,firstSectionId, sectionId, idBudget, budget }) => {
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
          handleBudget(e, moduleId,firstSectionId, sectionId, idBudget, "description")
        }
      />
      <IonInput
        label="Amount"
        type="number"
        placeholder="Número"
        labelPlacement="floating"
        fill="outline"
        value={budget.amount}
        onIonChange={(e) =>
          handleBudget(e, moduleId,firstSectionId, sectionId, idBudget, "amount")
        }
      />
      <IonInput
        label="Un"
        type="number"
        labelPlacement="floating"
        fill="outline"
        placeholder="Número"
        value={budget.un}
        onIonChange={(e) =>
          handleBudget(e, moduleId,firstSectionId, sectionId, idBudget, "un")
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
          handleBudget(e, moduleId,firstSectionId, sectionId, idBudget, "qtd")
        }
      />
      <IonInput
        disabled={true}
        label="Total"
        labelPlacement="floating"
        fill="outline"
        value={budget.qtd * budget.un}
        onIonChange={(e) =>
          handleBudget(e, moduleId,firstSectionId, sectionId, idBudget, "uniteValue")
        }
      />
      <IonButton
        id="deleBudget"
        color="danger"
        onClick={() =>   delenteBudget(moduleId,firstSectionId, sectionId, idBudget)}
        expand="full"
      >
        Delete Budget
      </IonButton>

    </div>
  );
};
