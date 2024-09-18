import { IonContent, IonSpinner } from "@ionic/react";

export function Spinner({message}) {
  return (
    <IonContent>
      <div className="spinner-container">
        <IonSpinner name="crescent" />
        <p>{message}</p>
      </div>
    </IonContent>
  );
}
