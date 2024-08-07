import {
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonButtons,
  IonToolbar,
} from "@ionic/react";
export function ContentList({ content, deleteItem }) {
  return (
    <>
      {" "}
      {content && content.length > 0 && (
        <div style={{ border: "black 1px solid", margin: "10px" }}>
          {content &&
            content.length > 0 &&
            content.map((content, id) => {
              return (
                <IonToolbar>
                  <IonButtons slot="end">
                    <IonButton color={"danger"} onClick={() => deleteItem(id)}>
                      X
                    </IonButton>
                  </IonButtons>
                  <IonList lines="inset" key={id}>
                    <IonItem>
                      {id + 1}-
                      <IonLabel>
                        <h1>{content.title}</h1>
                      </IonLabel>
                    </IonItem>

                    <IonItem>
                      <IonLabel>{content.description}</IonLabel>
                    </IonItem>
                  </IonList>
                </IonToolbar>
              );
            })}
        </div>
      )}
    </>
  );
}
