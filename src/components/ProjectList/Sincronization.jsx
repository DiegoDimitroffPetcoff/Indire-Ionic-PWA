import React, { useContext, useEffect, useState } from "react";

import { IonCol, IonAlert, IonRow, IonButton } from "@ionic/react";

import { ProjectContext } from "../../context/ProjectContext";
import { postProjectList } from "../../services/dbs/postProjectList";
import { LocalsProjectMapper } from "./LocalsProjectMapper/LocalsProjectMapper";
export function Sincronization() {
  const [localStoraged, setLocalStoraged] = useState(false);
  const [dbsStoraged, setdbsStoraged] = useState(false);

  const { syncResult, projectList, AddProjectToList } =
    useContext(ProjectContext);

  useEffect(() => {
    if (
      syncResult &&
      syncResult.newLocalProjects &&
      syncResult.newLocalProjects.length > 0
    ) {
      setLocalStoraged(true);
    }

    if (
      syncResult &&
      syncResult.newRemoteProjects &&
      syncResult.newRemoteProjects.length > 0
    ) {
      setdbsStoraged(true);
    }
  }, [syncResult]);
  async function postToDbs(listProject) {
    listProject.map(async (project) => {
      await postProjectList(project);
    });
  }
  async function postToLocalStorage(project) {
    try {
      await AddProjectToList(project, true);
      console.log(syncResult);
      console.log(projectList);
    } catch (error) {
      console.error(
        "Error al guardar proyectos en el almacenamiento local:",
        error
      );
    }
  }

  return (
    <>
      {localStoraged && (
        <>
          <IonButton id="present-alert" color={"danger"}>
            {syncResult.newLocalProjects.length} projeto(s) novo(s) local(is)
            não guardado(s) na base de dados
          </IonButton>
          <IonAlert
            trigger="present-alert"
            header="Atenção"
            subHeader="Novos Projetos Locais"
            message={`Você tem ${syncResult.newLocalProjects.length} projeto(s) novo(s) no seu armazenamento local que ainda não foram guardados na base de dados.`}
            buttons={[
              {
                text: "OK",
                handler: () => {
                  postToDbs(syncResult.newLocalProjects); // Ejecuta la acción cuando se presiona OK
                },
              },
            ]}
          />
        </>
      )}
      {dbsStoraged && (
        <LocalsProjectMapper
          projectsToMapp={syncResult.newRemoteProjects}
          postToLocalStorage={postToLocalStorage}
        />
      )}
    </>
  );
}
