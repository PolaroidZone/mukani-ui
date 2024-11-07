import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import "../styles/Articles.css";

import { getArticleById } from "../services/endpoints";

interface Article {
  thumbPath: string;
  title: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  message: string;
  category: string;
  id: string;
}

const Articles = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isnextArticle, setIsNextArticle] = useState(false);

  const { id } = useParams();

  const fetchArticles = async () => {
    try {
      const response = await getArticleById(id);
      const { article } = response.data;
      setArticle(article);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const getNextArticle = async () => {};

  useEffect(() => {
    if (isLoading) {
      fetchArticles();
    }
  }, [isLoading]);

  useEffect(() => {
    if (article) {
    }
  }, [article]);

  return (
    <section className="container">
      <div className="blog-landing">
        <div className="blog-header-img">
          <img src={article?.thumbPath} alt="" />
        </div>
        <div className="blog-article-container">
          <div className="blog-article">
            <div className="article">
              <div className="article-header">
                <h1 className="article-title">
                  {isLoading ? "Loading..." : article?.title}
                </h1>
              </div>
              <div className="article-body">
                <Markdown>{article?.message}</Markdown>
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
                {isnextArticle ? (
                  <div className="post-nav-label">
                    <h1>All Caught Up</h1>
                  </div>
                ) : (
                  <a href="">
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
