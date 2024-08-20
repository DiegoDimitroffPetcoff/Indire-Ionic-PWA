export function Iterator(modules) {
  let allData = [];
  modules.forEach((module, moduleId) => {
    allData.push({
      name: module.module,
      description: module.description,
      title: module.title,
      idTemplate: `${moduleId + 1}`,
      budget: module.budget || [],
    });

    if (module.sections && module.sections.length > 0) {
      module.sections.forEach((section, sectionId) => {
        section.content.forEach((content) => {
          allData.push({
            name: section.name,
            description: content.description,
            title: content.title,
            idTemplate: `${moduleId}.${sectionId + 1}`,
            budget: section.budget || [],
          });
        });

        if (section.sections && section.sections.length > 0) {
          section.sections.forEach((subsection, subsectionId) => {
            subsection.content.forEach((subContent) => {
              allData.push({
                name: subsection.name,
                description: subContent.description,
                title: subContent.title,
                idTemplate: `${moduleId}.${sectionId + 1}.${subsectionId + 1}`,
                budget: subsection.budget || [],
              });
            });

            if (subsection.sections && subsection.sections.length > 0) {
              subsection.sections.forEach((subSubsection, subSubsectionId) => {
                subSubsection.content.forEach((subSubContent) => {
                  allData.push({
                    name: subSubsection.name,
                    description: subSubContent.description,
                    title: subSubContent.title,
                    idTemplate: `${moduleId}.${sectionId + 1}.${subsectionId + 1}.${
                      subSubsectionId + 1
                    }`,
                    budget: subSubsection.budget || [],
                  });
                });
              });
            }
          });
        }
      });
    }
  });

  return allData;
}
