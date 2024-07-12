export function useBudget(setProject) {
  function addBudget(
    description,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2
  ) {
    switch (description) {
      case "subsection":
        console.log("ADD BUDGET FUNCTION: description: " + description);
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
        break;
      case "subsection2":
        console.log("ADD BUDGET FUNCTION: description: " + description);
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].budget.push({
            description: "",
            amount: "",
            un: "",
            qtd: "",
            uniteValue: "",
          });
          window.localStorage.setItem("data", JSON.stringify(updateProject));
          return updateProject;
        });
        break;
      default:
        console.log("ADD BUDGET FUNCTION: NO DESCRIPTION ADDED");
        break;
    }
  }

  function handleBudget(
    e,
    description,
    field,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2,
    idBudget
  ) {
    const value = e.detail ? e.detail.value : e.target.value;
    switch (description) {
      case "subsection":
        console.log("HANDLE BUDGET FUNCTION:: " + description);

        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].budget[idBudget][field] = value;
          window.localStorage.setItem("data", JSON.stringify(updateProject));
          return updateProject;
        });
        break;
      case "subsection2":
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].budget[idBudget][field] = value;
          window.localStorage.setItem("data", JSON.stringify(updateProject));
          return updateProject;
        });
        break;
      default:
        console.log(
          "HANDLE BUDGET FUNCTION: DIDNT ADD DESCRIPTION: " + description
        );

        break;
    }
  }

  function delenteBudget(
    description,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2,
    idBudget
  ) {
    switch (description) {
      case "subsection":
        console.log("DELETE BUDGET FUNCTION: description: " + description);
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          const budgetOnStorage =
            updateProject[1].modules[moduleId].sections[firstSectionId]
              .sections[sectionId].budget;
          const sectionFiltered = budgetOnStorage.filter(
            (_, id) => id !== idBudget
          );
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].budget = sectionFiltered;
          window.localStorage.setItem("data", JSON.stringify(updateProject));
          return updateProject;
        });
        break;

      case "subsection2":
        console.log("DELETE BUDGET FUNCTION: description: " + description);
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          const budgetOnStorage =
            updateProject[1].modules[moduleId].sections[firstSectionId]
              .sections[sectionId].sections[sectionId2].budget;
          const sectionFiltered = budgetOnStorage.filter(
            (_, id) => id !== idBudget
          );
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ].sections[sectionId2].budget = sectionFiltered;
          window.localStorage.setItem("data", JSON.stringify(updateProject));
          return updateProject;
        });
        break;
      default:
        console.log("NO DESCRIPTION ADDED" + description);

        break;
    }
  }
  return { addBudget, delenteBudget, handleBudget };
}
