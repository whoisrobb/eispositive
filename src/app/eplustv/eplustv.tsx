import PageShell from "../_components/page-shell";

const title = 'e+ tv'
const subtitle = 'Explore uplifting videos that celebrate positivity. From interviews to documentaries, E+ TV highlights stories of kindness, compassion, and cultural beauty.'

const EplusTv = () => {
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

export default EplusTv