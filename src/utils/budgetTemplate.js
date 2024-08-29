import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export function budgetTemplate(module, isSameTemplate) {
  if (module.budget && module.budget.length > 0 && !isSameTemplate) {
    let budget = module.budget;
    let template = "";
    budget.forEach((budget) => {
      const { description, amount, qtd, un, uniteValue } = budget;
      template += `
    Custo Estimado: 
    ${capitalizeFirstLetter(
      description
    )}: ${uniteValue}  €  (ver artigo #1.6.2, capítulo 9 ESTIMATIVA DE CUSTO) 
    `;
    });
    return template;
  }
}