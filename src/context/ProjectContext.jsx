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
      { module: "Primer Modulo", description: "", title: "", sections: [] },
      { module: "Tratativas", description: "", title: "", sections: [] },
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
      const value = e.detail.value;
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
  function handleChangeModules(e, moduleId, field) {
    const value = e.detail.value;
    const newProject = [...project];

    if (field === "title" || field === "description") {
      newProject[1].modules[moduleId][field] = value;
      setProject(newProject);
      window.localStorage.setItem("data", JSON.stringify(newProject));
    }
  }

  function handleSubmite(e) {
    e.preventDefault();
    window.localStorage.setItem("data", JSON.stringify(project));
    console.log(project);
  }
  function handleChangeSection(e, moduleId, sectionId, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    const newProject = [...project];
    const section = newProject[1].modules[moduleId].sections[sectionId];

    if (["title", "description"].includes(field)) {
      section.content[0][field] = value;
    } else {
      section[field] = value;
    }

    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
  }

  function addSection(moduleId) {
    const newProject = [...project];
    newProject[1].modules[moduleId].sections.push({
      content: [{ title: "", description: "" }],
      img: "",
      budget: [],
      sections: [],
    });
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
  }

  function delenteSection(moduleId, sectionId) {
    const newProject = [...project];
    const sectionOnStorage = newProject[1].modules[moduleId].sections;
    const sectionFiltered = sectionOnStorage.filter(
      (_, id) => id !== sectionId
    );
    newProject[1].modules[moduleId].sections = sectionFiltered;
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
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
        delenteSection,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
