import "./ExploreContainer.css";
import { Project } from "./NewProject/Project";

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
