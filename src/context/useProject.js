import { v4 as uuidv4 } from "uuid";
import {
  editeProjectOnListProject,
  saveProject,
} from "../services/storageService";

export function useProject(INITIAL_STATE, project, setProject, setProjectList) {
  function updateProject() {
    const newProject = JSON.parse(JSON.stringify(INITIAL_STATE));
    newProject[0].id = uuidv4();
console.log(newProject);

    saveProject("data", newProject);
    /*     window.localStorage.setItem("data", JSON.stringify(newProject)); */
  }

  function resetProjectAndList(initialProject) {
    try {
      setProject(initialProject);
      setProjectList((preList) => {
        let updatedPreList = preList.map((p) => {
          if (p[0].id === project[0].id) {
            return initialProject;
          }
          return p;
        });
        editeProjectOnListProject(updatedPreList);
        /*           window.localStorage.setItem(
            "projectList",
            JSON.stringify(updatedPreList)
          ); */
        return updatedPreList;
      });
    } catch (error) {
      console.log(error);
    }
  }
  return { updateProject, resetProjectAndList };
}
