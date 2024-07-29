import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import "../Project.css";
import {
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from "@ionic/react";
export function Introduction() {
  const { project, handleChangeIntroduction } = useContext(ProjectContext);
  const projectContent = project[0].introduction || [];

  return (
    <div className="introductionContent">
      <IonInput
        label="Title"
        labelPlacement="floating"
        value={projectContent.title}
        onIonChange={(e) => handleChangeIntroduction(e, "title")}
      />
      <IonInput
        value={projectContent.sub_title}
        label="Subtitle"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "sub_title")}
      />
      <IonInput
        type="number"
        value={projectContent.version}
        label="Version"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "version")}
      />

      <IonInput
        value={projectContent.address}
        label="Adress"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "address")}
      />
      <IonInput
        type="number"
        value={projectContent.project_number}
        label="Project Number"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "project_number")}
      />

      <IonInput
        type="file"
        alt="Main Image on Project"
        accept="image/*"
        label="Image"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "main_img_url")}
      />

      <IonModal keepContentsMounted={true}>
        <IonDatetime
          id="datetime"
          onIonChange={(e) => handleChangeIntroduction(e, "date")}
        ></IonDatetime>
      </IonModal>
      <IonDatetimeButton datetime="datetime">
        <IonDatetime
          value={projectContent.date}
          onIonChange={(e) => handleChangeIntroduction(e, "date")}
        />
      </IonDatetimeButton>
      {projectContent.main_img_url !== "" && (
        <img
          src={projectContent.main_img_url}
          alt="Vista previa"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
}
