import { addCircle, closeCircle } from "ionicons/icons";
import { IonButton, IonIcon, IonInput, IonTextarea } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext } from "react";

export function ContentHandler({
  moduleId,
  firstSectionId,
  sectionId,
  contentId,
}) {
  const {
    handleChangeSection,
    project,
    addContent,
    handleChangeSubSection,
    deleteContent,
    setProject,
    handleChangeContent
  } = useContext(ProjectContext);

  const content =
    project[1].modules[moduleId].sections[firstSectionId].sections[sectionId]
      .content;



  return (
    <>
      {content.map((content, contentId) => (
        <div key={contentId} style={{ background: "#f6d5a8" }}>
          <div style={{ display: "flex" }}>
            <IonInput
              label="Title"
              labelPlacement="floating"
              fill="outline"
              rows={10}
              value={content.title}
              onIonChange={(e) =>
                handleChangeContent(
                  e,
                  moduleId,
                  sectionId,
                  firstSectionId,
                  contentId,
                  "title"
                )
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
              handleChangeContent(
                e,
                moduleId,
                sectionId,
                firstSectionId,
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
