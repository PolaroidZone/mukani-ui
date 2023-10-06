const SubPost = () => {
  return (
    <div className="recent-posts">
      <div className="recent-post">
        <div className="recent-blog-img">
          <img src="<%= article.thumbPath %>" alt="" />
        </div>
        <div className="recent-post-details">
          <div className="recent-blog-category">
            <ul>
              <li>category holder</li>
              <li>timestamp holder</li>
            </ul>
          </div>
          <div className="recent-blog-title">
            <div className="recent-blog-titleCon">
              <h1 className="heading-blog4">Title holder</h1>
            </div>
            <div className="recent-read-post">
              <div className="recent-read-button">
                <a href="articles/<%= article.id %>">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPost;
