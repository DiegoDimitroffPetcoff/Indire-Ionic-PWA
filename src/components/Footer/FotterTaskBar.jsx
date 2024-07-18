import {
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import {
  copyOutline,
  clipboardOutline,
  documentOutline,
  saveOutline,
  cloudCircle,
} from "ionicons/icons";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { pdf, Document, Page } from "@react-pdf/renderer";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";
import { MyDocument } from "../Pdf/PdfView";
import PostOneDrive from "../../services/PostOneDrive";

export function FotterTaskBar({ setView, view }) {
  const { project } = useContext(ProjectContext);
  const { title } = project[0].introduction;
  const handleSaveToOneDrive = async () => {
    try {
      const blob = await pdf(<MyDocument data={project} />).toBlob();
      await PostOneDrive(blob, title);
    } catch (error) {
      setError(error);
      console.error("Failed to upload to OneDrive", error);
    }
  };
  return (
    <IonFooter>
      <IonGrid>
        <PDFDownloadLink
          size="6"
          size-md="4"
          size-lg="2"
          document={<MyDocument data={project} />}
          fileName={title + ".pdf"}
        >
          {({ blob, url, loading, error }) => (
            <>
              <IonButton
                fill="outline"
                disabled={loading}
                onClick={() => PostOneDrive(blob)}
              >
                <IonIcon slot="end" icon={saveOutline}></IonIcon>
                {loading
                  ? "Loading..."
                  : error
                  ? `Error: ${error.message}`
                  : "Save"}
              </IonButton>
              {error && (
                <p style={{ color: "red" }}>
                  Failed to generate PDF: {error.message}
                </p>
              )}
            </>
          )}
        </PDFDownloadLink>

        <IonCol size="6" size-md="4" size-lg="2">
          {" "}
          <IonButton fill="outline" onClick={handleSaveToOneDrive}>
            <IonIcon slot="end" icon={cloudCircle}></IonIcon>
            OnDrive
          </IonButton>
        </IonCol>
        <IonCol size="6" size-md="4" size-lg="2">
          {" "}
          <IonButton fill="outline">
            <IonIcon slot="end" icon={copyOutline}></IonIcon>
            Template
          </IonButton>
        </IonCol>
        <IonCol size="6" size-md="4" size-lg="2">
          {" "}
          <IonButton fill="outline">
            <IonIcon slot="end" icon={documentOutline}></IonIcon>
            Word
          </IonButton>
        </IonCol>
        <IonCol size="6" size-md="4" size-lg="2">
          {" "}
          <IonButton fill="outline">
            <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
            PDF
          </IonButton>
        </IonCol>
        <IonCol>
          {" "}
          <IonButton fill="outline">
            <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
            PROJECT
          </IonButton>
        </IonCol>
      </IonGrid>
    </IonFooter>
  );
}

{
  /*        <IonCol>
              <IonButtons slot="start">
                <PDFDownloadLink
                  document={<MyDocument data={project} />}
                  fileName={title + ".pdf"}
                >
                  {({ blob, url, loading, error }) => (
                    <>
                      <IonButton
                        fill="outline"
                        disabled={loading}
                        onClick={() => PostOneDrive(blob)}
                      >
                        <IonIcon slot="end" icon={saveOutline}></IonIcon>
                        {loading
                          ? "Loading..."
                          : error
                          ? `Error: ${error.message}`
                          : "Save"}
                      </IonButton>
                      {error && (
                        <p style={{ color: "red" }}>
                          Failed to generate PDF: {error.message}
                        </p>
                      )}
                    </>
                  )}
                </PDFDownloadLink>
              </IonButtons>
            </IonCol> 
            <IonButtons slot="start">
              <IonButton fill="outline" onClick={handleSaveToOneDrive}>
                <IonIcon slot="end" icon={cloudCircle}></IonIcon>
                OnDrive
              </IonButton>
            </IonButtons>

            <IonButtons slot="start">
              <IonButton fill="outline">
                <IonIcon slot="end" icon={copyOutline}></IonIcon>
                Template
              </IonButton>
            </IonButtons>

            <IonButtons slot="start">
              <IonButton fill="outline">
                <IonIcon slot="end" icon={documentOutline}></IonIcon>
                Word
              </IonButton>
            </IonButtons>
            <IonButtons slot="start" onClick={() => setView(!view)}>
              <IonButton fill="outline">
                <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
                PDF
              </IonButton>
            </IonButtons>
            <IonButtons slot="start" onClick={() => setView(!view)}>
              <IonButton fill="outline">
                <IonIcon slot="end" icon={clipboardOutline}></IonIcon>
                PROJECT
              </IonButton>
            </IonButtons>*/
}
