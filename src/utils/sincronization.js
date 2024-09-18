export function sincronization(remoteProjects, localProjects) {
  try {
    const newLocalProjects = localProjects.filter(
      (localProject) =>
        !remoteProjects.some(
          (remoteProject) => remoteProject[0].id === localProject[0].id
        )
    );
    const newRemoteProjects = remoteProjects.filter(
      (remoteProject) =>
        !localProjects.some(
          (localProject) => localProject[0].id === remoteProject[0].id
        )
    );

    return { newLocalProjects, newRemoteProjects };
  } catch (error) {
    throw new Error("Error al cargar los proyectos:", error);
  }
}
