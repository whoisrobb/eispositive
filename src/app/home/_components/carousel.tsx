import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/utils/utils";
import { HTMLAttributes, ReactNode } from "react";

type CarouselComponentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function CarouselComponent({ children, className }: CarouselComponentProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className={cn("", className)}
    >
      <CarouselContent className="">
        {children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
