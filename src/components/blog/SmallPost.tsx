import Small from "./Small";

interface articlesType {
  articles: Array<Object>;
}

const SubPost = (articles: articlesType) => {
  return (
    <div className="recent-posts">
      {articles.articles.map((article: any, index: number) => {
        if (index > 0 && index < 4) {
          return (
            <Small
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
    </div>
  );
};

export default SubPost;
