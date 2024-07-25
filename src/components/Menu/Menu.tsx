import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { Login } from "@microsoft/mgt-react";
import { useLocation } from "react-router-dom";
import {
  refresh,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  atCircleOutline,
  addCircleOutline,
  listOutline,
  documents,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  action?: () => void;
}

const appPages: AppPage[] = [
  {
    title: "New Project",
    url: "/project",
    iosIcon: addCircleOutline,
    mdIcon: addCircleOutline,
  },

  {
    title: "ListProjects",
    url: "/project/list",
    iosIcon: listOutline,
    mdIcon: listOutline,
  },
  {
    title: "Templates",
    url: "/templates",
    iosIcon: documents,
    mdIcon: documents,
  },
  {
    title: "Refresh",
    url: "/project/project",
    iosIcon: refresh,
    mdIcon: refresh,
    action: () => {
      window.localStorage.clear(); // Función para limpiar el localStorage
    },
  } /*,
  {
    title: 'Outbox',
    url: '/folder/Outbox',
    iosIcon: listOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Spam',
    url: '/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  } */,
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <Login />
          </IonListHeader>
     
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel onClick={appPage.action}>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/*         <IonList id="labels-list">
          <IonListHeader>Last Projects</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
