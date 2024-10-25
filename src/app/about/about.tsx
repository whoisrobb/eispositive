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
        source={'https://utfs.io/f/2DareqxOliXd2DezKtxOliXdKgTS76cFnVJqba9YZ3Ir1NHL'}
        type="video"
      />
      <div className="h-96 w-full -z-10">
          <img
              src={'https://utfs.io/f/2DareqxOliXdugcqIe7ny2rLYE0IWhtomw83RGTC9jla1OKz'}
              className="h-full w-full object-cover"
              alt=""
          />
      </div>

      <Mission />
      <StoryAndValues />
      <CommunityImpact />
    </div>
  )
}

export default About