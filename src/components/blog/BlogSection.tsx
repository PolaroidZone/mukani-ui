import React, { useEffect, useState } from "react";
import BlogHeader from "./BlogHeader";
import BigPost from "./Post";
import SubPost from "./SmallPost";
import { getArticles } from "../../services/endpoints";

interface articleType {
  category: string;
  thumbPath: string;
  message: string;
  title: string;
  timestamp: string;
  id: string;
}

const BlogSection = () => {
  const [articles, setArticles] = useState<articleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      const { articles } = await response.data;
      setArticles(articles);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchArticles();
    }
  }, [isLoading]);

  return (
    <section className="container" id="blog">
      <div className="blog-container">
        <BlogHeader />
        <div className="blog-posts">
          {articles.map((article, index) => {
            if (index === 0) {
              return (
                <BigPost
                  category={article.category}
                  thumbPath={article.thumbPath}
                  message={article.message}
                  title={article.title}
                  timestamp={article.timestamp}
                  id={article.id}
                />
              );
            }
          })}
          <SubPost articles={articles} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
