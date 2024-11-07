import React, { useState, useEffect } from "react";
import ProjectsHeader from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNav from "./ProjectsNav";
import { getProjects } from "../../services/endpoints";

interface ProjectData {
  // Define the structure of your project data
  id: string;
  // Add other properties as needed
}

const ProjectsSection = () => {
  const [isloading, setisloading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (isloading) {
      fetchData();
    }
  }, [isloading]);

  const fetchData = async () => {
    try {
      const res = await getProjects();
      console.log(res);
      const { projects } = res.data;
      setProjects(projects);
      setisloading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="projects" className="container">
      <div className="projects-con" id="project-con">
        <div className="projects-row">
          <ProjectsHeader />
          {projects.map((index, project) => (
            <Project
              thumbPath={""}
              title={""}
              details={""}
              status={""}
              key={index}
            />
          ))}
        </div>
        <div className="projects-row2">
          {projects.map((index, project) => (
            <Project
              thumbPath={""}
              title={""}
              details={""}
              status={""}
              key={index}
            />
          ))}
          <ProjectsNav />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
