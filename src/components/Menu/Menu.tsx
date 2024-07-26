import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonGrid,
  IonToolbar,
  IonFooter,
  IonButton,
  IonCol,
} from "@ionic/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../Pdf/PdfView";
import {
  copyOutline,
  clipboardOutline,
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";
import { Login  } from "@microsoft/mgt-react";
import { useLocation } from "react-router-dom";
import {
  refresh,
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

          <IonFooter>
            <IonToolbar>
                   <PDFDownloadLink
                  document={<MyDocument data={project} />}
                  fileName={title + ".pdf"}
                >
                  {({ blob, url, loading, error }) => {
                    return (
                      <>
                        <IonButton
                          fill="outline"
                          disabled={loading}
                          onClick={() => {
                            PostOneDrive(blob);
                            addProjectToProjectList(project);
                          }}
                        >
                          <IonIcon slot="end" icon={saveOutline}></IonIcon>
                          {loading
                            ? "..."
                            : error
                            ? `Error: ${error.message}`
                            : "Save"}
                        </IonButton>
                        {error && (
                          <p style={{ color: "red" }}>
                            Failed to generate PDF: {error.message}
                          </p>
                        )}
                      </>
                    );
                  }}
                </PDFDownloadLink> 
              <IonButton expand="block" fill="outline">
                <IonIcon  icon={cloudCircle}></IonIcon>
                OnDrive
              </IonButton>
              <IonButton expand="block" fill="outline">
                <IonIcon  icon={copyOutline}></IonIcon>
                Template
              </IonButton>{" "}
              <IonButton expand="block" fill="outline">
                <IonIcon  icon={documentOutline}></IonIcon>
                Word
              </IonButton>{" "}
              <IonButton expand="block" fill="outline">
                <IonIcon  icon={clipboardOutline}></IonIcon>
                PDF
              </IonButton>{" "}
              <IonButton expand="block" fill="outline">
                <IonIcon  icon={clipboardOutline}></IonIcon>
                PROJECT
              </IonButton>
            </IonToolbar>
          </IonFooter>
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

{
  /*         <IonList id="labels-list">
          <IonListHeader>Last Projects</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */
}
