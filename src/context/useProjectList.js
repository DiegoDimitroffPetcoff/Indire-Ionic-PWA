export function useProjectList(setProjectList) {
  function addProjectToProjectList(newProject) {
    setProjectList((preProjectList) => {
      let projectListUpdate = [...preProjectList];
      try {
        projectListUpdate.push(newProject);
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
  return { addProjectToProjectList };
}
