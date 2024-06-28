export function Introduction({ project, projectId }) {
  return (
    <>
      <input
        value={project.title}
        placeholder="Title"
        onChange={(e) => handleChange(e, projectId, null, "title")}
      />
      <input
        value={project.img}
        placeholder="img"
        onChange={(e) => handleChange(e, projectId, null, "img")}
      />
    </>
  );
}
