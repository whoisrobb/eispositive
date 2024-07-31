import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ProductCardProps = HTMLAttributes<HTMLDivElement> & {
    // image: string;
    // category: string;
    // title: string;
    // price: number;
};

const ProductCard = ({ className }: ProductCardProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
        <div className="">
            <img
                src={'https://utfs.io/f/61623c33-0360-495b-b2a4-2cff67c98c5a-eqlob5.jpg'}
                className="h-full w-full object-cover"
            />
        </div>
        <div className="space-y-2">
            <p className="text-muted-foreground">Hoodies</p>
            <h1 className="">
                The O'Neill Womens Bahia 2mm Back Zip Spring Wetsuit in Black, Blue & Blue O'Neill
            </h1>
            <p className="font-extrabold">$42.99</p>
        </div>
    </div>
  )
}

export default ProductCard
