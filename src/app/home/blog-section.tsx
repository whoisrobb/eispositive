import ContentShell from "@/components/shells/content-shell";
import image1 from '../../../public/images/master-card.png';
import BlogComponent from "./_components/blog-component";

const BlogSection = () => {
  return (
    <ContentShell
      className=""
      title="Blog posts"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <BlogComponent image={image1} />
        <BlogComponent image={image1} />
        <BlogComponent image={image1} />
      </div>
    </ContentShell>
  )
}

export default BlogSection