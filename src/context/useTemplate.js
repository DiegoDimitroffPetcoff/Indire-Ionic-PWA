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
  function addTemplateSubSection(
    key,
    template,
    moduleId,
    firstSectionId,
    sectionId
  ) {
    switch (key) {
      case "subsection":
        try {
          setProject((prevProject) => {
            const updateProject = [...prevProject];

            // Verificar si los índices son válidos
            if (
              updateProject[1] &&
              updateProject[1].modules[moduleId] &&
              updateProject[1].modules[moduleId].sections[firstSectionId]
            ) {
              // Añadir la subsección del template
              updateProject[1].modules[moduleId].sections[
                firstSectionId
              ].sections.push({
                content: template.content,
                img: null,
                budget: [],
                sections: [],
              });

              console.log(
                "Updated sections:",
                updateProject[1].modules[moduleId].sections
              );

              // Guardar en localStorage
              window.localStorage.setItem(
                "data",
                JSON.stringify(updateProject)
              );
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

      default:
        console.log("no subsections added");
        break;
    }
  }

  return { addTemplateOnModule, addTemplateSubSection };
}
