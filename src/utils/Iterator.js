export function Iterator(modules) {
  let allData = [];
  modules.forEach((module, moduleId) => {
    allData.push({
      name: module.module,
      description: module.description,
      title: module.title,
      idTemplate: `${moduleId + 1}`,
      budget: module.budget || [],
      type: "module",
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
          });
        });

        if (section.sections && section.sections.length > 0) {
          section.sections.forEach((subsection, subsectionId) => {
            allData.push({
              name: subsection.name,
              content: subsection.content,
              /*   description: subContent.description, */
              title: subsection.content[0].title,
              idTemplate: `${moduleId + 1}.${sectionId + 1}.${
                subsectionId + 1
              }`,
              budget: subsection.budget || [],
              type: "section",
              img: subsection.img,
            });

            if (subsection.sections && subsection.sections.length > 0) {
              subsection.sections.forEach((subSubsection, subSubsectionId) => {
                /*              subSubsection.content.forEach((subSubContent) => { */
                allData.push({
                  name: subSubsection.name,
                  content: subsection.content,
                  /*                description: subSubContent.description, */
                  /*  title: subSubContent.title, */
                  title: subsection.content[0].title,
                  idTemplate: `${moduleId + 1}.${sectionId + 1}.${
                    subsectionId + 1
                  }.${subSubsectionId + 1}`,
                  budget: subSubsection.budget || [],
                  type: "subsection",
                  img: subsection.img,
                });
                /*  }); */
              });
            }
          });
        }
      });
    }
  });

  return allData;
}
