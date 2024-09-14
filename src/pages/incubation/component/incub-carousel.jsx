import { CarouselLeft, CarouselRight, incubatorImg } from "@/assets";
import Incubators from "@/components/incubators";

export const IncubationCarousel = ({ page, setPage }) => {
  const handleNext = () => {
    if (page === 2 || page === 1) {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (page === 2 || page === 3) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="absolute top-0 left-0 flex h-full justify-between items-center w-full z-[3]">
        <div
          className="relative translate-x-4"
          onClick={handlePrev}
        >
          <CarouselLeft />
        </div>
        <div
          className="relative -translate-x-4"
          onClick={handleNext}
        >
          <CarouselRight />
        </div>
      </div>

      <div className="relative tap-area w-[100%] aspect-square shrink-0 grow-0 z-[1] pt-[2rem]">
        <Incubators className="size-full relative" level={0} />
      </div>

      {/* Carousel Navigation SVG */}
      <div className="absolute bottom-0 left-0 size-full z-[2] pb-[10rem] flex flex-col justify-end items-center gap-4">
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
