export function useIntroduction(setProject) {
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
    
           window.localStorage.setItem("data", JSON.stringify(newProject));
            return newProject;
          } else if (field === "main_img_url") {
            const value = e.target.files[0];
            newProject[0].introduction[field] = value;
            console.log(newProject);
          }
        });
      }
      return {handleChangeIntroduction}
}