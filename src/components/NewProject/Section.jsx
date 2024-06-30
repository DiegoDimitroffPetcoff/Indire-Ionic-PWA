import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { IonInput, IonTextarea, IonButton } from "@ionic/react";
export function Section({ section, moduleId, sectionId }) {
  const { handleChangeModules, addSection, delenteSection } =
    useContext(ProjectContext);

  return (
    <>
      <div style={{ background: "#f6d5a8", margin: "10px" }}>
        <IonInput
          label="Title"
          labelPlacement="floating"
          fill="outline"
          rows={10}
          value={section.content[sectionId]?.title}
          onIonChange={(e) => handleChangeModules(e, sectionId, "description")}
        />
        <IonTextarea
          label="Descripcion"
          labelPlacement="floating"
          fill="outline"
          rows={5}
          value={section.content[sectionId]?.title}
          onIonChange={(e) => handleChangeModules(e, sectionId, "description")}
        />
        <h1>Barra de tareas</h1>
        <div className="tools">
          <p>IMAGENES</p>
          <IonInput
            label="Budget"
            labelPlacement="floating"
            fill="outline"
            rows={10}
            value={section.content[sectionId]?.title}
            onIonChange={(e) =>
              handleChangeModules(e, sectionId, "description")
            }
          />
          {section.sections.map((section, id) => {
            return <Section section={section} id={id} key={id} />;
          })}

          <IonButton
            color="danger"
            onClick={() => delenteSection(moduleId, sectionId)}
            expand="full"
          >
            Delete Section
          </IonButton>
          <IonButton
            color="secondary"
            onClick={() => addSection(sectionId)}
            expand="full"
          >
            Add Sub Section
          </IonButton>
        </div>
      </div>
    </>
  );
}
