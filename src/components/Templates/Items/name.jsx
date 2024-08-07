import { IonInput, IonItem } from "@ionic/react";

export function Name({ name, handleInputName }) {
  return (
    <IonItem>
      <IonInput
        label="Nome"
        labelPlacement="stacked"
        clearInput={true}
        placeholder="TELHADOS, PAREDES, PISOS...etc"
        value={name}
        onIonChange={handleInputName}
      ></IonInput>
    </IonItem>
  );
}
