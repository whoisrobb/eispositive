import ContentShell from "@/components/shells/content-shell";
import BlogComponent from "./_components/blog-component";
import { Link } from "react-router-dom";
import data from "./blog-page/blog-data.json";

const BlogSection = () => {
  const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentShell
      className=""
      title="Blog posts"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data.map((blog, index) => (
        <Link
          to={`/blog/${index}`}
          onClick={handleScrollToTop}
          key={index}
        >
          <BlogComponent
            image={blog.image}
            title={blog.title}
            subtitle={blog.subtitle}
            read={blog.read}
          />
        </Link>))}
      </div>
    </ContentShell>
  )
}

export default BlogSection