import { AngelDeviant, BubbleSVG, CarouselLeft, CarouselRight } from "@/assets";
import { cn } from "@/lib/utils";
import { EvolveModal } from "./modals/evolve-modal";
import { Button } from "./ui/button";

export const DeviantsCarousel = () => {
  const canEvolve = true; //NOTE: Add soon

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[350px] sm:max-w-none">
        <CarouselLeft />
        <img
          src={AngelDeviant}
          alt="Deviant"
          className="w-[90%]"
        />
        <CarouselRight />
      </div>

      {/* Carousel Navigation SVG */}
      <div className="relative translate-y-10">
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
      <EvolveModal>
        <Button
          disabled={!canEvolve}
          className={cn("flex gap-2 bg-white text-black rounded-full relative px-8 -translate-y-10 font-extrabold uppercase ", !canEvolve && "opacity-50")}
        >
          <BubbleSVG />
          Evolve
        </Button>
      </EvolveModal>
    </div>
  );
};
