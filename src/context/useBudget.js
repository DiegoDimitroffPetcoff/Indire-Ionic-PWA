export function useBudget(setProject) {
  function addBudget(moduleId, firstSectionId, sectionId) {
    console.log("addBudget");
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
  function handleBudget(e, moduleId, sectionId, idBudget, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[sectionId].budget[idBudget][
        field
      ] = value;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function delenteBudget(moduleId, sectionId, idBudget) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      const budgetOnStorage =
        updateProject[1].modules[moduleId].sections[sectionId].budget;
      const sectionFiltered = budgetOnStorage.filter(
        (_, id) => id !== idBudget
      );
      console.log(sectionFiltered);
      updateProject[1].modules[moduleId].sections[sectionId].budget =
        sectionFiltered;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  return { addBudget, delenteBudget, handleBudget };
}
