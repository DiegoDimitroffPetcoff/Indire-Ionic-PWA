import { createContext, useEffect, useState } from "react";

// Custom hooks imports
import { useContent } from "./useContent";
import { useIntroduction } from "./useIntroduction";
import { useModules } from "./useModules";
import { useSection } from "./useSection";
import { useSubsection } from "./useSubsection";
import { useBudget } from "./useBudget";
import { useImg } from "./useImg";
import { useTemplates } from "./useTemplate";
import { useProjectList } from "./useProjectList";
import { useProject } from "./useProject";

// Static data and services imports
import MOCKPROJECTLIST from "./MOCKPROJECTLIST.json";
import { v4 as uuidv4 } from "uuid";
import {
  saveProject,
  getProject,
  pushProjectOnListProject,
  getLocalProjects,
  clearLocalProjects,
} from "../services/storageService";

// Create ProjectContext
export const ProjectContext = createContext();

// Mock project list initialization
const PROJECTS_LIST = MOCKPROJECTLIST;

// Initial state for a new project
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

// ProjectProvider component
export const PorjectProvider = ({ children }) => {
  // State management
  const [project, setProject] = useState(null);
  const [projectList, setProjectList] = useState(PROJECTS_LIST);

  // Load project data Capacitor
  useEffect(() => {
    const loadProject = async () => {
      const storedProject = await getProject("data");
      if (storedProject) {
        console.log("SI HAY CAPACITOR STORED");
        setProject(storedProject);
      } else {
        console.log("NO HAY CAPACITOR STORED, USANDO INITIAL_STATE");
        setProject(INITIAL_STATE);
      }
    };
    loadProject();
  }, []);

  // Load project list Capacitor
  useEffect(() => {
    console.log("Loading project list from storage");
    const loadProjects = async () => {
      const localProjects = await getLocalProjects();
      setProjectList(localProjects);
    };
    loadProjects();
  }, []);

  // Clear projects from local storage
  const clearProjectsFromStorage = async () => {
    await clearLocalProjects();
    setProjectList([]);
  };

  // Custom hook usage
  const { updateProject, resetProjectAndList } = useProject(
    INITIAL_STATE,
    project,
    setProject,
    setProjectList
  );

  const { deleteProjectOnList, AddProjectToList } =
    useProjectList(setProjectList);

  // Custom hooks for different sections of the project
  const { addContent, handleChangeContent, deleteContent } =
    useContent(setProject);

  const { handleChangeIntroduction } = useIntroduction(setProject);

  const { addTemplateOnModule, addTemplateSubSection } =
    useTemplates(setProject);

  const { handleChangeModules, addCounter, addMainSection, deleteMainSection } =
    useModules({ setProject, project });

  const {
    addCounterOnSection,
    deleteSection,
    handleChangeSection,
    addSection,
  } = useSection(setProject);

  const { handleImg, deleteImage } = useImg(setProject);

  const { addBudget, delenteBudget, handleBudget } = useBudget(setProject);

  const {
    deleteSubSection,
    handleChangeSubSection,
    addSubSection,
    addSubSectionSwitch,
  } = useSubsection(setProject);

  // Form submission handler
  function handleSubmite(e) {
    e.preventDefault();
    /* Uncomment the following lines if localStorage usage is required
    window.localStorage.setItem("data", JSON.stringify(project));
    window.localStorage.setItem("projectList", JSON.stringify(projectList));
    */
  }

  // Provider component
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
        updateProject,
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

        deleteProjectOnList,
        resetProjectAndList,
        clearProjectsFromStorage,
        AddProjectToList,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
