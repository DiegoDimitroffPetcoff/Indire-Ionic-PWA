import ModuleTemplates from "../../templates/moduleTemplate.json";
import SubsectionTemplates from "../../templates/subsectionTemplate.json";

export function validations(e, name, content, isModule, isSubsection, setContent, setName, setDescription, setTitle) {
  e.preventDefault();
  
  if (!name) {
    alert("O template não tem título");
    return;
  }
  
  if (content.length <= 0) {
    alert("O template não tem conteúdo");
    return;
  }
  
  if (!isModule && !isSubsection) {
    alert("Você deve selecionar pelo menos uma caixa de seleção.");
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
  
  let templateMessage = "O template foi salvo com sucesso em ";
  
  if (isModule) {
    templateMessage += "Módulos";
  }
  
  if (isSubsection) {
    if (isModule) {
      templateMessage += " e ";
    }
    templateMessage += "Subseção";
  }
  
  setContent([]);
  setName("");
  setDescription("");
  setTitle("");
  
  return templateMessage;
}
