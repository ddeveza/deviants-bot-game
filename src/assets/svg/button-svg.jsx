/* eslint-disable react/prop-types */
import SvgFilter from "@/components/ui/svg-filter";
import { cn } from "@/lib/utils";

export const ShopButton = () => {
  return (
    <div className="relative w-full cursor-pointer pb-[6px]">
      <SvgFilter roundCorner="4" id="shop-filter" />
      <SvgFilter roundCorner="5" id="shop-filter-shadow" />
      <div className="btn-shop-shadow-container absolute top-0 left-0 size-full">
        <div className="btn-shop-shadow size-full"></div>
      </div>
      <div className="btn-shop-container w-[9rem] h-[2rem]">
        <div className="btn-shop size-full flex items-center justify-center">
        <p className="text-white uppercase pl-4 font-bowlbyregular">Shop</p>
        </div>
      </div>
    </div>
  );
};

export const CarouselLeft = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="none"
      className={cn(className)}
    >
      <path
        opacity="0.5"
        d="M27 29.446V2.55405C27 0.99478 25.2949 0.0352472 23.962 0.844474L1.81577 14.2904C0.533045 15.0692 0.533045 16.9308 1.81577 17.7096L23.962 31.1555C25.2949 31.9648 27 31.0052 27 29.446Z"
        fill="white"
      />
    </svg>
  );
};

export const CarouselRight = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="none"
      className={cn(className)}
    >
      <path
        opacity="0.5"
        d="M0 29.446V2.55405C0 0.99478 1.70511 0.0352472 3.03796 0.844474L25.1842 14.2904C26.467 15.0692 26.467 16.9308 25.1842 17.7096L3.03796 31.1555C1.70511 31.9648 0 31.0052 0 29.446Z"
        fill="white"
      />
    </svg>
  );
};
