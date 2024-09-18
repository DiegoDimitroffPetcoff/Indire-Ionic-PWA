import { Preferences } from "@capacitor/preferences";

// Función para guardar un proyecto localmente
export const pushProjectOnListProject = async (project: any) => {
  try {
    // Leer los proyectos almacenados localmente
    const storedProjects = await getLocalProjects();

    // Asegúrate de que `projects` sea una copia para evitar modificar el original
    const projects = [...storedProjects, project];

    // Guardar la lista actualizada en el almacenamiento local
    await Preferences.set({
      key: "projectsList",
      value: JSON.stringify(projects),
    });
  } catch (error) {
    console.error("Error al guardar el proyecto en local:", error);
  }
};

export const editeProjectOnListProject = async (newList: any) => {
  await Preferences.set({
    key: "projectsList",
    value: JSON.stringify(newList),
  });
};

// Función para obtener proyectos guardados localmente
export const getLocalProjects = async () => {
  const { value } = await Preferences.get({ key: "projectsList" });
  return value ? JSON.parse(value) : [];
};

// Función para limpiar los proyectos guardados localmente
export const clearLocalProjects = async () => {
  await Preferences.remove({ key: "projectsList" });
};

// Guardar projecto en Capacitor Storage
export const saveProject = async (key: any, data: any) => {
  await Preferences.set({
    key,
    value: JSON.stringify(data),
  });
};

// Obtener projecto desde Capacitor Preferences
export const getProject = async (key: any) => {
  const { value } = await Preferences.get({ key });

  return value ? JSON.parse(value) : null;
};

// Eliminar projecto desde Capacitor Preferences
export const deleteProject = async (key: any) => {
  await Preferences.remove({ key });
};
// Eliminar projecto desde Capacitor Preferences

export const deleteOneProject = async (key: string, id: any) => {
  // Obtén el valor almacenado con la clave dada
  const { value } = await Preferences.get({ key });

  // Asegúrate de que el valor sea un array parseando el JSON
  let parsedValue: any[] = [];
  if (value) {
    try {
      parsedValue = JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON from Preferences:", error);
    }
  }

  // Filtra los valores para excluir el id proporcionado
  const valueFiltered = parsedValue.filter(
    (item: any, index: number) => index !== id
  );

  // Guarda el valor filtrado de nuevo en Preferences
  await Preferences.set({
    key: key,
    value: JSON.stringify(valueFiltered),
  });
  return valueFiltered;
};
