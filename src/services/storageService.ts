import { Preferences } from "@capacitor/preferences";

// Función para guardar un proyecto localmente
export const saveProjectLocally = async (project: any) => {
  const projects = await getLocalProjects();
  projects.push(project);
  await Preferences.set({
    key: "projects",
    value: JSON.stringify(projects),
  });
};

// Función para obtener proyectos guardados localmente
export const getLocalProjects = async () => {
  const { value } = await Preferences.get({ key: "projects" });
  return value ? JSON.parse(value) : [];
};

// Función para limpiar los proyectos guardados localmente
export const clearLocalProjects = async () => {
  await Preferences.remove({ key: "projects" });
};
