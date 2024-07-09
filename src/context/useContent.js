export function useContent(setProject) {
  function addContent(moduleId, firstSectionId, sectionId) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[firstSectionId].sections[
        sectionId
      ].content.push({
        title: "",
        description: "",
      });

      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function handleChangeContent(
    e,
    moduleId,
    sectionId,
    firstSectionId,
    contentId,
    field
  ) {
    setProject((prevProject) => {
      const value = e.detail ? e.detail.value : e.target.value;
      let updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[firstSectionId].sections[
        sectionId
      ].content[contentId][field] = value;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function deleteContent(moduleId, firstSectionId, sectionId, contentId) {
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

      window.localStorage.setItem("data", JSON.stringify(newProject));
      return newProject;
    });
  }
  return { addContent, handleChangeContent, deleteContent };
}
