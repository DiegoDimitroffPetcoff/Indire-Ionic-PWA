import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
export function Modules() {
  const { project, handleChangeIntroduction, addContent } = useContext(ProjectContext);
  const modules = project[1].modules || [];

  return (
    <>
      {modules.length > 0 &&
        modules.map((module, contentId) => {
          return (
            <div key={contentId}>
              <input
                value={module.title}
                placeholder="Title"
                onChange={(e) => handleChangeIntroduction(e, "title")}
              />
              <input
                value={module.img}
                placeholder="img"
                onChange={(e) => handleChangeIntroduction(e, "img")}
              />
              {module.content.map(item=>{<>
              
              </>})}
            </div>
          );
        })}
    </>
  );
}
