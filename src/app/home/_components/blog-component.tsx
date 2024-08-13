import Magnetic from "@/components/elements/magnetic";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type BlogComponentProps = {
    image: string;
    title: string;
    subtitle: string;
}

const BlogComponent = ({ image, title, subtitle }: BlogComponentProps) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
        className="w-full flex md:flex-col rounded-md overflow-hidden"
    >
        <div
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            className="overflow-hidden md:w-full h-full md:h-auto aspect-square relative"
        >
            <img
                className="h-full w-full object-cover"
                src={image}
                alt=""
            />

            <div
                className={`absolute aspect-square rounded-full inset-0 flex items-center justify-center transition-transform duration-300
                ${isHovered ? 'scale-100' : 'scale-0'}`}
            >
                <Magnetic>
                    <Button className="h-16 aspect-square rounded-full flex items-center justify-center">
                        Read
                    </Button>
                </Magnetic>
            </div>
        </div>
        <div className="p-4 border space-y-4 w-full">
            <p className="font-anton uppercase text-muted-foreground">{subtitle}</p>
            <h1 className="font-bold md:text-4xl text-lg leading-tight">{title}</h1>
            <p className="font-anton text-muted-foreground">10min read</p>
        </div>

    </div>
  )
}

export default BlogComponent