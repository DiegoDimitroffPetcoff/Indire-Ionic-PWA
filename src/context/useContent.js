import { saveProject } from "../services/storageService";

export function useContent(setProject) {
  function addContent(
    description,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2
  ) {
    switch (description) {
      case "subsection":
        console.log("content /ADD section");
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].content.push({
            title: "",
            description: "",
          });

          saveProject("data", updateProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return updateProject;
        });
        break;
      case "subsection2":
        console.log("content /ADD sUBsection");
        console.log(sectionId2);
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].content.push({
            title: "",
            description: "",
          });
          saveProject("data", updateProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return updateProject;
        });
        break;
      default:
        console.log("NO ADDED content /ADD section YO SUBSECITON");
        break;
    }
  }
  function handleChangeContent(
    e,
    description,
    field,
    contentId,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2
  ) {
    switch (description) {
      case "subsection":
        console.log("content /section");
        setProject((prevProject) => {
          const value = e.detail ? e.detail.value : e.target.value;
          let updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].content[contentId][field] = value;
          saveProject("data", updateProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return updateProject;
        });
        break;
      case "subsection2":
        setProject((prevProject) => {
          console.log("content /Subsection");
          const value = e.detail ? e.detail.value : e.target.value;
          let updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].content[contentId][field] = value;
          saveProject("data", updateProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return updateProject;
        });
        break;

      default:
        console.log("NO ADDED content /HANDLE section YO SUBSECITON");
        break;
    }
  }
  function deleteContent(
    description,
    contentId,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2
  ) {
    switch (description) {
      case "subsection":
        console.log("DELETE CONTENT FUNCTION: dEscription: " + description);
        setProject((prevProject) => {
          const newProject = [...prevProject];
          const contentOnStorage =
            prevProject[1].modules[moduleId].sections[firstSectionId].sections[
              sectionId
            ].content;
          const contentFiltered = contentOnStorage.filter(
            (_, id) => id !== contentId
          );
          prevProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].content = contentFiltered;
          saveProject("data", newProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return newProject;
        });
        break;

      case "subsection2":
        console.log("DELETE CONTENT FUNCTION: description: " + description);
        setProject((prevProject) => {
          const newProject = [...prevProject];
          const contentOnStorage =
            prevProject[1].modules[moduleId].sections[firstSectionId].sections[
              sectionId
            ].sections[sectionId2].content;
          const contentFiltered = contentOnStorage.filter(
            (_, id) => id !== contentId
          );

          prevProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].content = contentFiltered;

          saveProject("data", newProject);
          /*  window.localStorage.setItem("data", JSON.stringify(updateProject)); */
          return newProject;
        });
        break;
      default:
        break;
    }
  }
  return { addContent, handleChangeContent, deleteContent };
}
