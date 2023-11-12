import { useEffect, useState } from "react";

interface Article {
  [key: string]: {
    Title: string;
    Category: string;
    Message: string;
    Timestamp: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("../Data/articles.json");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const latestArticleId = articlesArray[articlesArray.length - 1]?.id;
  
  return (
    <section className="container">
      <div className="blog-landing">
        <div className="blog-header-img">
          <img src="" alt="" />
        </div>
        <div className="blog-article-container">
          <div className="blog-article">
            <div className="article">
              <div className="article-header">
                <h1 className="article-title">How to code a dragon</h1>
              </div>
              <div className="article-body">
                This is the body of the article
              </div>
              <div className="article-footer">
                <div className="share-border-line">
                  <div></div>
                </div>
                <div className="share-links">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fas fa-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="share-border-line">
                  <div></div>
                </div>
              </div>
            </div>
            <div className="article-navigator">
              <div className="post-navigator">
                {latestArticleId === id ? (
                  <div className="post-nav-label">
                    <h1>All Caught Up</h1>
                  </div>
                ) : (
                  <a href={`/articles/${id}/next`}>
                    <div className="post-nav-label">
                      <h1>Next Article</h1>
                    </div>
                    <div className="post-nav-icon">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
