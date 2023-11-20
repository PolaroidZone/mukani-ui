import ProjectsHeder from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNava from "./ProjectsNav";

interface Props {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
  }[];
}

const ProjectsSection = ({ project }: Props) => {

  return (
    <section id="projects" className="container">
      <div className="projects-con" id="project-con">
        <div className="projects-row">
          <ProjectsHeder />
          <Project />
        </div>
        <div className="projects-row2">
          <Project />
          <ProjectsNava />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
