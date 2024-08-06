import ContentShell from "@/components/shells/content-shell";
import BlogComponent from "./_components/blog-component";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <ContentShell
      className=""
      title="Blog posts"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Link
          to={'/blog/eplustv'}
        >
          <BlogComponent
            image="https://utfs.io/f/a0b5c9b0-2fc6-48fc-a118-3a42c2b4d32d-13a33y.png"
            title="E+ TV: Explore uplifting videos that celebrate positivity."
          />
        </Link>

        <Link
          to={'/blog/eplustv'}
        >
          <BlogComponent
            image="https://utfs.io/f/9ce75893-0ab4-4c19-b53f-807439a44083-i8j314.png"
            title="E+ Unsung Heroes -  Series Celebrating Hidden Figures."
          />
        </Link>

        <Link
          to={'/blog/eplustv'}
        >
          <BlogComponent
            image="https://utfs.io/f/130eaa9e-1ac1-440f-bcfa-152059446dab-5fvi41.png"
            title="Everything is Positive Fashion Show: Where Style Meets Social Impact."
          />
        </Link>
      </div>
    </ContentShell>
  )
}

export default BlogSection