import { IonCol, IonRow, IonButton, IonIcon } from "@ionic/react";
import { saveOutline } from "ionicons/icons";

export const LocalsProjectMapper = ({ projectsToMapp, postToLocalStorage }) => {
  if (!projectsToMapp) {
    return "Carregando..";
  }
  return (
    <IonRow className="table-caption">
      <IonCol size="12">
        Há {projectsToMapp.length} projeto(s) na base de dados que não foram
        encontrados no seu armazenamento local.
      </IonCol>

      {projectsToMapp.map((project, id) => {
        const { date, title, project_number } = project[0].introduction;

        return (
          <IonRow className="table-footer" key={id}>
            <IonCol sizeMd="4" className="table-footer-cell">
              {title}
            </IonCol>
            <IonCol sizeMd="4" className="table-footer-cell">
              {`${date}_${title}_${project_number}`}
            </IonCol>
            <IonCol sizeMd="4" className="table-footer-cell">
              <IonButton
                color={"success"}
                onClick={() => postToLocalStorage(project)}
              >
                <IonIcon
                  ios={saveOutline}
                  md={saveOutline}
                  onClick={() => postToLocalStorage(project)}
                />
              </IonButton>
            </IonCol>
          </IonRow>
        );
      })}
    </IonRow>
  );
};
