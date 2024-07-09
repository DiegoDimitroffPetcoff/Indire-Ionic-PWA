export function useBudget(setProject) {
  function addBudget(moduleId, firstSectionId, sectionId) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];

      updateProject[1].modules[moduleId].sections[firstSectionId].sections[
        sectionId
      ].budget.push({
        description: "",
        amount: "",
        un: "",
        qtd: "",
        uniteValue: "",
      });
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function handleBudget(
    e,
    moduleId,
    firstSectionId,
    sectionId,
    idBudget,
    field
  ) {
    const value = e.detail ? e.detail.value : e.target.value;
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[firstSectionId].sections[
        sectionId
      ].budget[idBudget][field] = value;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function delenteBudget(moduleId, firstSectionId, sectionId, idBudget) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      const budgetOnStorage =
        updateProject[1].modules[moduleId].sections[firstSectionId].sections[
          sectionId
        ].budget;
      const sectionFiltered = budgetOnStorage.filter(
        (_, id) => id !== idBudget
      );

      updateProject[1].modules[moduleId].sections[firstSectionId].sections[
        sectionId
      ].budget = sectionFiltered;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  return { addBudget, delenteBudget, handleBudget };
}
