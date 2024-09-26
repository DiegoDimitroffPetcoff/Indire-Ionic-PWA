// Variables para almacenar el estado entre llamadas
let previousSecondNumber = null;
let lastRepeatedTemplate = null;

export function lastNumber(template) {
  // Dividimos el template para obtener las partes
  const parts = template.split(".");

  if (parts.length > 1) {
    const secondNumber = parts[1];

    // Verificamos si el segundo número es igual al anterior
    if (secondNumber === previousSecondNumber) {
      // Si es igual, actualizamos el último repetido
      lastRepeatedTemplate = template;
      return true; // Retorna true cuando hay una repetición
    } else {
      // Si cambia el segundo número, restablecemos el último repetido
      lastRepeatedTemplate = null;
    }

    // Actualizamos el valor del segundo número anterior para la siguiente iteración.
    previousSecondNumber = secondNumber;
  }

  // Si no hay repetición, retornamos false
  return false;
}
