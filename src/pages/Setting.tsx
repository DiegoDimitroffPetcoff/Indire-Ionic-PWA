import {
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonPage,
  IonInput,
  IonButton,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { folder } from "ionicons/icons";
import { useParams } from "react-router";
import { useState } from "react";

import "./Page.css";
import { Header } from "../components/Header/Header";

const Setting: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [inputValue, setInputValue] = useState(name || "");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Name:", inputValue);
  };

  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Enter Name</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonInput
              value={inputValue}
              onIonChange={handleInputChange}
              placeholder="Enter your name"
            />
          </IonItem>
          <IonButton expand="full" onClick={handleSubmit}>
            Submit
          </IonButton>
          <IonIcon ios={folder} md={folder}></IonIcon>
          {inputValue}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
