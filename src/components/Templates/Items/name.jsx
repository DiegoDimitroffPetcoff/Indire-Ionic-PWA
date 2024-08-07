import { useState } from "react";
import { IonInput, IonItem } from "@ionic/react";
export function Name({ name, handleInputName }) {
  return (
    <IonItem>
      <IonInput
        label="Name"
        labelPlacement="stacked"
        clearInput={true}
        placeholder="Enter text to see clear button"
        value={name}
        onIonChange={handleInputName}
      ></IonInput>
    </IonItem>
  );
}
