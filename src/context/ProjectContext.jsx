import { createContext, useState } from "react";
import { useContent } from "./useContent";
import { useIntroduction } from "./useIntroduction";
import { useModules } from "./useModules";
import { useSection } from "./useSection";
import { useSubsection } from "./useSubsection";
import { useBudget } from "./useBudget";
import { useImg } from "./useImg";
import { useTemplates } from "./useTemplate";
import MOCKPROJECTLIST from "./MOCKPROJECTLIST.json";

export const ProjectContext = createContext();
const PROJECTS_LIST = MOCKPROJECTLIST;
const INITIAL_STATE = [
  {
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
export const PorjectProvider = ({ children }) => {
  const [project, setProject] = useState(() => {
    const projectStorage = window.localStorage.getItem("data");
    if (projectStorage) {
      return JSON.parse(projectStorage);
    }
    return INITIAL_STATE;
  });
  const [projectList, setProjectList] = useState(() => {
    const projectStorage = window.localStorage.getItem("projectList");
    if (projectStorage) {
      return JSON.parse(projectStorage);
    }
    return PROJECTS_LIST;
  });

  function addProjectToProjectList(newProject) {
/*     console.log("newProject",newProject);
    console.log(project); */
    setProject((preProjectList) => {
      const projectListUpdate = [...preProjectList];
      try {
        console.log("atnes:",projectListUpdate);
        projectListUpdate.push(newProject);
        console.log("despues:",projectListUpdate);

        return projectListUpdate;
      } catch (error) {
        console.log(error);
        return preProjectList;
      }
    }); 
  }
  /* ----------------CONTENT---------------- */
  const { addContent, handleChangeContent, deleteContent } =
    useContent(setProject);

  /* ----------------INTRODUCTION---------------- */
  const { handleChangeIntroduction } = useIntroduction(setProject);

  /* ----------------TEMPLATES---------------- */
  const { addTemplateOnModule, addTemplateSubSection } =
    useTemplates(setProject);

  /* ----------------MODULE---------------- */
  const { handleChangeModules, addCounter, addMainSection, deleteMainSection } =
    useModules({ setProject, project });

  /* ----------------SECTION---------------- */
  const {
    addCounterOnSection,
    deleteSection,
    handleChangeSection,
    addSection,
  } = useSection(setProject);

  /* ----------------IMAGE---------------- */
  const { handleImg, deleteImage } = useImg(setProject);

  /* ----------------BUDGET---------------- */
  const { addBudget, delenteBudget, handleBudget } = useBudget(setProject);

  /* ----------------SUBSECTION---------------- */
  const {
    deleteSubSection,
    handleChangeSubSection,
    addSubSection,
    addSubSectionSwitch,
  } = useSubsection(setProject);

  function handleSubmite(e) {
    e.preventDefault();
    window.localStorage.setItem("data", JSON.stringify(project));
  }
  return (
    <ProjectContext.Provider
      value={{
        handleChangeModules,
        handleSubmite,
        handleChangeSection,
        project,
        projectList,
        setProjectList,
        addSection,
        setProject,
        handleChangeIntroduction,
        deleteSection,
        addBudget,
        handleBudget,
        delenteBudget,
        deleteImage,
        addSubSection,
        deleteSubSection,

        addContent,
        addMainSection,
        deleteContent,
        deleteMainSection,
        handleChangeContent,
        handleImg,
        addSubSectionSwitch,
        addCounter,
        addCounterOnSection,
        addTemplateOnModule,
        addTemplateSubSection,
        addProjectToProjectList
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
