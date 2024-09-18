import React, { useContext, useEffect, useState } from "react";
import { IonAlert, IonButton } from "@ionic/react";

import { ProjectContext } from "../../context/ProjectContext";
import { postProjectList } from "../../services/dbs/postProjectList";
export function Sincronization(remoteProjects, localProjects) {
  const [localStoraged, setLocalStoraged] = useState(false);
  const [dbsStoraged, setdbsStoraged] = useState(false);

  const { syncResult, listProject, AddProjectToList } = useContext(ProjectContext);

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
  }, [syncResult,listProject]);
  async function postToDbs(listProject) {
    listProject.map(async (project) => {
      await postProjectList(project);
    });
  }
  async function postToLocalStorage(listProject) {
    try {
      // Usar Promise.all para esperar a que todas las promesas se resuelvan
      await Promise.all(
        listProject.map(async (project) => {
          await AddProjectToList(project, true);
        })
      );
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
        <>
          <IonButton id="present-alertDBS" color={"danger"}>
            {syncResult.newRemoteProjects.length} projeto(s) na base de dados
            não encontrados no local
          </IonButton>
          <IonAlert
            trigger="present-alertDBS"
            header="Atenção"
            subHeader="Projetos na Base de Dados"
            message={`Há ${syncResult.newRemoteProjects.length} projeto(s) na base de dados que não foram encontrados no seu armazenamento local.`}
            buttons={[
              {
                text: "OK",
                handler: () => {
                  postToLocalStorage(syncResult.newRemoteProjects); // Ejecuta la acción cuando se presiona OK
                },
              },
            ]}
          />
        </>
      )}
    </>
  );
}
