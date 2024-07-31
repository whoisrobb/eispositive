import PageShell from "../_components/page-shell";

const title = 'who we are'
const subtitle = 'Our vision is to make Everything is Positive globally visible, through apparels, videos and music. The objective is to capture positive and inspiring content with a fashionable brand. Our mission is to collect inspiring content and integrated the content with the E+ brand.'

const About = () => {
  return (
    <div>
      <PageShell
        title={title}
        subtitle={subtitle}
        source={'https://utfs.io/f/87297fba-a156-42bb-8b84-f02284499d67-k2j0s8.mp4'}
        type="video"
      />
    </div>
  )
}

export default About