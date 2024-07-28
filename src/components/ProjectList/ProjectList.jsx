import { IonCol, IonGrid, IonRow, IonContent, IonItem } from "@ionic/react";
import { useContext, useState } from "react";
import ModuleTemplates from "../../templates/moduleTemplate.json";
import SubsectionTemplates from "../../templates/subsectionTemplate.json";
import "./ProjectList.css";

import { ProjectContext } from "../../context/ProjectContext";
export function ProjectList() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModule, setIsModule] = useState(false);
  const [isSubsection, setIsSubsection] = useState(false);
  const { projectList } = useContext(ProjectContext);

  function handleInputName(e) {
    const value = e.target.value;
    setName(value);
  }
  function handleInputTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleInputDescription(e) {
    const value = e.target.value;
    setDescription(value);
  }
  function handleCheck(e, setType) {
    const checked = e.detail.checked;
    setType(checked);
  }
  function handleSubmite(e) {
    e.preventDefault();

    if (!name || !title || !description) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (!isModule && !isSubsection) {
      alert("Debes seleccionar al menos un checkbox.");
      return;
    }
    const updateTemplate = {
      name,
      content: [{ title: title, description: description }],
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
    alert(templateMessage);

    setName("");
    setDescription("");
    setTitle("");
  }
   const DateMaker = () => {
    var fechaActual = new Date();
    var año = fechaActual.getFullYear();
    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    let date = `${dia}-${mes + 1}-${año}`;
    return date;
  };
  return (
    <IonContent>
      <IonGrid className="table-grid">
        {/* Caption */}
        <IonRow className="table-caption">
          <IonCol size="10">Project List</IonCol>
        </IonRow>

        {/* Table Header */}
        <IonRow className="table-header">
          <IonCol size="3" className="table-header-cell">
            Título
          </IonCol>
          <IonCol size="3" className="table-header-cell">
            Endereço
          </IonCol>

          <IonCol size="2" className="table-header-cell">
            Data
          </IonCol>
          <IonCol size="2" className="table-header-cell">
            Relatorio
          </IonCol>
          <IonCol size="2" className="table-header-cell"></IonCol>
        </IonRow>

        {/* Table Body */}

        {projectList.map((project, idProject) => {
          if (project[0].introduction) {
            const {
              title,
              sub_title,
              main_img_url,
              address,
              project_number,
              date,
              version,
            } = project[0].introduction;

            return (
              <IonRow key={idProject} className="table-row">
                <IonCol size="3" className="table-cell">
                  {title}
                </IonCol>
                <IonCol size="3" className="table-cell">
                  {address}
                </IonCol>
                <IonCol size="2" className="table-cell">
                  {date}
                </IonCol>
                <IonCol size="2" className="table-cell">
                  {date + title + project_number}
                </IonCol>
                <IonCol size="1" className="table-cell">
                  <button>Open</button>
                </IonCol>
                <IonCol size="1" className="table-cell">
                  <button>X</button>
                </IonCol>
              </IonRow>
            );
          }
        })}

        {/* Table Footer */}
        <IonRow className="table-footer">
          <IonCol size="8" className="table-footer-cell">
            Total Project
          </IonCol>
          <IonCol size="4" className="table-footer-cell">
            {projectList.length}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}
