import { AngelDeviant, CarouselLeft, CarouselRight } from "@/assets";

export const DeviantsCarousel = () => {
  return (
    <div className="flex justify-between items-center border border-red-500 w-full max-w-[350px] sm:max-w-none">
      <CarouselLeft />
      <img
        src={AngelDeviant}
        alt="Deviant"
        className="w-[70%] border"
      />
      <CarouselRight />
    </div>
  );
};
