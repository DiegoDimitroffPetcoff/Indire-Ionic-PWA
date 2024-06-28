import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
export function Content({ projectId }) {
  const { project, handleChange } = useContext(ProjectContext);
  const projectContent = project[projectId]?.content || [];

  return (
    <>
       {projectContent.length > 0 &&
        projectContent.map((content, contentId) => {
          console.log(content);
          return (
            <div key={contentId}>
              <textarea
                value={content.contentSubtitle}
                placeholder="Subtitle"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubtitle")
                }
              />
              <textarea
                value={content.contentSubcontent}
                placeholder="contentSubcontent"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubcontent")
                }
              />
            </div>
          );
        })}
    </>
  );
}
