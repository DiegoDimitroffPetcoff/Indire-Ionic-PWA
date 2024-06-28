export function Content({ project, projectId, handleChange }) {
  return (
    <>
      {project.content &&
        project.content.map((content, contentId) => {
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
