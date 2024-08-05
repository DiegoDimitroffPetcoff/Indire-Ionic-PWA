import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
export function useProjectList(setProjectList) {
  function addProjectToProjectList(newProject) {
    setProjectList((preProjectList) => {
      let projectListUpdate = [...preProjectList];
      try {
        // Crear una copia profunda del newProject
        const newProjectCopy = JSON.parse(JSON.stringify(newProject));
  
        // Asignar un nuevo ID a la copia
        newProjectCopy[0].id = uuidv4();
        console.log(newProjectCopy);
  
        // Agregar la copia al listado de proyectos
        projectListUpdate.push(newProjectCopy);
        console.log(projectListUpdate);
  
        // Actualizar el almacenamiento local
        window.localStorage.setItem(
          "projectList",
          JSON.stringify(projectListUpdate)
        );
        return projectListUpdate;
      } catch (error) {
        console.log(error);
        return preProjectList;
      }
    });
  }

  function deleteProjectOnList(idProject) {
    setProjectList((preProjectList) => {
      let projectListUpdate = [...preProjectList];
      const newProjectList = projectListUpdate.filter(
        (_, id) => id !== idProject
      );
      window.localStorage.setItem(
        "projectList",
        JSON.stringify(newProjectList)
      );
      return newProjectList;
    });
  }
  return { addProjectToProjectList, deleteProjectOnList };
}
