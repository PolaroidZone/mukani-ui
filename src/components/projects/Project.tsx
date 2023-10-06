const Project = () => {
  return (
    <div className="project">
      <div className="project-img">
        <img src="<%= project.thumbPath %>" alt="" />
      </div>
      <div className="project-details">
        <div className="project-name">
          <h1>Title holder</h1>
        </div>
        <div className="project-detail">
          <h1 className="project-subt">Details</h1>
          <p>detial holder</p>
        </div>
        <div className="project-status">
          <h1 className="project-subt">Status</h1>
          <p>status holder</p>
        </div>
        <div className="project-go">
          <div className="go-button">
            <h1>VIEW PROJECT</h1>
              <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
