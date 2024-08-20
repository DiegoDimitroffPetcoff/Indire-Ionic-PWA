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
import { FotterTaskBar } from "../components/Footer/FotterTaskBar";

import { Header } from "../components/Header/Header";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [view, setView] = useState(false);

  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} view={view} />
      </IonContent>

      <FotterTaskBar setView={setView} view={view} />
    </IonPage>
  );
};

export default Page;
