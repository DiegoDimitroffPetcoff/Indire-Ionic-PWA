import { IonAlert } from "@ionic/react";
export function AlertDelete({
  showAlert,
  setShowAlert,
  moduleId,
  sectionId,
  deleteFunction,
}) {
  return (
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
  );
}
