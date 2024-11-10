interface projectProps {
  id: string;
  thumbPath: string;
  title: string;
  details: string;
  status: string;
  github: string;
}

export default function TabProject(project: projectProps) {
  return (
    <div className="my-project">
      <div className="my-project-img">
        <img src={project.thumbPath} alt="" />
      </div>
      <div className="my-project-details">
        <div className="my-project-name">
          <h1>{project.title}</h1>
        </div>
        <div className="my-project-detail">
          <h1 className="my-project-subt">Detail</h1>
          <p>{project.details}</p>
        </div>
        <div className="my-project-status">
          <h1 className="my-project-subt">Status</h1>
          <p>{project.status}</p>
        </div>
        <div className="my-project-go">
          <div className="my-go-button">
            <h1>VIEW PROJECT</h1>
            <a href={project.github} rel="noopener noreferrer">
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
