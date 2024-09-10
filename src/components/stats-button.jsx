import StatsSvg from "@/assets/svg/stats-svg";
import SvgFilter from "./ui/svg-filter";

export const StatsButton = () => {
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
        <div className="relative flex flex-col items-end justify-end w-full pr-4">
          <div className="w-12 h-12">
            <StatsSvg className="size-full relative" />
          </div>
          <p className="text-base font-bowlby text-right">Stats</p>
        </div>
      </div>
    </div>
  );
};
