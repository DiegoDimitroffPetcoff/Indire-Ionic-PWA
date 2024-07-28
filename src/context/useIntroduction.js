const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export function useIntroduction(setProject) {
    function handleChangeIntroduction(e, field) {
        setProject((prevProject) => {
          const newProject = [...prevProject];
          if (
            field === "title" ||
            field === "sub_title" ||
            field === "address" ||
            field === "project_number" ||
        
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
          }else if (field === "date") {
            console.log("date:)");
            const value = e.detail.value;
            
            newProject[0].introduction[field] = formatDate(value);
            console.log(formatDate(value));
    
           window.localStorage.setItem("data", JSON.stringify(newProject));
            return newProject;
          }
        });
      }
      return {handleChangeIntroduction}
}