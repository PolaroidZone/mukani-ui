import "../styles/post.css"

const Articles = () => {
  return (<section className="container">
    <div className="blog-landing">
        <div className="blog-header-img">
            <img src="<%= article.thumbPath %>" alt=""/>
        </div>
        <div className="blog-article-container">
            <div className="blog-article">
                <div className="article">
                    <div className="article-header">
                        <h1 className="article-title">
                            article.title 
                        </h1>
                    </div>
                    <div className="article-body">
                        article.message
                    </div>
                    <div className="article-footer">
                        <div className="share-border-line">
                            <div></div>
                        </div>
                        <div className="share-links">
                            <ul>
                                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                                <li><a href=""><i className="fab fa-instagram"></i></a></li>
                                <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                                <li><a href=""><i className="fas fa-link"></i></a></li>
                            </ul>
                        </div>
                        <div className="share-border-line">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="article-navigator">
                    <div className="post-navigator">
                            <div className="post-nav-label">
                                <h1>All CaughtUp</h1>
                            </div>
                            <a href="/articles/<%= id %>/next">
                                <div className="post-nav-label">
                                    <h1>Next Article</h1>
                                </div>
                                <div className="post-nav-icon">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>)
};

export default Articles;
