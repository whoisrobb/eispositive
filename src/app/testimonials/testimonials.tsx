import PageShell from "../_components/page-shell";
import FeaturedStories from "./featured-stories";
import ShareYourStory from "./share-your-story";

const title = 'e+ testimonials'
const subtitle = 'Read stories from people who have experienced the impact of positivity. These testimonials showcase the power of kindness and its ripple effects.'

const Testimonials = () => {
  return (
    <div className="space-y-12">
      <PageShell
        title={title}
        subtitle={subtitle}
        source={'https://utfs.io/f/a73e0749-ec33-49c8-9fae-1147fd413e43-ri4dz8.mp4'}
        type="video"
      />

      <FeaturedStories />
      <ShareYourStory />
    </div>
  )
}

export default Testimonials