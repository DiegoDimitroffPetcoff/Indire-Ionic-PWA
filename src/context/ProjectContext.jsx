import { createContext, useState } from "react";

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
        content: [],
        img: "",
        title: "",
        sections: [],
        budget: [],
      },
    ],
  },
];
export const PorjectProvider = ({ children }) => {
  const [project, setProject] = useState(() => {
    const projectStorage = window.localStorage.getItem("data");
    if (projectStorage) {
      console.log("si hay storage");
      return JSON.parse(projectStorage);
    }
    return INITIAL_STATE;
  });

  function handleChangeIntroduction(e, field) {
    const newProject = [...project];
    if (
      field === "title" ||
      field === "sub_title" ||
      field === "address" ||
      field === "project_number" ||
      field === "date" ||
      field === "version"
    ) {
      const value = e.target.value;
      newProject[0].introduction[field] = value;
      setProject(newProject);
      window.localStorage.setItem("data", JSON.stringify(newProject));
    } else if (field === "main_img_url") {
      const value = e.target.files[0];
      newProject[0].introduction[field] = value;

      if (value) {
        // Crear una URL de vista previa usando FileReader
        const reader = new FileReader();
        reader.onloadend = () => {
          setProject(reader.result);
        };
        reader.readAsDataURL(file);
        /*   setProject(newProject); */
        window.localStorage.setItem("data", JSON.stringify(newProject));
      }
    }
  }
  function handleChange(e, moduleId, contentId, field) {
    const value = e.target.value;
    const newProject = [...project];
    if (field === "title" || field === "sub_title") {
      newProject[moduleId].introduction[field] = value;
      setProject(newProject);
      window.localStorage.setItem("data", JSON.stringify(newProject));
    } else if ("contentSubtitle" === field || "contentSubcontent" === field) {
      newProject[moduleId].content[contentId][field] = value;
      window.localStorage.setItem("data", JSON.stringify(newProject));
      setProject(newProject);
    } else if (
      "sectionTitle" === field ||
      "sectionImg" === field ||
      "sectionBudget" === field
    ) {
      newProject[moduleId].section[contentId][field] = value;
      window.localStorage.setItem("data", JSON.stringify(newProject));
      setProject(newProject);
    }
  }

  function handleSubmite(e) {
    e.preventDefault();
    window.localStorage.setItem("data", JSON.stringify(project));
  }
  function addContent(moduleId) {
    const newProject = [...project];
    newProject[1].modules[moduleId].content.push({
      contentSubtitle: "",
      contentSubcontent: "",
    });
    console.log(newProject);
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
  }

  function addSection(e, moduleId) {
    const newProject = [...project];
    newProject[1].modules[moduleId].content.push({
      title: "",
      content: [],
      img: "",
      budget: [],
      section: [],
    });
    setProject(newProject);
  }
  return (
    <ProjectContext.Provider
      value={{
        handleChange,
        handleSubmite,
        addContent,
        project,
        addSection,
        setProject,
        handleChangeIntroduction,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
