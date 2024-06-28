export function Section({ project, projectId, handleChange }) {
  return (
    <>
      {project.section &&
        project.section.map((content, contentId) => {
          return (
            <div key={contentId}>
              Section
              <textarea
                value={content.contentSubtitle}
                placeholder="sectionTitle"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubtitle")
                }
              />
              <textarea
                value={content.contentSubcontent}
                placeholder="sectionImg"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubcontent")
                }
              />
                            <textarea
                value={content.contentSubcontent}
                placeholder="sectionBudget"
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
