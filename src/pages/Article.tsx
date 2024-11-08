import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import "../styles/Articles.css";

import { getNextArticle, getArticleById } from "../services/endpoints";

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

interface NextArticle {
  id: string;
}

const Articles = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isnextArticle, setIsNextArticle] = useState(false);
  const [nextID, setNextID] = useState<NextArticle | null>(null);

  const { id } = useParams();

  const fetchArticles = async () => {
    try {
      const response = await getArticleById(id);

      if (response === 404) {
        setIsNextArticle(false);
        return;
      }

      const { article } = response.data;
      setArticle(article);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const nextArticle = async () => {
    try {
      const response = await getNextArticle(id);

      if (response === 404) {
        setIsNextArticle(false);
        return;
      }

      const { nextArticle } = response.data;
      setNextID(nextArticle);
      setIsNextArticle(true);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchArticles();
    }
  }, [isLoading]);

  useEffect(() => {
    if (article) {
      nextArticle();
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
                {!isnextArticle ? (
                  <div className="post-nav-label">
                    <h1>All Caught Up</h1>
                  </div>
                ) : (
                  <a href={`/articles/${nextID}`}>
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
