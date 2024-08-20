export function capitalizeFirstLetter(string) {

  if (!string) return;
  return (
    string.trim().charAt(0).toUpperCase() + string.trim().slice(1).toLowerCase()
  );
}
