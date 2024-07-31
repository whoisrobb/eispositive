import PageShell from "../_components/page-shell";

const title = 'e+ community'
const subtitle = 'Join our community focused on spreading positivity. Connect, share experiences, and participate in events that celebrate kindness and cultural appreciation.'

const Community = () => {
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

export default Community