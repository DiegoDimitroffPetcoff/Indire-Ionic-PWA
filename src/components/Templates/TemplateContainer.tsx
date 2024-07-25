import "./ExploreContainer.css";
import { Project } from "../NewProject/Project";
import { PdfView } from "../Pdf/PdfView";
import { TemplatesForm } from "./TemplatesForm";

interface ContainerProps {
  name: string;
  view: boolean;
}

const ExploreContainer: React.FC<ContainerProps> = ({  view }) => {
  return <TemplatesForm></TemplatesForm>;
};

export default ExploreContainer;
