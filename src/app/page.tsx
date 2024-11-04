import CardPost from "@/components/frangment/card/card-post";
import { CarouselSpacing } from "@/components/frangment/carousel/carousel-follower";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex ">
      <main className="w-[40vw]">
      <div className="flex flex-col justify-center w-full h-full   ">
        {/* sg-follower */}
        <Suspense fallback>
        <CarouselSpacing/>
        </Suspense>
        {/* card */}
         <CardPost/>
      </div>
      </main>

      <div className="lg:absolute lg:right-0 lg:w-[28vw] 2xs:hidden sm:hidden h-[100vh] px-5 pt-7 block lg:block md:hidden xl:hidden sm:hidden">
        {/*profile  */}
        <div className="flex gap-2 px-5 mt-3 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-300"></div>
          <h1>trending</h1>
        </div>
        <h1 className="mt-12  text-center font-semibold text-xl">trending1</h1>
        <h1 className=" px-8  mt-16 text-lg mb-2">trending</h1>
        <h1 className=" px-8  mt-6 text-lg mb-2">trending</h1>
        <h1 className=" px-8  mt-6 text-lg mb-2">trending</h1>
        <h1 className=" px-8  mt-6 text-lg mb-2">trending</h1>
      </div>
    </div>
  );
}
