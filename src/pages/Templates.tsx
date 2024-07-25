import {
  IonButtons,
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,

} from "@ionic/react";

import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import { useState } from "react";
import { TemplatesForm } from "../components/Templates/TemplatesForm";

const Temaplates: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [view, setView] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
       <TemplatesForm/>
      </IonContent>
    </IonPage>
  );
};

export default Temaplates;
