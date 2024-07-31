import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'e+ community'
const subtitle = 'Join our community focused on spreading positivity. Connect, share experiences, and participate in events that celebrate kindness and cultural appreciation.'

const Community = () => {
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

export default Community