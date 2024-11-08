interface ProjectProps {
  thumbPath: string;
  title: string;
  details: string;
  status: string;
  github: string;
}

const Project = (project: ProjectProps) => {
  return (
    <div className="project">
      <div className="project-img">
        <img src={project.thumbPath} alt="" />
      </div>
      <div className="project-details">
        <div className="project-name">
          <h1>{project.title}</h1>
        </div>
        <div className="project-detail">
          <h1 className="project-subt">Details</h1>
          <p>{project.details}</p>
        </div>
        <div className="project-status">
          <h1 className="project-subt">Status</h1>
          <p>{project.status}</p>
        </div>
        <div className="project-go">
          <div className="go-button">
            <h1>VIEW PROJECT</h1>
            <a href={project.github}>
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
