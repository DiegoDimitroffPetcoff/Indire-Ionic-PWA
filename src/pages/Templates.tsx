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

import { TemplatesForm } from "../components/Templates/TemplatesForm";
import { BackButton } from "../components/BackButton/BackButton";

const Temaplates: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <BackButton />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TemplatesForm />
      </IonContent>
    </IonPage>
  );
};

export default Temaplates;
