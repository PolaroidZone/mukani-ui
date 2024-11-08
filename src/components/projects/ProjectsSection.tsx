import React, { useState, useEffect } from "react";
import ProjectsHeader from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNav from "./ProjectsNav";
import { getProjects } from "../../services/endpoints";

interface ProjectTy {
  id: string;
  thumbPath: string;
  title: string;
  details: string;
  status: string;
  github: string;
}

const ProjectsSection = () => {
  const [isloading, setisloading] = useState(true);
  const [projects, setProjects] = useState<ProjectTy[]>([]);

  const rightProjects = projects.slice(2);

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
              github={project.github}
            />
          ))}
          {rightProjects.length === 0 && <ProjectsNav />}
        </div>
        {rightProjects.length !== 0 && (
          <div className="projects-row2">
            {rightProjects.map((project, index) => (
              <Project
                key={index}
                thumbPath={project.thumbPath}
                title={project.title}
                details={project.details}
                status={project.status}
                github={project.github}
              />
            ))}
            <ProjectsNav />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
