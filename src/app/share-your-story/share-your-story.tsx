import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'share your story'
const subtitle = 'Share your journey and experiences with positivity. Your story can inspire others, contributing to a collective movement for a kinder, more joyful world.'

const ShareYourStory = () => {
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

export default ShareYourStory