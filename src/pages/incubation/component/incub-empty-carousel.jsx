import { CarouselLeft, CarouselRight } from "@/assets";
import { EmptyIncubatorSVG, ShieldIncubationSVG } from "../assets";

export const IncubationCarouselEmpty = ({ page, setPage }) => {
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
  const style = { background: "linear-gradient(90deg, #FFD700 0%, #A78D00 28%, #C6A700 47%, #BB9E00 76.5%, #FFD700 100%)" };

  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="absolute top-0 left-0 flex h-full justify-between items-center w-full z-[3]">
        <div
          className="relative translate-x-4"
          onClick={handlePrev}
        >
          {page !== 1 && <CarouselLeft className=" " />}
        </div>
        <div
          className="relative -translate-x-4"
          onClick={handleNext}
        >
          {page !== 3 && <CarouselRight className=" " />}
        </div>
      </div>

      <div className="relative shrink-0 grow-0 z-[1]">
        <EmptyIncubatorSVG />
      </div>

      {/* Carousel Navigation SVG */}
      <div className="absolute bottom-0 left-0 size-full z-[2] pb-[7rem] flex flex-col justify-end items-center gap-4">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center px-6 py-1 rounded-3xl bg-white">
            <ShieldIncubationSVG color="black" />
            <span className="uppercase text-sm font-extrabold py-2">Requires Level 2</span>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <div
            className="flex items-center px-6 py-1 rounded-3xl"
            style={style}
          >
            <ShieldIncubationSVG color="white" />
            <span className="uppercase text-sm font-extrabold text-white py-2">Unlock for 2 Ton</span>
          </div>
        </div>

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
