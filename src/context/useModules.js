export function useModules({ setProject, project }) {
  function handleChangeModules(e, moduleId, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    setProject((preProjet) => {
      if (field === "title" || field === "description") {
        preProjet[1].modules[moduleId][field] = value;
        window.localStorage.setItem("data", JSON.stringify(preProjet));
        return preProjet;
      }
    });
  }

  function addMainSection(moduleId, title) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].mainSection.push({ name: title });
      window.localStorage.setItem("data", JSON.stringify(updateProject));

      return updateProject;
    });
  }

  function deleteMainSection(moduleId, MainsectionId) {
    const newProject = [...project];
    const sectionOnStorage = newProject[1].modules[moduleId].mainSection;

    const sectionFiltered = sectionOnStorage.filter(
      (_, id) => id !== MainsectionId
    );
    newProject[1].modules[moduleId].mainSection = sectionFiltered;
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
  }
  return { handleChangeModules, addMainSection, deleteMainSection };
}
