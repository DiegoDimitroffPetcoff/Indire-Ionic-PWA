import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { saveProjectOnListProject } from "../services/storageService";
export function useProjectList(setProjectList) {
  function addProjectToProjectList(newProject) {
    setProjectList((preProjectList) => {
      let projectListUpdate = [...preProjectList];
      try {
        const newProjectCopy = JSON.parse(JSON.stringify(newProject));
        newProjectCopy[0].id = uuidv4();
        projectListUpdate.push(newProjectCopy);
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

  async function AddProjectToList(newProject) {
    const newProjectCopy = JSON.parse(JSON.stringify(newProject));
    newProjectCopy[0].id = uuidv4();
    await saveProjectOnListProject(newProjectCopy);
    setProjectList((prevProjects) => [...prevProjects, newProjectCopy]);
  }

  return { addProjectToProjectList, deleteProjectOnList, AddProjectToList };
}
