import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNav from "./ProjectsNav";

interface ProjectData {
  // Define the structure of your project data
  id: string;
  // Add other properties as needed
}

interface ProjectsSectionProps {
  projects: ProjectData[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  console.log(projects)
  return (
    <section id="projects" className="container">
      <div className="projects-con" id="project-con">
        <div className="projects-row">
          <ProjectsHeader />
          {projects.map((project) => (
            <Project thumbPath={""} title={""} details={""} status={""} key={project.id} {...project} />
          ))}
        </div>
        <div className="projects-row2">
          {projects.map((project) => (
            <Project thumbPath={""} title={""} details={""} status={""} key={project.id} {...project} />
          ))}
          <ProjectsNav />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
