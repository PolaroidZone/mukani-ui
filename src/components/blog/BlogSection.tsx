import BlogHeader from "./BlogHeader";
import BigPost from "./Post";
import SubPost from "./SmallPost";

const BlogSection = () => {
  return (
    <section className="container" id="blog">
      <div className="blog-container">
        <BlogHeader/>
        <div className="blog-posts">
            <BigPost/>
            <SubPost/>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
