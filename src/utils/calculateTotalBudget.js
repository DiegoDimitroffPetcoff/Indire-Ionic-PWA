export function calculateTotalBudget(data) {
  let allInfoModules = [];
  data.modules.map((module) => {
    /*LOOP MODULES  */
    let totalModule = 0;
    let description = "";
    module.budget.map((budget, i) => {
      /* LOOP THE BUDGET ON THE MODULE */
      description = budget.description;
      totalModule = totalModule + parseInt(budget.amount);
    });

    module.sections &&
      module.sections.length > 0 &&
      module.sections.map(
        (section, sectionIndex) =>
          section.budget &&
          section.budget.length > 0 &&
          section.budget.map((budget, budgetIndex) => {
            description = budget.description;
            totalModule = totalModule + parseInt(budget.amount);
          })
      );

    /* CREATE A NEW OBJET  */
    let infoModule = {
      description,
      totalModule,
    };
    /* PUSH ALL THE INFORMATION  */
    allInfoModules.push(infoModule);
  });
  return allInfoModules;
}
