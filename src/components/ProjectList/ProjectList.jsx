import { IonCol, IonGrid, IonRow, IonContent, IonButton } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import "./ProjectList.css";
import { ProjectContext } from "../../context/ProjectContext";
import { Spinner } from "../Spinner/Spinner";
import { getProjectList } from "../../services/dbs/getProjectList";
import { Sincronization } from "./Sincronization";

export function ProjectList() {
  const { projectList, deleteProjectOnList, setProject, setProjectList } =
    useContext(ProjectContext);
  const [initialProject, setInitialProject] = useState(null);

  function filter(id) {
    const projectFiltered = projectList.find((project) => project[0].id === id);
    setProject(projectFiltered);
    setInitialProject(JSON.parse(JSON.stringify(projectFiltered)));
  }

  if (!projectList) {
    return <Spinner message={"Listas de carregamento..."} />;
  }
  return (
    <IonContent>
      <IonGrid className="table-grid">
        {/* Caption */}
        <IonRow className="table-caption">
          <IonCol size="12">Project List</IonCol>
        </IonRow>

        {/* Table Header */}
        <IonRow className="table-header">
          <IonCol sizeMd="3" sizeXs="12" className="table-header-cell">
            Título
          </IonCol>
          <IonCol sizeMd="3" sizeXs="12" className="table-header-cell">
            Endereço
          </IonCol>
          <IonCol sizeMd="1" sizeXs="12" className="table-header-cell">
            Data
          </IonCol>
          <IonCol sizeMd="3" sizeXs="12" className="table-header-cell">
            Relatorio
          </IonCol>
          <IonCol sizeMd="2" sizeXs="12" className="table-header-cell"></IonCol>
        </IonRow>

        {projectList &&
          projectList.map((project, idProject) => {
            if (project[0].introduction) {
              const { title, address, date, project_number } =
                project[0].introduction;
              const id = project[0].id;
              return (
                <IonRow key={idProject} className="table-row">
                  <IonCol sizeMd="3" sizeXs="12" className="table-cell">
                    {title}
                  </IonCol>
                  <IonCol sizeMd="3" sizeXs="12" className="table-cell">
                    {address}
                  </IonCol>
                  <IonCol sizeMd="1" sizeXs="12" className="table-cell">
                    {date}
                  </IonCol>
                  <IonCol
                    sizeMd="3"
                    sizeXs="12"
                    className="table-cell"
                  >{`${date}_${title}_${project_number}`}</IonCol>
                  <IonCol sizeMd="1" sizeXs="12">
                    <IonButton
                      routerLink={`/project/${id}`}
                      expand="block"
                      onClick={() => filter(id)}
                    >
                      EDITE
                    </IonButton>
                  </IonCol>
                  <IonCol sizeMd="1" sizeXs="12">
                    <IonButton
                      expand="block"
                      color={"danger"}
                      onClick={() => deleteProjectOnList(idProject)}
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
          <IonCol sizeMd="8" sizeXs="6" className="table-footer-cell">
            Total Project
          </IonCol>
          <IonCol sizeMd="4" sizeXs="6" className="table-footer-cell">
            {projectList.length}
          </IonCol>
        </IonRow>
        <Sincronization />
      </IonGrid>
    </IonContent>
  );
}
