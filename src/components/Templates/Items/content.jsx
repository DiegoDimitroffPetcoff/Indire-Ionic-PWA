import { IonInput, IonItem, IonTextarea } from "@ionic/react";
export function Content({handleInputTitle,title, handleInputDescription, description}) {
  return (
    <div style={{ border: "black 1px solid", margin: "10px" }}>
      <IonItem>
        <IonInput
          label="Title"
          labelPlacement="stacked"
          clearInput={true}
          placeholder="Enter text to see clear button"
          onIonChange={handleInputTitle}
          value={title}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonTextarea
          label="Description"
          labelPlacement="stacked"
          placeholder="Enter text to see clear button"
          onIonChange={handleInputDescription}
          value={description}
        ></IonTextarea>
      </IonItem>
    </div>
  );
}
