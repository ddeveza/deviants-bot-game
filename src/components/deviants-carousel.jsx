import { AngelDeviant, BubbleSVG, CarouselLeft, CarouselRight } from "@/assets";
import { cn } from "@/lib/utils";
import { EvolveModal } from "./modals/evolve-modal";
import { Button } from "./ui/button";

export const DeviantsCarousel = () => {
  const canEvolve = true; //NOTE: Add soon

  return (
    <div className="flex flex-col items-center justify-center pt-[2rem] size-full relative">
      <div className="absolute top-0 left-0 flex h-full justify-between items-center w-full">
        <CarouselLeft className={"relative translate-x-4"} />

        <CarouselRight className={"relative -translate-x-4"} />
      </div>

      <div className="relative tap-area w-full aspect-square shrink-0 grow-0 z-[1] pb-[2rem]">
        <img
          src={AngelDeviant}
          alt="Deviant"
          className="size-full object-center object-contain"
        />
      </div>

      {/* Carousel Navigation SVG */}
      <div className="absolute bottom-0 left-0 size-full z-[2] pb-[9rem] flex flex-col justify-end items-center gap-4">
        <EvolveModal>
          <Button
            disabled={!canEvolve}
            className={cn("flex gap-2 bg-white text-black rounded-full relative px-8  font-bowlbyregular uppercase ", !canEvolve && "opacity-50")}
          >
            <BubbleSVG />
            Evolve
          </Button>
        </EvolveModal>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="15"
          viewBox="0 0 88 15"
          fill="none"
        >
          <ellipse
            cx="21.8192"
            cy="7.50353"
            rx="4.70492"
            ry="4.72973"
            fill="white"
            fillOpacity="0.8"
          />
          <ellipse
            cx="43.9996"
            cy="7.50358"
            rx="6.72131"
            ry="6.75676"
            fill="white"
          />
          <ellipse
            cx="66.1805"
            cy="7.50353"
            rx="4.70492"
            ry="4.72973"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};
