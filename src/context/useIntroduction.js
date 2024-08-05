const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export function useIntroduction(setProject) {
  function handleChangeIntroduction(e, field, id) {
    if (field === "main_img_url") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProject((prevProject) => {
          const newProject = [...prevProject];
          newProject[0].introduction[field] = base64String;

          window.localStorage.setItem("data", JSON.stringify(newProject));

          let list = window.localStorage.getItem("projectList");
          if (list) {
            let listParse = JSON.parse(list);
            listParse = listParse.map((project) => {
              if (project[0].id === id) {
                project[0].introduction[field] = base64String;
              }
              return project;
            });
            window.localStorage.setItem("projectList", JSON.stringify(listParse));
          }

          return newProject;
        });
      };
      reader.readAsDataURL(file);
    } else {
      const value = e.detail.value;
      setProject((prevProject) => {
        const newProject = [...prevProject];
        newProject[0].introduction[field] = value;

        window.localStorage.setItem("data", JSON.stringify(newProject));

        let list = window.localStorage.getItem("projectList");
        if (list) {
          let listParse = JSON.parse(list);
          listParse = listParse.map((project) => {
            if (project[0].id === id) {
              project[0].introduction[field] = value;
            }
            return project;
          });
          window.localStorage.setItem("projectList", JSON.stringify(listParse));
        }

        return newProject;
      });
    }
  }

  return { handleChangeIntroduction };
}
