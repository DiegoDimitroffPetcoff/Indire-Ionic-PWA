import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
export function Modules() {
  const { project, handleChange, addContent } = useContext(ProjectContext);
  const modules = project[1].modules || [];

  return (
    <>
      {modules.length > 0 &&
        modules.map((module, contentId) => {
          return (
            <div
              key={contentId}
              style={{
                border: "solid white 3px",
                margin: "30px",
                display: "flex",
                flexDirection: "column",
              }}
            >
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

              {module.content.map((item, id) => {
                return (
                  <>
                    <textarea
                      value={item.contentSubtitle}
                      placeholder="Subtitle"
                      onChange={(e) => handleChange(e, id, "contentSubtitle")}
                    />
                    <textarea
                      value={item.contentSubcontent}
                      placeholder="contentSubcontent"
                      onChange={(e) => handleChange(e, id, "contentSubcontent")}
                    />
                  </>
                );
              })}
              <button onClick={() => addContent(contentId)}>Add Section</button>
            </div>
          );
        })}
    </>
  );
}
