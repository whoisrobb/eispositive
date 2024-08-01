import { HTMLAttributes } from 'react';
import { cn, formatCurrency } from '@/utils/utils';
import { Button } from '@/components/ui/button';

type ProductCardProps = HTMLAttributes<HTMLDivElement> & {
    // image: string;
    // category: string;
    // title: string;
    // price: number;
};

const ProductCard = ({ className }: ProductCardProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden group space-y-2", className)}>
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
            <p className="font-extrabold">{formatCurrency(42.99)}</p>
        </div>

        <Button
            className="lg:opacity-0 transition-all space-x-2 w-full group-hover:opacity-100"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span>Add to Cart</span>
        </Button>
    </div>
  )
}

export default ProductCard
