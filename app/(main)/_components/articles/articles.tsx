"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Blog Title Here",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    description:
      "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a too...",
    image: "/images/hybrid1.png",
  },
  {
    id: 2,
    title: "Blog Title Here",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    description:
      "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a too...",
    image: "/images/hybrid2.png",
  },
  {
    id: 3,
    title: "Blog Title Here",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    description:
      "One of the primary functions of a POS system is to process transactions and handle sensitive custome...",
    image: "/images/hybrid3.png",
  },
  {
    id: 4,
    title: "Blog Title Here",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    description:
      "Digital transformation continues to reshape how modern businesses operate in the 21st century...",
    image: "/images/hybrid1.png",
  },
  {
    id: 5,
    title: "Blog Title Here",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    description:
      "Understanding customer behavior and market trends is essential for business growth...",
    image: "/images/hybrid2.png",
  },
];

export default function MainArticles() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };

    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className="my_container">
      {/* Header */}
      <div className="flex items-center md:justify-between flex-wrap justify-center gap-2">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Our Recent Articles
          </h1>
          <p className="text-muted-foreground text-base">
            Stay Informed with Our Latest Insights
          </p>
        </div>

        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={!canPrev}
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={!canNext}
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ms-2 md:-ms-4">
          {articles.map((article) => (
            <CarouselItem
              key={article.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="overflow-hidden transition-shadow duration-300 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col grow">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                    <span className="font-medium text-main-2">
                      {article.author}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 grow">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all duration-200 mt-auto text-main text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        {/* <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" /> */}
      </Carousel>
    </div>
  );
}
