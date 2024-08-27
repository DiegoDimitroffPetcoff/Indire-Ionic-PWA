import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import "../Project.css";
import {
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { folder } from "ionicons/icons";
import { IonItem, IonIcon } from "@ionic/react";

export function Introduction() {
  const {
    project,
    handleChangeIntroduction,
    selectedFolder,
    setSelectedFolder,
  } = useContext(ProjectContext);

  const projectContent = project[0].introduction || [];
  const { id } = project[0] && project[0];
  const handleSelectChange = (event) => {
    const value = event.detail.value;
    setSelectedFolder(value);
  };
  return (
    <div className="introductionContent">
      <IonInput
        label="Title"
        labelPlacement="floating"
        value={projectContent.title}
        onIonChange={(e) => handleChangeIntroduction(e, "title", id)}
      />
      <IonInput
        value={projectContent.sub_title}
        label="Subtitle"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "sub_title", id)}
      />
      <IonInput
        type="number"
        value={projectContent.version}
        label="Version"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "version", id)}
      />

      <IonInput
        value={projectContent.address}
        label="Adress"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "address", id)}
      />
      <IonInput
        type="number"
        value={projectContent.project_number}
        label="Project Number"
        labelPlacement="floating"
        onIonChange={(e) => handleChangeIntroduction(e, "project_number", id)}
      />
      <IonList>
        <IonItem>
          <IonIcon ios={folder} md={folder}></IonIcon>
          <IonSelect
            aria-label="Fruit"
            placeholder={selectedFolder}
            multiple={false}
            onIonChange={handleSelectChange}
            value={selectedFolder} // Mantener el valor actual seleccionado
          >
            <IonSelectOption value="Edificios">Edificios</IonSelectOption>
            <IonSelectOption value="Granjas">Granjas</IonSelectOption>
            <IonSelectOption value="Parkes">Parkes</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>

      <input
        type="file"
        alt="Main Image on Project"
        accept="image/*"
        label="Image"
        onChange={(e) => handleChangeIntroduction(e, "main_img_url", id)}
      />

      <IonModal keepContentsMounted={true}>
        <IonDatetime
          presentation="date"
          id="datetime"
          onIonChange={(e) => handleChangeIntroduction(e, "date", id)}
        ></IonDatetime>
      </IonModal>
      <IonDatetimeButton datetime="datetime">
        <IonDatetime
          value={projectContent.date}
          onIonChange={(e) => handleChangeIntroduction(e, "date", id)}
        />
      </IonDatetimeButton>
      {projectContent.main_img_url && (
        <img
          src={projectContent.main_img_url}
          alt="Vista previa"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
}
