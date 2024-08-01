import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/utils';
import ContentShell from '@/components/shells/content-shell';

const ShopLanding = () => {
  return (
    <ContentShell
        title='Fashion friendly'
        subtitle='Our fabulous outfit designs'
    >
    <div className='grid place-items-center h-[125vh] py-12 space-y-4'>
        {/* <div className="text-center">
            <h1 className="font-anton text-2xl">Fashion friendly</h1>
            <p className="">Our fabulous outfit designs</p>
        </div> */}

        <div className="flex md:flex-row flex-col md:items-center md:justify-center md:gap-8 gap-4">
            <Collections
                title='Summer Essentials Collection'
                subtitle='Discover vibrant and breezy styles for the sunny season—perfect for every summer adventure.'
                image={'https://utfs.io/f/61623c33-0360-495b-b2a4-2cff67c98c5a-eqlob5.jpg'}
                link='#'
                linkTitle='Shop now'
            />
            <Collections
                title='Winter Warmth Collection'
                subtitle='Embrace cozy, stylish winter garments designed to keep you warm and chic through cold months.'
                image={'https://utfs.io/f/33393038-a2f0-4b58-bbc4-c63dd0d6b625-d0zxob.jpg'}
                link='#'
                linkTitle='Shop now'
            />
        </div>
    </div>
    </ContentShell>
  )
}

export default ShopLanding


type CollectionsProps = {
    image: string;
    title: string;
    subtitle: string;
    linkTitle: string;
    link: string;
}

const Collections = ({ image, title, subtitle, link, linkTitle }: CollectionsProps) => {
    return (
        <div className="rounded-lg overflow-hidden aspect-square lg:w-[35rem] md:[20rem] relative">
            <img
                src={image}
                className='h-full w-full object-cover'
            />

            <div className="z-10 absolute bottom-4 left-4">
                <h1 className="font-anton text-2xl">{title}</h1>
                <p className="">{subtitle}</p>
                <Link
                    to={link}
                    className={cn(buttonVariants({ variant: 'linkHover1' }))}
                >
                    {linkTitle}
                </Link>
            </div>
        </div>
    )
}