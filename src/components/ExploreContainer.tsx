import "./ExploreContainer.css";
import { Project } from "./Project";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <Project />
    </div>
  );
};

export default ExploreContainer;
