import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";
import { HTMLAttributes } from "react";

type CollectionCardProps = HTMLAttributes<HTMLDivElement> & {
    // image: string;
    // title: string;
    // linkText: string;
    // link: string;
}

const CollectionCard = ({ className }: CollectionCardProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
        <div className="">
            <img
                src={'https://utfs.io/f/61623c33-0360-495b-b2a4-2cff67c98c5a-eqlob5.jpg'}
                className="h-full w-full object-cover"
            />
        </div>
        <div className="">
            <h1 className="text-lg font-bold">Hoodies</h1>
            <Link
                to={'#'}
                className={cn(buttonVariants({ variant: "link" }), 'p-0 text-muted-foreground hover:text-primary')}
            >
                Collection
            </Link>
        </div>
    </div>
  )
}

export default CollectionCard