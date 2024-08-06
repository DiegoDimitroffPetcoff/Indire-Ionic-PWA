export function useImg(setProject) {
  function handleImg(
    e,
    moduleId,
    firstSectionId,
    sectionId,
    sectionId2,
    field,
    contentDescription
  ) {
    console.log("useImg");

    switch (contentDescription) {
      case "subsection":
        console.log("subsection");

        try {
          // Obtener los archivos del evento
          const value = e.detail
            ? e.detail.value
            : e.target.files
            ? e.target.files
            : e.target.value;

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

          Promise.all(readers)
            .then((imagesBase64) => {
              setProject((prevProject) => {
                if (!prevProject[1].modules[moduleId]) {
                  throw new Error("Invalid moduleId");
                }
                const updateProject = [...prevProject];
                const section =
                  updateProject[1].modules[moduleId].sections[firstSectionId]
                    .sections[sectionId];

                // Aseguramos que section[field] sea un array
                if (!Array.isArray(section[field])) {
                  section[field] = [];
                }

                // Concatenamos las nuevas imágenes con las existentes
                section[field] = section[field].concat(imagesBase64);

                window.localStorage.setItem(
                  "data",
                  JSON.stringify(updateProject)
                );
                return updateProject;
              });
            })
            .catch((error) => console.error("Error leyendo archivos:", error));
        } catch (error) {
          console.error("Error en handleImg:", error);
        }
        break;
      case "subsection2":
        console.log("subsection2");

        try {
          // Obtener los archivos del evento
          const value = e.detail
            ? e.detail.value
            : e.target.files
            ? e.target.files
            : e.target.value;

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

          Promise.all(readers)
            .then((imagesBase64) => {
              setProject((prevProject) => {
                if (!prevProject[1].modules[moduleId]) {
                  throw new Error("Invalid moduleId");
                }
                const updateProject = [...prevProject];
                const section =
                  updateProject[1].modules[moduleId].sections[firstSectionId]
                    .sections[sectionId].sections[sectionId2];

                // Aseguramos que section[field] sea un array
                if (!Array.isArray(section[field])) {
                  section[field] = [];
                }

                // Concatenamos las nuevas imágenes con las existentes
                section[field] = section[field].concat(imagesBase64);

                window.localStorage.setItem(
                  "data",
                  JSON.stringify(updateProject)
                );

                return updateProject;
              });
            })
            .catch((error) => console.error("Error leyendo archivos:", error));
        } catch (error) {
          console.error("Error en handleImg:", error);
        }
        break;
      default:
        console.log("no contentDescription Added");

        break;
    }
  }

  function deleteImage(moduleId, firstSectionId, sectionId, imageIndex) {
    try {
      setProject((prevProject) => {
        if (!prevProject[1].modules[moduleId]) {
          throw new Error("Invalid moduleId");
        }
        const updateProject = [...prevProject];
        const section =
          updateProject[1].modules[moduleId].sections[firstSectionId].sections[
            sectionId
          ];

        if (!section.img || !Array.isArray(section.img)) {
          throw new Error("No images found in the section");
        }

        if (imageIndex < 0 || imageIndex >= section.img.length) {
          throw new Error("Invalid imageIndex");
        }

        section.img.splice(imageIndex, 1);
        window.localStorage.setItem("data", JSON.stringify(updateProject));
        return updateProject;
      });
    } catch (error) {
      console.error("Error en deleteImage:", error);
    }
  }

  return { handleImg, deleteImage };
}
