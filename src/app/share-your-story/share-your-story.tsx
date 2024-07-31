import PageShell from "../_components/page-shell";

const title = 'share your story'
const subtitle = 'Share your journey and experiences with positivity. Your story can inspire others, contributing to a collective movement for a kinder, more joyful world.'

const ShareYourStory = () => {
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

export default ShareYourStory