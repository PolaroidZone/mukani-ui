interface articleType {
  category: string;
  thumbPath: string;
  message: string;
  title: string;
  timestamp: string;
  id: string;
}

const BigPost = (articleType: articleType) => {
  return (
    <div className="main-post">
      <div className="blog-img">
        <a href={`articles/${articleType.id}`}>
          <img src={articleType.thumbPath} alt="" />
          {/* <%= article.thumbPath %> */}
        </a>
      </div>
      <div className="main-post-details">
        <div className="blog-category">
          <ul>
            <li>{articleType.category}</li>
            <li>{articleType.timestamp}</li>
          </ul>
        </div>
        <div className="blog-title">
          <a href={`articles/${articleType.id}`}>
            <h1 className="heading-4">{articleType.title}</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BigPost;
