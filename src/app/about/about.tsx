import PageShell from "../_components/page-shell";
import eipositive from '../../../public/videos/eispositive.mp4';

const title = 'who we are'
const subtitle = 'Our vision is to make Everything is Positive globally visible, through apparels, videos and music. The objective is to capture positive and inspiring content with a fashionable brand. Our mission is to collect inspiring content and integrated the content with the E+ brand.'

const About = () => {
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

export default About