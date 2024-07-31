import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'e+ shop'
const subtitle = 'Discover products that inspire positivity. Our curated items are designed to uplift and encourage a positive mindset, supporting a joyful lifestyle.'

const Shop = () => {
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

export default Shop