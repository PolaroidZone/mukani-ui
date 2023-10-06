const BigPost = () => {
  return (
    <div className="main-post">
      <div className="blog-img">
        <a href="articles/<%= article.id %>">
          <img src="<%= article.thumbPath %>" alt="" />
        </a>
      </div>
      <div className="main-post-details">
        <div className="blog-category">
          <ul>
            <li>Category holder</li>
            <li>Timestamp holder</li>
          </ul>
        </div>
        <div className="blog-title">
          <a href="articles/<%= article.id %>">
            <h1 className="heading-4">Title holder</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigPost;
