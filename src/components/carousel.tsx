"use client";

import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Carousel as EmblaCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Biocon2 from "@public/biocon/biocon2.png";
import Biocon1 from "@public/biocon/biocon1.png";
import Biocon3 from "@public/biocon/biocon3.png";
import Biocon4 from "@public/biocon/biocon4.png";
import Biocon5 from "@public/biocon/biocon5.png";
import Biocon6 from "@public/biocon/biocon6.png";
import Biocon7 from "@public/biocon/biocon7.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const CarouselImage = ({ src }: { src: StaticImageData }) => (
  <CarouselItem className="basis-[80%] md:basis-3/4 xl:basis-2/3 aspect-square md:aspect-auto max-h-[720px] min-h-350px">
    <Image src={src} alt="" className="h-full object-cover" />
  </CarouselItem>
);

export default function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(3);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(3);

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
      className="w-full h-full fcol gap-8"
      setApi={setApi}
    >
      <CarouselContent className="flex-1">
        <CarouselImage src={Biocon1} />
        <CarouselImage src={Biocon2} />
        <CarouselImage src={Biocon3} />
        <CarouselImage src={Biocon4} />
        <CarouselImage src={Biocon5} />
        <CarouselImage src={Biocon6} />
        <CarouselImage src={Biocon7} />
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
