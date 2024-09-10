import SvgFilter from "@/components/ui/svg-filter";
import { BoostSVG } from "../assets";

export const BoostButton = () => {
  return (
    <div className="relative cursor-pointer w-[7rem]">
      <SvgFilter
        dropShadowColor="#BBBBBB"
        roundCorner="2"
        id="btn-modal-filter"
      />
      <div className="relative btn-right-modal-container w-full h-[4rem] pb-[6px]">
        <div className="relative btn-right-modal size-full"></div>
      </div>
      {/* Icon and Text */}
      <div className="absolute bottom-0 right-0 flex flex-col w-full h-full items-end justify-end pb-3">
        <div className="relative flex flex-col items-center justify-end w-full pl-4">
          <div className="w-12 h-12">
            <BoostSVG className="size-full relative" />
          </div>
          <p className="text-base font-bowlby text-right">Boosts</p>
        </div>
      </div>
    </div>
  );
};
