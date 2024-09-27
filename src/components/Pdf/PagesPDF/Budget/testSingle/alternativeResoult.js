export function alternativeResoult(items) {
  const result = {};

  items.forEach((item) => {
    if (item.idTemplate[0] === "6") {
      if (!result[item.idTemplate]) {
        result[item.idTemplate] = {
          id: item.idTemplate,
          main: null,
          alternativas: {},
          totalMain: null,
        };
      }

      item.budget.forEach((budgetItem) => {
        if (!budgetItem.alternative) {
          // Asignar valores a 'main' cuando no hay alternativa
          result[item.idTemplate].main = budgetItem.uniteValue;
          result[item.idTemplate].amount = budgetItem.amount;
          result[item.idTemplate].description = budgetItem.description;
          result[item.idTemplate].qtd = budgetItem.qtd;
          result[item.idTemplate].un = budgetItem.un;
        } else {
          // Asignar alternativas al objeto 'alternativas'
          result[item.idTemplate].alternativas[budgetItem.alternative] = {
            alternativa: budgetItem.alternative,
            uniteValue: budgetItem.uniteValue,
            amount: budgetItem.amount,
            description: budgetItem.description,
            qtd: budgetItem.qtd,
            un: budgetItem.un,
          };

          // Verificar si 'main' ya tiene un valor asignado y calcular la diferencia
          if (result[item.idTemplate].main !== null && budgetItem.uniteValue !== undefined) {
            const diferencia = result[item.idTemplate].main - budgetItem.uniteValue;
            // Agregar la diferencia al objeto de alternativa
            result[item.idTemplate].alternativas[budgetItem.alternative].diferencia = diferencia;
          }
        }
      });
    }
  });

  console.log(result);
  return Object.values(result);
}
