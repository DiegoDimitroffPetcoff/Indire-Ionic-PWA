import React, { useContext, useEffect, useState } from "react";

import { IonAlert, IonButton } from "@ionic/react";

import { ProjectContext } from "../../context/ProjectContext";
import { postProjectList } from "../../services/dbs/postProjectList";
import { LocalsProjectMapper } from "./LocalsProjectMapper/LocalsProjectMapper";
export function Sincronization() {
  const [localStoraged, setLocalStoraged] = useState(false);
  const [dbsStoraged, setdbsStoraged] = useState(false);

  const { syncResult, projectList, AddProjectToList, setProjectList } =
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
  }, [syncResult, projectList]);
  async function postToDbs(listProject) {
    try {
      // Actualiza el estado de projectList agregando cada proyecto individualmente
      setProjectList((prevList) => {
        return [...prevList, ...listProject];
      });

      // Espera a que todas las solicitudes a la base de datos se completen
      await Promise.all(
        listProject.map(async (project) => {
          await postProjectList(project);
        })
      );

      console.log(
        "Todos los proyectos han sido guardados en la base de datos."
      );
    } catch (error) {
      console.error("Error al guardar proyectos en la base de datos:", error);
    }
  }
  async function postToLocalStorage(project) {
    try {
      await AddProjectToList(project, true);
    } catch (error) {
      console.error(
        "Error al guardar proyectos en el almacenamiento local:",
        error
      );
    }
  }

  return (
    <>
      {localStoraged && syncResult.newLocalProjects.length > 0 && (
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
      {dbsStoraged && syncResult.newRemoteProjects.length > 0 && (
        <LocalsProjectMapper
          projectsToMapp={syncResult.newRemoteProjects}
          postToLocalStorage={postToLocalStorage}
        />
      )}
    </>
  );
}
