import "./ExploreContainer.css";
import { Project } from "./NewProject/Project";
import { PdfView } from "./Pdf/PdfView";

interface ContainerProps {
  name: string;
  view: boolean;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, view }) => {
  return <div id="container">{view ? <PdfView /> : <Project />}</div>;
};

export default ExploreContainer;
