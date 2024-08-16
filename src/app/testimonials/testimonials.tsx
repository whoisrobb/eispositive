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
        source={'https://utfs.io/f/87297fba-a156-42bb-8b84-f02284499d67-k2j0s8.mp4'}
        type="video"
      />

      <FeaturedStories />
      <ShareYourStory />
    </div>
  )
}

export default Testimonials