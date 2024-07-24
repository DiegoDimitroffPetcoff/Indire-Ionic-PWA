export function useTemplates(setProject) {
  const addTemplateOnModule = (moduleId, newModule) => {
    console.log(newModule);
    console.log("addTemplte");
    setProject((prevProject) => {
      const newProject = [...prevProject];
      newProject[1].modules[moduleId].description = newModule.description;
      newProject[1].modules[moduleId].title = newModule.title;
      window.localStorage.setItem("data", JSON.stringify(newProject));
      return newProject;
    });
  };
  return {addTemplateOnModule};
}
