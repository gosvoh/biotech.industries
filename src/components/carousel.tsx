"use client";

import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Carousel as EmblaCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const CarouselImage = ({ src }: { src: string | StaticImageData }) => (
  <CarouselItem className="basis-[80%] xl:basis-1/2 2xl:basis-1/3">
    <Image src={src} alt="" width={2000} height={1330} />
  </CarouselItem>
);

export default function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(3);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(3);
    setCurrentSlide(3);

    const sub = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", sub);

    return () => {
      api.off("select", sub);
    };
  }, [api]);

  return (
    <EmblaCarousel
      opts={{
        loop: true,
      }}
      className="w-full fcol gap-8"
      setApi={setApi}
    >
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, i) => (
          <CarouselImage
            key={`carousel-image-${i}`}
            src={`/biocon${i + 1}.png`}
          />
        ))}
      </CarouselContent>
      <div className="hidden md:flex flex-row gap-16 items-center justify-center">
        <div
          className="rounded-full bg-white text-black p-[10px] hover:cursor-pointer"
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeft className="h-[42px] w-[42px]" strokeWidth={2.5} />
          <span className="sr-only">Previous slide</span>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`carousel-item-${i}`}
              className={cn(
                "w-4 h-4 hover:cursor-pointer rounded-full bg-effect opacity-60",
                i === currentSlide && "opacity-100 w-6 h-6",
                "transition-all duration-300 ease-in-out"
              )}
              onClick={() => api?.scrollTo(i)}
            ></div>
          ))}
        </div>
        <div
          className="rounded-full bg-white text-black p-[10px] hover:cursor-pointer"
          onClick={() => api?.scrollNext()}
        >
          <ArrowRight className="h-[42px] w-[42px]" strokeWidth={2.5} />
          <span className="sr-only">Next slide</span>
        </div>
      </div>
    </EmblaCarousel>
  );
}
