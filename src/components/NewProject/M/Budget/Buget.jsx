import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { IonInput, IonButton } from "@ionic/react";

export const Budget = ({ moduleId, sectionId, idBudget, budget }) => {
  const { handleBudget, delenteBudget } = useContext(ProjectContext);
  return (
    <div className="budgetInputs">
      <IonInput
        label="Description"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={budget.description}
        onIonChange={(e) =>
          handleBudget(e, moduleId, sectionId, idBudget, "description")
        }
      />
      <IonInput
        label="Amount"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={budget.amount}
        onIonChange={(e) =>
          handleBudget(e, moduleId, sectionId, idBudget, "amount")
        }
      />
      <IonInput
        label="Un"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={budget.un}
        onIonChange={(e) =>
          handleBudget(e, moduleId, sectionId, idBudget, "un")
        }
      />
      <IonInput
        label="Qtd"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={budget.qtd}
        onIonChange={(e) =>
          handleBudget(e, moduleId, sectionId, idBudget, "qtd")
        }
      />
      <IonInput
      disabled={true}
        label="Total"
        labelPlacement="floating"
        fill="outline"
        rows={10}
        value={budget.qtd * budget.un}
        onIonChange={(e) =>
          handleBudget(e, moduleId, sectionId, idBudget, "uniteValue")
        }
      />
      <IonButton color="danger" onClick={() => delenteBudget(moduleId, sectionId, idBudget)} expand="full">
        Delete Budget
      </IonButton>
    </div>
  );
};
