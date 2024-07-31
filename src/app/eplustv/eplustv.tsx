import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'e+ tv'
const subtitle = 'Explore uplifting videos that celebrate positivity. From interviews to documentaries, E+ TV highlights stories of kindness, compassion, and cultural beauty.'

const EplusTv = () => {
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

export default EplusTv