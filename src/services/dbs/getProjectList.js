import projectList from "./mocks/MOCKPROJECTLIST.json";
export function getProjectList(params) {
  try {
    return projectList;
  } catch (error) {
    throw new Error("Error: ", error);
  }
}
