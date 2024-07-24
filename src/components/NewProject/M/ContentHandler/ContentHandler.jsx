import { closeCircle } from "ionicons/icons";
import { IonButton, IonIcon, IonInput, IonTextarea } from "@ionic/react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext } from "react";

export function ContentHandler({
  description,
  moduleId,
  firstSectionId,
  sectionId,
  sectionId2,
}) {
  const { project, deleteContent, handleChangeContent } =
    useContext(ProjectContext);
  //Analyze Content of the section that is going to be painted in the component
  let content =
    project[1].modules[moduleId].sections[firstSectionId].sections[sectionId]
      .content;
  if (description === "subsection2") {
    content =
      project[1].modules[moduleId].sections[firstSectionId].sections[sectionId]
        .sections[sectionId2].content;
  }

  return (
    <div style={{width:"100%"}}>
      {content.map((content, contentId) => (
        <div key={contentId} >
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
                  description,
                  "title",
                  contentId,
                  moduleId,
                  firstSectionId,
                  sectionId,
                  sectionId2
                )
              }
            />
            <IonButton
              color="danger"
              onClick={() =>
                deleteContent(
                  description,
                  contentId,
                  moduleId,
                  firstSectionId,
                  sectionId,
                  sectionId2
                )
              }
            >
              <IonIcon ios={closeCircle} md={closeCircle}></IonIcon>
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
                description,
                "description",
                contentId,
                moduleId,
                firstSectionId,
                sectionId,
                sectionId2
              )
            }
          />
        </div>
      ))}
    </div>
  );
}
