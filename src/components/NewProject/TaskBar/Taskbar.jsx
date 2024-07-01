import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import { IonInput, IonButton } from "@ionic/react";
import { Section } from "../Section";

export function TaskBar({ moduleId, sectionId }) {
  const { handleChangeModules, addSection, delenteSection, project } =
    useContext(ProjectContext);

  return (
    <>
      {" "}
      <h1>Barra de tareas</h1>
      <div className="tools">
        <p>IMAGENES</p>
        <IonInput
          label="Budget"
          labelPlacement="floating"
          fill="outline"
          rows={10}
          value={""}
          onIonChange={(e) => handleChangeModules(e, sectionId, "description")}
        />
        {/*        {section.sections.map((section, id) => {
          return <Section section={section} id={id} key={id} />;
        })} */}

        <IonButton
          color="danger"
          onClick={() => delenteSection(moduleId, sectionId)}
          expand="full"
        >
          Delete Section
        </IonButton>
        <IonButton
          color="secondary"
          onClick={() => addSection(moduleId, sectionId)}
          expand="full"
        >
          Add Sub Section
        </IonButton>
      </div>
    </>
  );
}
