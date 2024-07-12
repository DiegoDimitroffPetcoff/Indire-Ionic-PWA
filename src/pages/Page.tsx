import {
  IonBackButton,
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
  
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  search,
  personCircle,
  star,
} from "ionicons/icons";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

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
        <ExploreContainer name={name} />
      </IonContent>

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
              <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
              PDF
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={documentOutline}></IonIcon>
              Word
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton fill="outline">
              <IonIcon slot="end" icon={documentOutline}></IonIcon>
              Word
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Page;
