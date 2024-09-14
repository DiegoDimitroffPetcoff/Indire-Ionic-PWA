export function getProjectList() {
  let projectListFromDbs = [];
  return fetch("http://localhost:8080")
    .then((resp) => {
      if (!resp.ok) {
        // Si la respuesta no es OK, lanza un error
        throw new Error(
          `Error en la respuesta del servidor: ${resp.status} ${resp.statusText}`
        );
      }
      return resp.json();
    })
    .then((data) => {
      // Procesar los datos obtenidos
      data.forEach((project) => {
        projectListFromDbs.push(project.project_data);
      });

      return projectListFromDbs;
    })
    .catch((error) => {
      // Manejar errores de red o de procesamiento de datos
      console.error("Error al obtener la lista de proyectos:", error.message);
      return Promise.reject(error); // Rechazar la promesa para que el llamador pueda manejar el error
    });
}
