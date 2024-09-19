import { IonCol, IonRow, IonButton } from "@ionic/react";

export const LocalsProjectMapper = ({ projectsToMapp, postToLocalStorage }) => {
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
            <IonCol sizeMd="4" sizeXs="6" className="table-footer-cell">
              {project.title}
            </IonCol>
            <IonCol sizeMd="4" sizeXs="6" className="table-footer-cell">
              {`${date}_${title}_${project_number}`}
            </IonCol>
            <IonCol sizeMd="4" sizeXs="6" className="table-footer-cell">
              <IonButton
                color={"success"}
                onClick={() => postToLocalStorage(project)}
              >
                Guardar en DBS
              </IonButton>
            </IonCol>
          </IonRow>
        );
      })}
    </IonRow>
  );
};
