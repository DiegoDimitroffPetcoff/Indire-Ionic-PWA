import {
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
export function Header() {
  const canGoBack = history.length > 2;
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        {canGoBack && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/projectList" />
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
}
