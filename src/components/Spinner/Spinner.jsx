import { IonContent, IonSpinner } from "@ionic/react";

export function Spinner() {
  return (
    <IonContent>
      <div className="spinner-container">
        <IonSpinner name="crescent" />
      </div>
    </IonContent>
  );
}
