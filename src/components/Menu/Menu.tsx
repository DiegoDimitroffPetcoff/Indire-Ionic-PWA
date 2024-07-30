import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { Login } from "@microsoft/mgt-react";
import { useLocation } from "react-router-dom";
import {
  refresh,
  addCircleOutline,
  listOutline,
  documents,
} from "ionicons/icons";
import "./Menu.css";
import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  action?: () => void;
}

const Menu: React.FC = () => {
  const { updateProject } = useContext(ProjectContext);
  const location = useLocation();
  const appPages: AppPage[] = [
    {
      title: "New Project",
      url: "/project",
      iosIcon: addCircleOutline,
      mdIcon: addCircleOutline,
      action: () => {
        updateProject();
      },
    },

    {
      title: "ListProjects",
      url: "/projectList",
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
      url: "/",
      iosIcon: refresh,
      mdIcon: refresh,
      action: () => {
        window.localStorage.clear(); // Función para limpiar el localStorage
      },
    },
  ];
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
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
