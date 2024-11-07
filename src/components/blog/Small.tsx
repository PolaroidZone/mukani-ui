import React from "react";

interface articleType {
  category: string;
  thumbPath: string;
  message: string;
  title: string;
  timestamp: string;
  id: string;
}

export default function Small(article: articleType) {
  return (
    <div className="recent-post">
      <div className="recent-blog-img">
        <img src={article.thumbPath} alt="" />
      </div>
      <div className="recent-post-details">
        <div className="recent-blog-category">
          <ul>
            <li>{article.category}</li>
            <li>{article.timestamp}</li>
          </ul>
        </div>
        <div className="recent-blog-title">
          <div className="recent-blog-titleCon">
            <h1 className="heading-blog4">{article.title}</h1>
          </div>
          <div className="recent-read-post">
            <div className="recent-read-button">
              <a href={`/articles/${article.id}`}>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
