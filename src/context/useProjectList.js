import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import {
  editeProjectOnListProject,
  getLocalProjects,
  pushProjectOnListProject,
} from "../services/storageService";
import { postProjectList } from "../services/dbs/postProjectList";
export function useProjectList(setProjectList) {
  async function deleteProjectOnList(idProject) {
    let projectListUpdate = await getLocalProjects();
    const newProjectList = projectListUpdate.filter(
      (_, id) => id !== idProject
    );
    await editeProjectOnListProject(newProjectList);
    console.log(newProjectList);
    setProjectList(newProjectList);
  }

  async function AddProjectToList(newProject, onlyLocal) {
    if (onlyLocal) {
      console.log("Guardando en almacenamiento local:", newProject);
      await pushProjectOnListProject(newProject);
      setProjectList((prevProjects) => [...prevProjects, newProject]);
    } else {
      console.log("Añadiendo proyecto a la lista con base de datos:", newProject);
      const newProjectCopy = JSON.parse(JSON.stringify(newProject));
      newProjectCopy[0].id = uuidv4();
      await pushProjectOnListProject(newProjectCopy);
      await postProjectList(newProjectCopy);
      setProjectList((prevProjects) => [...prevProjects, newProjectCopy]);
    }
  }
  

  return { deleteProjectOnList, AddProjectToList };
}
