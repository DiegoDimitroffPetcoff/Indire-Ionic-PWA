import { IonCol, IonGrid, IonRow, IonContent, IonButton } from "@ionic/react";
import { useContext } from "react";

import "./ProjectList.css";

import { ProjectContext } from "../../context/ProjectContext";
export function ProjectList() {
  const { projectList, deleteProjectOnList } = useContext(ProjectContext);

  return (
    <IonContent>
      <IonGrid className="table-grid">
        {/* Caption */}
        <IonRow className="table-caption">
          <IonCol size="10">Project List</IonCol>
        </IonRow>

        {/* Table Header */}
        <IonRow className="table-header">
          <IonCol size="3" className="table-header-cell">
            Título
          </IonCol>
          <IonCol size="3" className="table-header-cell">
            Endereço
          </IonCol>

          <IonCol size="1" className="table-header-cell">
            Data
          </IonCol>
          <IonCol size="3" className="table-header-cell">
            Relatorio
          </IonCol>
          <IonCol size="2" className="table-header-cell"></IonCol>
        </IonRow>

        {projectList.map((project, idProject) => {
          if (project[0].introduction) {
            const {
              title,
              sub_title,
              main_img_url,
              address,
              project_number,
              date,
              version,
            } = project[0].introduction;

            return (
              <IonRow key={idProject} className="table-row">
                <IonCol size="3" className="table-cell">
                  {title}
                </IonCol>
                <IonCol size="3" className="table-cell">
                  {address}
                </IonCol>
                <IonCol size="1" className="table-cell">
                  {date}
                </IonCol>
                <IonCol size="3" className="table-cell">
                  {date + "_" + title + "_" + project_number}
                </IonCol>
                <IonCol size="1" className="table-cell">
                  <IonButton expand="block">OPEN</IonButton>
                </IonCol>
                <IonCol size="1" className="table-cell">
                  <IonButton
                    expand="block"
                    color={"danger"}
                    onIonChange={() => deleteProjectOnList(idProject)}
                  >
                    X
                  </IonButton>
                </IonCol>
              </IonRow>
            );
          }
        })}

        {/* Table Footer */}
        <IonRow className="table-footer">
          <IonCol size="8" className="table-footer-cell">
            Total Project
          </IonCol>
          <IonCol size="4" className="table-footer-cell">
            {projectList.length}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}
