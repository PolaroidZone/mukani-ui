import ProjectsHeder from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNava from "./ProjectsNav";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container" >
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
