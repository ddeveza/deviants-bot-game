import { BubbleSVG, flyAngelImg, ShardSVG, ShopButton } from "@/assets";
import { DeviantMaturityBar } from "./deviant-maturity-bar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";
import SvgFilter from "./ui/svg-filter";
import StatsDiv from "./stats-div";

export const StatsContainer = () => {
  let percent = 25;
  const navigate = useNavigate();
  return (
    <div className="relative px-4 w-full flex justify-center stats-container">

      {/*SVG Filter for round corners and drop-shadow*/}
      <SvgFilter roundCorner="4" id="rounded-filter-8" dropShadowColor="#BBBBBB" />

      <div className="relative w-full stats-box pb-[8px] h-auto ">
        <div className="relative w-full stats-box-inner px-2 py-2 gap-y-2 flex flex-col gap-2 justify-between items-start">
          {/* Profile and Shard Details */}

          <StatsDiv level={1} progress={33} className="relative h-[3rem] flex justify-between w-full font-bowlbyregular gap-2 bg-white rounded-xl py-2 px-3" shards={4000} />



          {/* Deviant Stats */}
          <div className="relative flex flex-col justify-between w-full bg-white rounded-xl py-2 px-3 uppercase font-bowlbyregular space-y-1.5">
            <div className="flex justify-between">
              <div className="flex items-center space-x-0.5">
                <BubbleSVG />
                <p className="text-sm font-normal leading-5 proportional-nums lining-nums">Deviant Type</p>
              </div>
              <p className="text-[#161313] text-2xl -tracking-[0.5px]">angel</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs">Deviant Level</p>
              <p className="text-sm">Natura</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs">Deviant XP</p>
              <p className="text-sm">245/1000</p>
            </div>
          </div>

          {/* Deviant Maturity Progress */}
          <div className="relative h-[3rem] w-full flex justify-between uppercase ">

            <div className="grow-0 shrink-0 flex flex-col justify-end gap-1 stats-box-maturity">
              <div className="flex justify-between">
                <p className="text-[10px] font-bowlbyregular">Deviant maturity</p>
                <p className="text-[12px] font-bowlbyregular">{`${percent}%`}</p>
              </div>
              <DeviantMaturityBar percentage={percent} className="w-full h-[1.5rem] border" />
            </div>

          </div>
        </div>

      </div>
      <div className="absolute bottom-0 right-0 px-4 pb-1">
        <div className="" onClick={() => navigate(PAGES.shop)}>
          <ShopButton />
        </div>
      </div>
    </div>

  );
};
