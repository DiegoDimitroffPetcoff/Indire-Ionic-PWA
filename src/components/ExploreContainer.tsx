import React, { Suspense, lazy } from "react";
import "./ExploreContainer.css";

// Usando lazy loading para cargar los componentes sólo cuando se necesiten
const Project = lazy(() => import("./NewProject/Project"));
const PdfView = lazy(() => import("./Pdf/PdfView"));

interface ContainerProps {
  name: string;
  view: boolean;
}

const ExploreContainer: React.FC<ContainerProps> = ({ view }) => {
  return (
    <div id="container">
      <Suspense fallback={<div>Carregando...</div>}>
        {view ? <PdfView /> : <Project />}
      </Suspense>
    </div>
  );
};

export default ExploreContainer;
