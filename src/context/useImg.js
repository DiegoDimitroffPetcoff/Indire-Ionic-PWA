export function useImg(setProject) {
  function handleImg(
    e,
    moduleId,
    firstSectionId,
    sectionId,
  
    field
  ) {
    console.log("useImg");
    const value = e.detail
      ? e.detail.value
      : e.target.files
      ? e.target.files
      : e.target.value;

    const files = Array.from(value);
    const readers = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers)
      .then((imagesBase64) => {
        setProject((prevProject) => {
          const updateProject = [...prevProject];
          const section =
            updateProject[1].modules[moduleId].sections[firstSectionId]
              .sections[sectionId];

          // Aseguramos que section.img sea un array
          if (!Array.isArray(section[field])) {
            section[field] = [];
          }

          // Concatenamos las nuevas imágenes con las existentes
          section[field] = section[field].concat(imagesBase64);

          window.localStorage.setItem("data", JSON.stringify(updateProject));
          console.log(updateProject);
          console.log(localStorage.length);
          return updateProject;
        });
      })
      .catch((error) => console.error("Error leyendo archivos:", error));
  }
  function deleteImage(moduleId,firstSectionId, sectionId, imageIndex) {
    setProject((prevProject) => {
      const updateProject = [...prevProject];
      const section = updateProject[1].modules[moduleId].sections[firstSectionId].sections[sectionId];
      section.img.splice(imageIndex, 1);
      window.localStorage.setItem("data", JSON.stringify(updateProject));
      return updateProject;
    });
  }
  return {handleImg, deleteImage};
}
