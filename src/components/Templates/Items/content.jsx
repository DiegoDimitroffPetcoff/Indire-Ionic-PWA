import { IonInput, IonItem, IonTextarea } from "@ionic/react";

export function Content({ handleInputTitle, title, handleInputDescription, description }) {
  return (
    <>
      <IonItem>
        <IonInput
          label="Título"
          labelPlacement="stacked"
          clearInput={true}
          placeholder="INSPEÇÃO TÉCNICA AO EDIFÍCIO, DESCRIÇÃO GERAL, etc..."
          onIonChange={handleInputTitle}
          value={title}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonTextarea
          label="Descrição"
          labelPlacement="stacked"
          placeholder="Envelhecimento natural dos materiais constituintes. Reparação inadequada de zonas de fixação de andaimes..etc"
          onIonChange={handleInputDescription}
          value={description}
        ></IonTextarea>
      </IonItem>
    </>
  );
}
