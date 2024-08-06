import { saveProject } from "../services/storageService";
export function useImg(setProject) {
  const handleImg = async (e, moduleId, firstSectionId, sectionId, sectionId2, field, contentDescription) => {
    console.log("useImg");

    try {
      const value = e.detail ? e.detail.value : e.target.files ? e.target.files : e.target.value;

      if (!value) {
        throw new Error("No files selected");
      }

      const files = Array.from(value);

      if (!files.length) {
        throw new Error("No files found in the selection");
      }

      const readers = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = (error) => reject(`File read error: ${error}`);
          reader.readAsDataURL(file);
        });
      });

      const imagesBase64 = await Promise.all(readers);

      setProject((prevProject) => {
        const updateProject = [...prevProject];
        let section;

        switch (contentDescription) {
          case "subsection":
            section = updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId];
            break;
          case "subsection2":
            section = updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId].sections[sectionId2];
            break;
          default:
            throw new Error("Invalid contentDescription");
        }

        if (!Array.isArray(section[field])) {
          section[field] = [];
        }

        section[field] = section[field].concat(imagesBase64);

        const key = `project_${moduleId}_${firstSectionId}_${sectionId}_${sectionId2}_${field}`;
        saveProject(key, section[field]);

        return updateProject;
      });
    } catch (error) {
      console.error("Error en handleImg:", error);
    }
  };

  const deleteImage = async (moduleId, firstSectionId, sectionId, imageIndex) => {
    try {
      setProject((prevProject) => {
        const updateProject = [...prevProject];
        const section = updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId];

        if (!section.img || !Array.isArray(section.img)) {
          throw new Error("No images found in the section");
        }

        if (imageIndex < 0 || imageIndex >= section.img.length) {
          throw new Error("Invalid imageIndex");
        }

        section.img.splice(imageIndex, 1);

        const key = `project_${moduleId}_${firstSectionId}_${sectionId}_img`;
        saveProject(key, section.img);

        return updateProject;
      });
    } catch (error) {
      console.error("Error en deleteImage:", error);
    }
  };

  return { handleImg, deleteImage };
}