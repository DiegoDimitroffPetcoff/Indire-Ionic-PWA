export function Iterator(modules) {
  let allData = [];
  let previousImg = []; // Variable para almacenar la imagen de la iteración anterior

  modules.forEach((module, moduleId) => {
    allData.push({
      name: module.module,
      description: module.description,
      title: module.title,
      idTemplate: `${moduleId + 1}`,
      budget: module.budget || [],
      type: "module",
      img: module.img || "", // Asegúrate de agregar img si la tiene
    });

    if (module.sections && module.sections.length > 0) {
      module.sections.forEach((section, sectionId) => {
        section.content.forEach((content) => {
          allData.push({
            name: section.name,
            description: content.description,
            title: content.title,
            idTemplate: `${moduleId + 1}.${sectionId + 1}`,
            budget: section.budget || [],
            type: "firstSection",
            img: section.img === previousImg ? [] : section.img || [],
          });
          previousImg = section.img; // Actualiza la imagen previa
        });

        if (section.sections && section.sections.length > 0) {
          section.sections.forEach((subsection, subsectionId) => {
            allData.push({
              name: subsection.name,
              content: subsection.content,
              title: subsection.content[0].title,
              idTemplate: `${moduleId + 1}.${sectionId + 1}.${
                subsectionId + 1
              }`,
              budget: subsection.budget || [],
              type: "section",
              img: subsection.img === previousImg ? [] : subsection.img || [],
            });
            previousImg = subsection.img; // Actualiza la imagen previa

            if (subsection.sections && subsection.sections.length > 0) {
              subsection.sections.forEach(
                (subSubsection, subSubsectionId) => {
                  allData.push({
                    name: subSubsection.name,
                    content: subSubsection.content,
                    title: subSubsection.content[0].title,
                    idTemplate: `${moduleId + 1}.${sectionId + 1}.${
                      subsectionId + 1
                    }.${subSubsectionId + 1}`,
                    budget: subSubsection.budget || [],
                    type: "subsection",
                    img:
                      subSubsection.img === previousImg
                        ? []
                        : subSubsection.img || [],
                  });
                  previousImg = subSubsection.img; // Actualiza la imagen previa
                }
              );
            }
          });
        }
      });
    }
  });

  return allData;
}
