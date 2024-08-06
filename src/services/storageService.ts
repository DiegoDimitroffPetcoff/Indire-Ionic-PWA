import { Preferences } from "@capacitor/preferences";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = [
    {
      id: uuidv4(),
      introduction: {
        title: "",
        sub_title: "",
        main_img_url: "",
        address: "",
        project_number: "",
        date: "",
        version: "",
      },
    },
    {
      modules: [
        { module: "INTRODUÇÃO", description: "", title: "", sections: [] },
        { module: " DESCRIÇÃO GERAL", description: "", title: "", sections: [] },
        {
          module: " INSPEÇÃO TÉCNICA AO EDIFÍCIO",
          description: "",
          title: "",
          sections: [],
        },
        { module: " ELEMENTOS BASE", description: "", title: "", sections: [] },
        {
          module: " HISTÓRICO DE INTERVENÇÕES",
          description: "",
          title: "",
          sections: [],
        },
        {
          module: "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS",
          description: "",
          title: "",
          mainSection: [],
          sections: [],
        },
        {
          module: " RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO",
          description: "",
          title: "",
          sections: [],
        },
        { module: " CONCLUSÕES", description: "", title: "", sections: [] },
      ],
    },
  ];
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
  return value ? JSON.parse(value) : INITIAL_STATE;
};

// Eliminar projecto desde Capacitor Preferences
export const deleteProject = async (key: any) => {
  await Preferences.remove({ key });
};
