import ProjectsHeder from "./ProjectsHeader";
import Project from "./Project";
import ProjectsNava from "./ProjectsNav";

const ProjectsSection = () => {
  const projects = {
    projects: [
      {
        thumbPath: "assets/img/1.jpg",
        title: "The first project",
        details: "Hello project details",
        status: "development",
      },
      {
        thumbPath: "assets/img/2.jpg",
        title: "The second project",
        details: "Hello project details",
        status: "development",
      },
      {
        thumbPath: "assets/img/3.jpg",
        title: "The third project",
        details: "Hello project details",
        status: "development",
      },
      {
        thumbPath: "assets/img/4.jpg",
        title: "The fourth project",
        details: "Hello project details",
        status: "development",
      },
      {
        thumbPath: "assets/img/5.jpg",
        title: "Title holder",
        details: "detial holder",
        status: "status holder",
      },
      {
        thumbPath: "assets/img/6.jpg",
        title: "Title holder",
        details: "detial holder",
        status: "status holder",
      },
    ],
  };

  return (
    <section id="projects" className="container">
      <div className="projects-con" id="project-con">
        <div className="projects-row">
          <ProjectsHeder />
          {/*Only display the first two projects */}
          {projects.projects.slice(0, 2).map((project) => (
            <Project {...project} />
          ))}
        </div>
        <div className="projects-row2">
          {/*Only display the two after the first two */}
          {projects.projects.slice(2, 4).map((project) => (
            <Project {...project} />
          ))}
          <ProjectsNava />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
