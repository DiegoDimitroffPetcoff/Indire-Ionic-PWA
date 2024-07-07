import { addCircle, closeCircle } from "ionicons/icons";
import { IonButton, IonIcon, IonInput, IonTextarea } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext } from "react";

export function ContentHandler({ moduleId, sectionId, subsectionId }) {
  const {
    handleChangeSection,
    project,
    addContent,
    handleChangeSubSection,
    deleteContent,
  } = useContext(ProjectContext);

  // Using the ternary operator to assign 'section' and 'handleChange' based on the existence of 'subsectionId'.
  // This improves code readability and avoids repetitive logic.
  // 'const' is used instead of 'let' to prevent accidental reassignment of these variables,
  // making the code safer and easier to maintain.
  const section = subsectionId
    ? project[1].modules[moduleId].sections[sectionId].sections[subsectionId]
    : project[1].modules[moduleId].sections[sectionId];

  const handleChange = subsectionId
    ? handleChangeSubSection
    : handleChangeSection;

  return (
    <>
      {section.content.map((content, contentId) => (
        <div key={contentId} style={{ background: "#f6d5a8" }}>
          <div style={{ display: "flex" }}>
            <IonInput
              label="Title"
              labelPlacement="floating"
              fill="outline"
              rows={10}
              value={content.title}
              onIonChange={(e) =>
                handleChange(e, moduleId, sectionId, contentId, "title")
              }
            />
            <IonButton
              color="danger"
              onClick={() => deleteContent(moduleId, sectionId, contentId)}
            >
              <IonIcon ios={closeCircle} md={closeCircle}></IonIcon>
              {/*   Delete */}
            </IonButton>
          </div>
          <IonTextarea
            label="Descripcion"
            labelPlacement="floating"
            fill="outline"
            rows={5}
            value={content.description}
            onIonChange={(e) =>
              handleChangeSection(
                e,
                moduleId,
                sectionId,
                contentId,
                "description"
              )
            }
          />
        </div>
      ))}
 
    </>
  );
}
