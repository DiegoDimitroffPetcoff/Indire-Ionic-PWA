import { useContext } from "react";
import { Budget } from "../../Budget/Buget";
import { ProjectContext } from "../../../../../context/ProjectContext";
import { TaskBar } from "../../TaskBar/Taskbar";
import { ContentHandler } from "../../ContentHandler/ContentHandler";

export function Subsection1({ moduleId, sectionId, subsectionId }) {
  const {
    handleChangeSubSection,
    handleDeleteImage,
    addSubSection,
    deleteSubSection,
    project,
  } = useContext(ProjectContext);
  let subsection =
    project[1].modules[moduleId].sections[sectionId].sections[subsectionId];

  return (
    <>
      <div key={subsectionId} style={{ margin: "0 0 0 10px" }}>
        <ContentHandler
          moduleId={moduleId}
          sectionId={sectionId}
          subsectionId={subsectionId}
        />
        {subsection.img &&
          subsection.img.map((img, idx) => (
            <img
              src={img}
              alt={`imagen-`}
              key={idx}
              style={{ maxWidth: "100px", margin: "10px" }}
              onClick={() => handleDeleteImage(moduleId, sectionId, idx)}
            />
          ))}
        {subsection.budget.map((budget, idBudget) => {
          return (
            <Budget
              moduleId={moduleId}
              sectionId={sectionId}
              idBudget={idBudget}
              budget={budget}
              key={idBudget}
            />
          );
        })}

        <TaskBar
          moduleId={moduleId}
          sectionId={sectionId}
          handle={handleChangeSubSection}
          deleteFunction={deleteSubSection}
          //ACA VA AGREGAR SUB SUB SECTION
          add={addSubSection}
        />
      </div>
    </>
  );
}
