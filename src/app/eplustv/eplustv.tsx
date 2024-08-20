import PageShell from "../_components/page-shell";
import Approach from "./approach";

const title = 'e+ tv'
const subtitle = 'Explore uplifting videos that celebrate positivity. From interviews to documentaries, E+ TV highlights stories of kindness, compassion, and cultural beauty.'

const EplusTv = () => {
  return (
    <div className="space-y-12">
      <PageShell
        title={title}
        subtitle={subtitle}
        source={'https://utfs.io/f/15ac16b6-67dc-4730-a56e-90c009f18f9d-ft9aq1.mp4'}
        type="video"
      />

      <Approach />
    </div>
  )
}

export default EplusTv