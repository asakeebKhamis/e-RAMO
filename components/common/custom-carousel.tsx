"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CustomCarousel({
  children,
  data = [],
  delay = 4000,
  showPreviousArrow = false,
  showNextArrow = false,
  className,
  content,
  opts,
  ...props
}: {
  children?: React.ReactNode;
  data?: any;
  delay?: number;
  showPreviousArrow?: boolean;
  showNextArrow?: boolean;
  className?: string;
  content?: (item: any) => React.ReactNode;
  opts?: any;
  orientation?: "horizontal" | "vertical";
  [key: string]: any;
}) {
  return (
    <Carousel
      {...props}
      opts={{
        align: "start",
        loop: true,
        skipSnaps: true,
        axis: props.orientation === "vertical" ? "y" : "x",
        ...opts,
      }}
      // plugins={[Autoplay({ delay, stopOnInteraction: false })]}
      dir="ltr"
      className={cn(
        "w-[calc(100vw-2rem)] lg:w-full",
        props.orientation === "vertical" && "w-full"
      )}
    >
      <CarouselContent
        className={cn(
          "-ms-2 md:-ml-4",
          props.orientation === "vertical" && "max-h-[405px]"
        )}
      >
        {data.map((item: any, i: number) => (
          <CarouselItem
            key={i}
            className={cn(
              "ps-2 md:ps-4",
              props.orientation === "vertical"
                ? "basis-1/2"
                : "lg:basis-1/3 xl:basis-1/4",
              className
            )}
          >
            {content?.(item)}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showPreviousArrow && <CarouselPrevious />}
      {showNextArrow && <CarouselNext />}
    </Carousel>
  );
}
