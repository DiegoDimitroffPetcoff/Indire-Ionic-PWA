import ModuleTemplates from "../../templates/moduleTemplate.json";
import SubsectionTemplates from "../../templates/subsectionTemplate.json";
export function validations(e,
  name,
  content,
  isModule,
  isSubsection,
  setContent,
  setName,
  setDescription,
  setTitle
) {
  e.preventDefault();
  if (!name) {
    alert("El template no tiene titulo");
    return;
  }
  if (content.length <= 0) {
    alert("El template no tiene contenido");
    return;
  }
  if (!isModule && !isSubsection) {
    alert("Debes seleccionar al menos un checkbox.");
    return;
  }
  const updateTemplate = {
    name,
    content,
  };
  if (isModule) {
    ModuleTemplates.push(updateTemplate);
  }
  if (isSubsection) {
    SubsectionTemplates.push(updateTemplate);
  }
  let templateMessage = "Se ha guardado correctamente el Template en ";
  if (isModule) {
    templateMessage += "Módulos";
  }
  if (isSubsection) {
    if (isModule) {
      templateMessage += " y ";
    }
    templateMessage += "SubSección";
  }
  setContent([])
  setName("");
  setDescription("");
  setTitle("");
  return templateMessage;
}
