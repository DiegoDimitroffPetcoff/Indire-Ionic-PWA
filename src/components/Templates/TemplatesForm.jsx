import {
  IonContent,
  IonItem,
  IonList,
  IonButton,
  IonCheckbox,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";

import { useTemplatesForm } from "./Items/useTemplatesForm";
import { Name } from "./Items/name";
import { Content } from "./Items/content";
import { ContentList } from "./Items/CotentList";

export function TemplatesForm() {
  const [name, setName] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModule, setIsModule] = useState(false);
  const [isSubsection, setIsSubsection] = useState(false);

  const [content, setContent] = useState([]);

  const {
    handleInputName,
    handleCheck,
    handleInputTitle,
    handleInputDescription,
    handleSubmite,
    addContentItem,
    deleteItem
  } = useTemplatesForm(
    setName,
    setTitle,
    setDescription,
    name,
    title,
    description,
    content,
    isModule,
    isSubsection,
    setContent
  );

  return (
    <IonContent>
      <IonList>
        <form onSubmit={(e) => handleSubmite(e, "subsection")}>
          <Name name={name} handleInputName={handleInputName} />

          <Content
            handleInputTitle={handleInputTitle}
            title={title}
            handleInputDescription={handleInputDescription}
            description={description}
          />
          <IonButton onClick={addContentItem}>Add Content</IonButton>
          <ContentList content={content} deleteItem={deleteItem}/>

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
    </IonContent>
  );
}
