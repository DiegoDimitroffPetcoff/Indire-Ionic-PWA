import "./ExploreContainer.css";
import { Project } from "./NewProject/Project";
import { PdfView } from "./Pdf/PdfView";

interface ContainerProps {
  name: string;
  project: string;
  view: boolean;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, view }) => {
  return (
    <div id="container">
      <strong>{name}</strong>

      {view ? <PdfView /> : <Project />}
    </div>
  );
};

export default ExploreContainer;
