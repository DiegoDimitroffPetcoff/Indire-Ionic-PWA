export function dateChanger(isoDate) {
    const dateObj = new Date(isoDate);
  const day = String(dateObj.getDate()).padStart(2, "0"); // Agregar un 0 inicial si es necesario
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript van de 0 a 11, así que sumamos 1
  const year = dateObj.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  console.log(formattedDate);
  return formattedDate;
}
