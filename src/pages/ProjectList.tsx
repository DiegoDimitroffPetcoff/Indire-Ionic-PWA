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
import { ProjectList } from "../components/ProjectList/ProjectList";
import { BackButton } from "../components/BackButton/BackButton";

const ProjectListPage: React.FC = () => {
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
        <ProjectList />
      </IonContent>
    </IonPage>
  );
};

export default ProjectListPage;
