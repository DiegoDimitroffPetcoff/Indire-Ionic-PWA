import {
    IonContent,
    IonButton,
    IonSpinner,
    IonCol,
    IonGrid,
    IonRow,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
  } from "@ionic/react";

export function BackButton(params) {
  const canGoBack = history.length > 2;
  return (
    <>
      {canGoBack && (
   
            <IonButtons slot="start">
              <IonBackButton defaultHref="/projectList" />
            </IonButtons>
      
      )}
    </>
  );
}
