import projectList from "./mocks/MOCKPROJECTLIST.json";
export async function postProjectList(project) {
  try {
    const response = await fetch("http://localhost:8080/addProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Obtén y maneja la respuesta JSON del servidor
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error(`Error: ${error.message}`);
  }
}
