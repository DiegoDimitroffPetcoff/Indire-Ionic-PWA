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
      { module: " 6- Primer Modulo", description: "", title: "", sections: [] },
      /*       { module: "Tratativas", description: "", title: "", sections: [] }, */
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
    setProject((prevProject) => {
      const newProject = [...prevProject];
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

        /* window.localStorage.setItem("data", JSON.stringify(newProject)); */
        return newProject;
      } else if (field === "main_img_url") {
        const value = e.target.files[0];
        newProject[0].introduction[field] = value;
        console.log(newProject);
      }
    });
  }

  /* ----------------MODULE---------------- */

  function handleChangeModules(e, moduleId, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    const newProject = [...project];

    if (field === "title" || field === "description") {
      newProject[1].modules[moduleId][field] = value;
      setProject(newProject);
      /* window.localStorage.setItem("data", JSON.stringify(newProject)); */
    }
  }

  /* ----------------SECTION---------------- */

  function addSection(moduleId) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections.push({
        content: [{ title: "", description: "" }],
        img: null,
        budget: [],
        sections: [],
      });

      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function handleChangeSection(e, moduleId, sectionId, field) {
    const value = e.detail
      ? e.detail.value
      : e.target.files
      ? e.target.files
      : e.target.value;

    setProject((prevProject) => {
      const updateProject = [...prevProject];
      const section = updateProject[1].modules[moduleId].sections[sectionId];
      if (["title", "description"].includes(field)) {
        section.content[0][field] = value;
      } else if (field === "img") {
       
        const files = Array.from(value);
       
        const newImages = files.map((file) => ({
          name: file.name,
          src: URL.createObjectURL(file),
        }));

        section[field] = newImages;
        console.log(section);
      } else {
        console.log("no se agrego string");
      }

      window.localStorage.setItem("data", JSON.stringify(updateProject))

      return updateProject;
    });
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
  function addBudget(moduleId, sectionId) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[sectionId].budget.push({
        description: "",
        amount: "",
        un: "",
        qtd: "",
        uniteValue: "",
      });
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function handleBudget(e, moduleId, sectionId, idBudget, field) {
    const value = e.detail ? e.detail.value : e.target.value;
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      updateProject[1].modules[moduleId].sections[sectionId].budget[idBudget][
        field
      ] = value;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  function delenteBudget(moduleId, sectionId, idBudget) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      const budgetOnStorage =
        updateProject[1].modules[moduleId].sections[sectionId].budget;
      const sectionFiltered = budgetOnStorage.filter(
        (_, id) => id !== idBudget
      );
      console.log(sectionFiltered);
      updateProject[1].modules[moduleId].sections[sectionId].budget =
        sectionFiltered;
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }

  function handleSubmite(e) {
    e.preventDefault();
    window.localStorage.setItem("data", JSON.stringify(project));
    console.log(project);
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
        addBudget,
        handleBudget,
        delenteBudget,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
