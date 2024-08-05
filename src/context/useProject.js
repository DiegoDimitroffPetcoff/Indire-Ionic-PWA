import { v4 as uuidv4 } from "uuid";

export function useProject(INITIAL_STATE, project, setProject, setProjectList) {
  function updateProject() {
    const newProject = JSON.parse(JSON.stringify(INITIAL_STATE));
    newProject[0].id = uuidv4();
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
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
          window.localStorage.setItem(
            "projectList",
            JSON.stringify(updatedPreList)
          );
          return updatedPreList;
        });
      } catch (error) {
        console.log(error);
      }
  }
  return { updateProject, resetProjectAndList};
}
