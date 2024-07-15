import {
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
} from "@ionic/react";
import {
  create,
  copyOutline,
  clipboardOutline,
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import { useState } from "react";

const Page: React.FC = () => {
  const { name, project} = useParams<{ name: string, project: string}>();
  const [view, setView] = useState(false)

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
        <ExploreContainer name={name} project={project} view={view} />
      

      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={saveOutline}></IonIcon>
              Save
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={cloudCircle}></IonIcon>
              OnDrive
            </IonButton>
          </IonButtons>

          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={copyOutline}></IonIcon>
              Template
            </IonButton>
          </IonButtons>

          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={documentOutline}></IonIcon>
              Word
            </IonButton>
          </IonButtons>
          <IonButtons slot="start" onClick={()=>setView(!view)}>
            <IonButton fill="outline">
              <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
              PDF
            </IonButton>
          </IonButtons>
          <IonButtons slot="start" onClick={()=>setView(!view)}>
            <IonButton fill="outline">
              <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
              PROJECT
            </IonButton>
          </IonButtons>

        </IonToolbar>
      </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Page;
