import PageShell from "../_components/page-shell";
import CommunityImpact from "./community-impact";
import Mission from "./mission";
import StoryAndValues from "./story-values";

const title = 'who we are'
const subtitle = 'Our vision is to make Everything is Positive globally visible, through apparels, videos and music. The objective is to capture positive and inspiring content with a fashionable brand. Our mission is to collect inspiring content and integrated the content with the E+ brand.'

const About = () => {
  return (
    <div className="space-y-12">
      <PageShell
        title={title}
        subtitle={subtitle}
        source={'https://utfs.io/f/0322892d-e452-4547-8ee4-70be6f38731e-vilrxf.mp4'}
        type="video"
      />

      <Mission />
      <StoryAndValues />
      <CommunityImpact />
    </div>
  )
}

export default About