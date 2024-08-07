import { Preferences } from "@capacitor/preferences";

// Función para guardar un proyecto localmente
export const pushProjectOnListProject = async (project: any) => {
  const projects = await getLocalProjects();
  projects.push(project);
  await Preferences.set({
    key: "projects",
    value: JSON.stringify(projects),
  });
};

export const editeProjectOnListProject = async (newList: any) => {
  await Preferences.set({
    key: "projects",
    value: JSON.stringify(newList),
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
  value ? console.log("SIII tsx") : console.log("NULLL");
  return value ? JSON.parse(value) : null;
};

// Eliminar projecto desde Capacitor Preferences
export const deleteProject = async (key: any) => {
  await Preferences.remove({ key });
};
