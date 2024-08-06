import { saveProject, getLocalProjects } from "../services/storageService";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export function useIntroduction(setProject) {
  async function handleChangeIntroduction(e, field, id) {
    try {
      if (field === "main_img_url") {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = async () => {
          const base64String = reader.result;
          setProject((prevProject) => {
            const newProject = [...prevProject];
            newProject[0].introduction[field] = base64String;

            // Guardar el proyecto actualizado
            saveProject("data", newProject);

            // Actualizar projectList en Capacitor
            const updateProjectList = async () => {
              let list = await getLocalProjects();
              list = list.map((project) => {
                if (project[0].id === id) {
                  project[0].introduction[field] = base64String;
                }
                return project;
              });
              saveProject("projects", list);
            };
            updateProjectList();

            return newProject;
          });
        };
        reader.readAsDataURL(file);
      } else {
        const value = e.detail.value;
        setProject((prevProject) => {
          const newProject = [...prevProject];
          newProject[0].introduction[field] = value;

          // Guardar el proyecto actualizado
          saveProject("data", newProject);

          // Actualizar projectList en Capacitor
          const updateProjectList = async () => {
            let list = await getLocalProjects();
            list = list.map((project) => {
              if (project[0].id === id) {
                project[0].introduction[field] = value;
              }
              return project;
            });
            saveProject("projects", list);
          };
          updateProjectList();

          return newProject;
        });
      }
    } catch (error) {
      console.error("Error en handleChangeIntroduction:", error);
    }
  }

  return { handleChangeIntroduction };
}
