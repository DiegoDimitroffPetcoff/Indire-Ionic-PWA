import {
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/react";

import { useParams } from "react-router";

import "./Page.css";

import { TemplatesForm } from "../components/Templates/TemplatesForm";

import { Header } from "../components/Header/Header";

const Temaplates: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <Header />

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
