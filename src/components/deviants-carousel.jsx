import { AngelDeviant, BubbleSVG, CarouselLeft, CarouselRight } from "@/assets";
import { Button } from "./ui/button";

export const DeviantsCarousel = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[350px] sm:max-w-none">
        <CarouselLeft />
        <img
          src={AngelDeviant}
          alt="Deviant"
          className="w-[70%]"
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
            fill-opacity="0.8"
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
            fill-opacity="0.8"
          />
        </svg>
      </div>
      <Button
        disabled
        className="flex gap-2 bg-white text-black rounded-full opacity-50 relative px-8 -translate-y-10 font-extrabold uppercase "
      >
        <BubbleSVG />
        Evolve
      </Button>
    </div>
  );
};
