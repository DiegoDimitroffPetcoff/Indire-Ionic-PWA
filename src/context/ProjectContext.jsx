import { createContext, useState } from "react";
import { useContent } from "./useContent";
import { useIntroduction } from "./useIntroduction";
import { useModules } from "./useModules";
import { useSection } from "./useSection";
import { useSubsection } from "./useSubsection";
import { useBudget } from "./useBudget";
import { useImg } from "./useImg";

export const ProjectContext = createContext();

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
      {
        module: " 6. Primer Modulo",
        description: "",
        title: "",
        mainSection: [],
        sections: [],
      },
      /* { module: "7. Tratativas", description: "", title: "", sections: [] }, */
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
  /* ----------------CONTENT---------------- */

  const { addContent, handleChangeContent, deleteContent } =
    useContent(setProject);

  const { handleChangeIntroduction } = useIntroduction;
  /* ----------------TEMPLATES---------------- */
  const moduleTemplate = (moduleId, newModule) => {
    setProject((prevProject) => {
      const newProject = [...prevProject];

      newProject[1].modules[moduleId].description = newModule.description;
      newProject[1].modules[moduleId].title = newModule.title;
      window.localStorage.setItem("data", JSON.stringify(newProject));
      return newProject;
    });
  };
  /* ----------------MODULE---------------- */
  const { handleChangeModules, addMainSection, deleteMainSection } = useModules(
    { setProject, project }
  );

  /* ----------------SECTION---------------- */
  const { deleteSection, handleChangeSection, addSection } =
    useSection(setProject);

  /* ----------------BUDGET---------------- */
  const { handleImg, deleteImage  } = useImg(setProject);
  /* ----------------BUDGET---------------- */

  const { addBudget, delenteBudget, handleBudget } = useBudget(setProject);


  /* ----------------SUBSECTION---------------- */

  const { deleteSubSection, handleChangeSubSection, addSubSection } =
    useSubsection(setProject);

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
        moduleTemplate,
        addContent,
        addMainSection,
        deleteContent,
        deleteMainSection,
        handleChangeContent,
        handleImg
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
