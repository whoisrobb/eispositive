import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'e+ testimonials'
const subtitle = 'Read stories from people who have experienced the impact of positivity. These testimonials showcase the power of kindness and its ripple effects.'

const Testimonials = () => {
  return (
    <div>
      <PageShell
        title={title}
        subtitle={subtitle}
        source={eipositive}
        type="video"
      />
    </div>
  )
}

export default Testimonials