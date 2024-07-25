import {
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonButton,
  IonCheckbox,
} from "@ionic/react";
import { useState } from "react";
import ModuleTemplates from "../../templates/moduleTemplate.json";
import SubsectionTemplates from "../../templates/subsectionTemplate.json";
export function TemplatesForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModule, setIsModule] = useState(false);
  const [isSubsection, setIsSubsection] = useState(false);

  function handleInputName(e) {
    const value = e.target.value;
    setName(value);
  }
  function handleInputTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleInputDescription(e) {
    const value = e.target.value;
    setDescription(value);
  }
  function handleCheck(e, setType) {
    const checked = e.detail.checked;
    setType(checked);
    console.log(`Checkbox changed: ${checked}`);
  }
  function handleSubmite(e) {
    e.preventDefault();

    if (!name || !title || !description) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (!isModule && !isSubsection) {
      alert("Debes seleccionar al menos un checkbox.");
      return;
    }
    const updateTemplate = {
      name,
      content: [{ title: title, description: description }],
    };
    if (isModule) {
      ModuleTemplates.push(updateTemplate);
    }
    if (isSubsection) {
      SubsectionTemplates.push(updateTemplate);
    }
    let templateMessage = "Se ha guardado correctamente el Template en ";
    if (isModule) {
      templateMessage += "Módulos";
    }
    if (isSubsection) {
      if (isModule) {
        templateMessage += " y ";
      }
      templateMessage += "SubSección";
    }
    alert(templateMessage);

    setName("");
    setDescription("");
    setTitle("");
  }

  return (
    <IonList>
      <form onSubmit={(e) => handleSubmite(e, "subsection")}>
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
        <IonItem>
          <IonCheckbox
            justify="start"
            onIonChange={(e) => handleCheck(e, setIsModule)}
          >
            Module
          </IonCheckbox>
          <IonCheckbox
            justify="start"
            onIonChange={(e) => handleCheck(e, setIsSubsection)}
          >
            Subsection
          </IonCheckbox>
        </IonItem>
        <IonButton type="submit" color="medium">
          Guardar
        </IonButton>
      </form>
    </IonList>
  );
}
