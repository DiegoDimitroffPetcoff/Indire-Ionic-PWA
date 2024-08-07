import { saveProject, getLocalProjects } from "../services/storageService";

export function useModules({ setProject, project }) {
  
  function handleChangeModules(e, moduleId, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    setProject((preProjet) => {
      if (field === "title" || field === "description") {
        preProjet[1].modules[moduleId][field] = value;

        // Guardar el proyecto actualizado en Capacitor
        saveProject("data", preProjet);

        // Actualizar projectList en Capacitor
        const updateProjectList = async () => {
          let list = await getLocalProjects();
          list = list.map((project) => {
            if (project[0].id === preProjet[0].id) {
              project[1].modules[moduleId][field] = value;
            }
            return project;
          });
          saveProject("projects", list);
        };
        updateProjectList();

        return preProjet;
      }
    });
  }

  function addMainSection(moduleId, title) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].mainSection.push({ name: title });

      // Guardar el proyecto actualizado en Capacitor
      saveProject("data", updateProject);

      // Actualizar projectList en Capacitor
      const updateProjectList = async () => {
        let list = await getLocalProjects();
        list = list.map((project) => {
          if (project[0].id === updateProject[0].id) {
            project[1].modules[moduleId].mainSection = updateProject[1].modules[moduleId].mainSection;
          }
          return project;
        });
        saveProject("projects", list);
      };
      updateProjectList();

      return updateProject;
    });
  }

  function addCounter(moduleId, value) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].moduleCounter = value;

      // Guardar el proyecto actualizado en Capacitor
      saveProject("data", updateProject);

      // Actualizar projectList en Capacitor
      const updateProjectList = async () => {
        let list = await getLocalProjects();
        list = list.map((project) => {
          if (project[0].id === updateProject[0].id) {
            project[1].modules[moduleId].moduleCounter = value;
          }
          return project;
        });
        saveProject("projects", list);
      };
      updateProjectList();

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

    // Guardar el proyecto actualizado en Capacitor
    saveProject("data", newProject);

    // Actualizar projectList en Capacitor
    const updateProjectList = async () => {
      let list = await getLocalProjects();
      list = list.map((proj) => {
        if (proj[0].id === newProject[0].id) {
          proj[1].modules[moduleId].mainSection = sectionFiltered;
        }
        return proj;
      });
      saveProject("projects", list);
    };
    updateProjectList();
  }

  return { addCounter, handleChangeModules, addMainSection, deleteMainSection };
}
