import PageShell from "../_components/page-shell";

const title = 'e+ shop'
const subtitle = 'Discover products that inspire positivity. Our curated items are designed to uplift and encourage a positive mindset, supporting a joyful lifestyle.'

const Shop = () => {
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

export default Shop