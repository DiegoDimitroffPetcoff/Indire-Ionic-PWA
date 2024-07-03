import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import "../Project.css";
import { IonInput} from "@ionic/react";
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
        type="file"
        alt="Main Image on Project"
        accept="image/*"
        label="Image"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "main_img_url")}
      />
      <img
        src={projectContent.main_img_url}
        alt="Vista previa"
        style={{ maxWidth: "100%", height: "auto" }}
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
        type="date"
        value={projectContent.date}
        label="Date"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "date")}
      />
      <IonInput
        type="number"
        value={projectContent.version}
        label="Version"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "version")}
      />
    </div>
  );
}
