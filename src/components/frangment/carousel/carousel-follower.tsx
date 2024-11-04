import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  return (
    <>
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent className="snap-x">
        {Array.from({ length: 18 }).map((_, index) => (
          <CarouselItem key={index} className=" snap-start sm:basis-1/3 md:basis-1/6 lg:basis-1/7">
            <div className="p-1 ">
            <div className="w-14 rounded-full bg-slate-200 h-14"></div>
            <p className="text-xs text-center">username</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </>
  )
}
