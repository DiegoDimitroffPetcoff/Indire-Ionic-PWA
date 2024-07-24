export function useTemplates(setProject) {
  const addTemplateOnModule = (_, moduleId, newModule) => {
    /* Module File is special such have a diferent objet, there is not content like in all the subsections */
    setProject((prevProject) => {
      const newProject = [...prevProject];
      try {
        newProject[1].modules[moduleId].description =
          newModule.content[0].description;
        newProject[1].modules[moduleId].title = newModule.content[0].title;

        newProject[1].modules[moduleId].module = newModule.content[0].title;
        window.localStorage.setItem("data", JSON.stringify(newProject));
        return newProject;
      } catch (error) {
        console.log(error);
        return newProject;
      }
    });
  };
/* CHEKEAR QUE LAS DOS FUNCIONES TENGAN LOS MISOMS */
  function addTemplateSubSection(key,template, moduleId, firstSectionId, sectionId) {
    switch (key) {
      case "subsection":
        try {
          console.log("subsectiontemplate");
          console.log(template);
          setProject((prevProject) => {
            const updateProject = [...prevProject];
            
            if (
              updateProject[1] && 
              updateProject[1].modules[moduleId] &&
              updateProject[1].modules[moduleId].sections[firstSectionId]
            ) {
              updateProject[1].modules[moduleId].sections[firstSectionId].content = template.content
              updateProject[1].modules[moduleId].sections[firstSectionId].sections.push({
                content: [{ title: "", description: "" }],
                img: null,
                budget: [],
                sections: [],
              });
              window.localStorage.setItem("data", JSON.stringify(updateProject));
              return updateProject;
            } else {
              console.error("Invalid indices for updating project");
              return prevProject;
            }
          });
        } catch (error) {
          console.error("Error adding subsection:", error);
        }
        break;
  
      case "subsection2":
        try {
          console.log("subsection2");
          setProject((prevProject) => {
            const updateProject = [...prevProject];
            
            if (
              updateProject[1] && 
              updateProject[1].modules[moduleId] &&
              updateProject[1].modules[moduleId].sections[firstSectionId] &&
              updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId]
            ) {
              updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId].sections.push({
                content: [{ title: "", description: "" }],
                img: null,
                budget: [],
                sections: [],
              });
              window.localStorage.setItem("data", JSON.stringify(updateProject));
              return updateProject;
            } else {
              console.error("Invalid indices for updating project");
              return prevProject;
            }
          });
        } catch (error) {
          console.error("Error adding subsection2:", error);
        }
        break;
  
      default:
        console.log("no subsections added");
        break;
    }
  }
  
  return { addTemplateOnModule, addTemplateSubSection };
}
