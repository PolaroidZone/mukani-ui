import React, { useState, useEffect } from "react";
import ProjectsHeader from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNav from "./ProjectsNav";
import { getProjects } from "../../services/endpoints";

interface ProjectTy {
  // Define the structure of your project data
  id: string;
  thumbPath: string;
  title: string;
  details: string;
  status: string;
  // Add other properties as needed
}

const ProjectsSection = () => {
  const [isloading, setisloading] = useState(true);
  const [projects, setProjects] = useState<ProjectTy[]>([]);

  const fetchData = async () => {
    try {
      const res = await getProjects();
      const { projects } = res.data;
      setProjects(projects);
      setisloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isloading) {
      fetchData();
    }
  }, [isloading]);

  return (
    <section id="projects" className="container">
      <div className="projects-con" id="project-con">
        <div className="projects-row">
          <ProjectsHeader />
          {projects.map((project, index) => (
            <Project
              key={index}
              thumbPath={project.thumbPath}
              title={project.title}
              details={project.details}
              status={project.status}
            />
          ))}
        </div>
        <div className="projects-row2">
          {projects.slice(2).map((project, index) => (
            <Project
              key={index}
              thumbPath={project.thumbPath}
              title={project.title}
              details={project.details}
              status={project.status}
            />
          ))}
          <ProjectsNav />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
