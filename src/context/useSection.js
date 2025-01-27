import { saveProject } from "../services/storageService";

export function useSection(setProject) {
  // TODO SE DEBE ANALIZAR SIMPLEMENTE AGREGAR MAS TEXTO Y TITUYLO----> CREAR FUNCION
  function addSection(moduleId) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections.push({
        content: [{ title: "", description: "" }],
        img: null,
        budget: [],
        sections: [],
        name: "",
      });

      saveProject("data", updateProject);
      /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
      return updateProject;
    });
  }

  function handleChangeSection(
    e,
    field,
    moduleId,
    firstSectionId,
    sectionId,
    subsectionId,
    contentId
  ) {
    const value = e.detail?.value || e.target?.files || e.target?.value;
    if (field === "img") {
      const files = Array.from(value);
      const readers = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readers)
        .then((imagesBase64) => {
          setProject((prevProject) => {
            const updateProject = [...prevProject];
            const section =
              updateProject[1].modules[moduleId].sections[firstSectionId]
                .sections[sectionId];

            // Aseguramos que section.img sea un array
            if (!Array.isArray(section[field])) {
              section[field] = [];
            }

            // Concatenamos las nuevas imágenes con las existentes
            section[field] = section[field].concat(imagesBase64);

            /*     window.localStorage.setItem("data", JSON.stringify(updateProject)); */
            saveProject("data", updateProject);

            console.log(updateProject);
            return updateProject;
          });
        })
        .catch((error) => console.error("Error leyendo archivos:", error));
    } else {
      setProject((prevProject) => {
        const updateProject = [...prevProject];
        const section =
          updateProject[1].modules[moduleId].sections[firstSectionId];
        section[field] = value;
        /*     window.localStorage.setItem("data", JSON.stringify(updateProject)); */

        saveProject("data", updateProject);
        return updateProject;
      });
    }
  }
  function deleteSection(moduleId, sectionId) {
    setProject((prevProject) => {
      const newProject = [...prevProject];
      const sectionOnStorage = newProject[1].modules[moduleId].sections;

      const sectionFiltered = sectionOnStorage.filter(
        (_, id) => id !== sectionId
      );

      newProject[1].modules[moduleId].sections = sectionFiltered;

      /*     window.localStorage.setItem("data", JSON.stringify(newProject)); */
      saveProject("data", newProject);
      return newProject;
    });
  }
  return { deleteSection, handleChangeSection, addSection };
}
