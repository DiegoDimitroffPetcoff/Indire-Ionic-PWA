import { saveProject } from "../services/storageService";

export function useSubsection(setProject) {
  function handleChangeSubSection(e, moduleId, sectionId, field) {
    const value = e.detail
      ? e.detail.value
      : e.target.files
      ? e.target.files
      : e.target.value;
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
              updateProject[1].modules[moduleId].sections[sectionId];
            if (!Array.isArray(section[field])) {
              section[field] = [];
            }
            section[field] = section[field].concat(imagesBase64);
            /* window.localStorage.setItem("data", JSON.stringify(updateProject)); */
            saveProject("data", updateProject);
            console.log(updateProject);
            return updateProject;
          });
        })
        .catch((error) => console.error("Error leyendo archivos:", error));
    } else {
      setProject((prevProject) => {
        const updateProject = [...prevProject];
        const section = updateProject[1].modules[moduleId].sections[sectionId];
        section.content[0][field] = value;
        /* window.localStorage.setItem("data", JSON.stringify(updateProject)); */
        saveProject("data", updateProject);
        return updateProject;
      });
    }
  }

  function deleteSubSection(
    description,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2
  ) {
    switch (description) {
      case "subsection":
        console.log("DELETE ALL SUBSECTION FUNCTION: " + description);
        setProject((prevProject) => {
          const newProject = [...prevProject];
          const sectionOnStorage =
            newProject[1].modules[moduleId].sections[firstSectionId].sections;
          const sectionFiltered = sectionOnStorage.filter(
            (_, id) => id !== sectionId
          );
          newProject[1].modules[moduleId].sections[firstSectionId].sections =
            sectionFiltered;
          /* window.localStorage.setItem("data", JSON.stringify(newProject)); */
          saveProject("data", newProject);
          return newProject;
        });
        break;
      case "subsection2":
        console.log("DELETE ALL SUBSECTION FUNCTION: " + description);

        setProject((prevProject) => {
          const newProject = [...prevProject];
          const sectionOnStorage =
            newProject[1].modules[moduleId].sections[firstSectionId].sections[
              sectionId
            ].sections;
          const sectionFiltered = sectionOnStorage.filter(
            (_, id) => id !== sectionId2
          );
          newProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections = sectionFiltered;
          /* window.localStorage.setItem("data", JSON.stringify(newProject)); */
          saveProject("data", newProject);
          return newProject;
        });
        break;
      default:
        console.log(
          "DELETE ALL DE SUBSECTION FUNCTION: DIDNT ADD DESCRIPTION: " +
            description
        );

        break;
    }
  }
  function addSubSection(key, moduleId, firstSectionId, sectionId) {
    switch (key) {
      case "subsection":
        console.log("subsection");
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[
            firstSectionId
          ].sections.push({
            content: [{ title: "", description: "" }],
            img: null,
            budget: [],
            sections: [],
          });
          /* window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          saveProject("data", updateProject);
          return updateProject;
        });
        break;

      case "subsection2":
        console.log("subsection2");
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections.push({
            content: [{ title: "", description: "" }],
            img: null,
            budget: [],
            sections: [],
          });
          /* window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          saveProject("data", updateProject);
          return updateProject;
        });
        break;
      default:
        console.log("no subsections adedd");
        break;
    }
  }
  return {
    deleteSubSection,
    handleChangeSubSection,
    addSubSection,
  };
}
