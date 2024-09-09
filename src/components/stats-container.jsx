import { BubbleSVG, flyAngelImg, ShardSVG, ShopButton } from "@/assets";
import { DeviantMaturityBar } from "./deviant-maturity-bar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";
import SvgFilter from "./ui/svg-filter";

export const StatsContainer = () => {
  let percent = 25;
  const navigate = useNavigate();
  return (
    <div className="relative px-4 w-full flex justify-center stats-container">

      {/*SVG Filter for round corners and drop-shadow*/}
      <SvgFilter roundCorner="4" id="rounded-filter-8" dropShadowColor="#BBBBBB" />

      <div className="relative w-full stats-box pb-[8px] h-auto ">
        <div className="relative w-full stats-box-inner px-2 py-2 gap-y-4 flex flex-col gap-2 justify-between items-start">
          {/* Profile and Shard Details */}
          <div className="relative h-[3rem] flex justify-between w-full font-extrabold gap-2 bg-white rounded-xl py-2 px-3">
            <div className="flex items-center gap-2 bottom-0">
              <Avatar className="bg-gray-600 w-7 h-7">
                <AvatarImage src={flyAngelImg} />
                <AvatarFallback>CJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 justify-center ">
                <p className="text-[8px] text-[#3F3B3B]">communityjuice</p>
                <div className="flex flex-col">
                  <p className="text-[6px] capitalize text-[#606060]">level 1</p>
                  <Progress
                    value={33}
                    className="h-0.5 bg-[#A2A2A2] w-20"
                    indicatorColor={"bg-black"}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ShardSVG className="w-5 h-5" />
              <p className="font-extrabold text-[14px]">4 000</p>
            </div>
          </div>

          {/* Deviant Stats */}
          <div className="relative flex flex-col justify-between w-full bg-white rounded-xl py-2 px-3 uppercase font-extrabold">
            <div className="flex justify-between">
              <div className="flex items-center space-x-0.5">
                <BubbleSVG />
                <p className="text-sm">Deviant Type</p>
              </div>
              <p className="text-[#161313]">angel</p>
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
          <div className="relative h-[3rem] w-full flex justify-between uppercase font-extrabold">

            <div className="grow-0 shrink-0 flex flex-col justify-end gap-1 stats-box-maturity">
              <div className="flex justify-between">
                <p className="text-[10px]">Deviant maturity</p>
                <p className="text-[12px]">{`${percent}%`}</p>
              </div>
              <DeviantMaturityBar percentage={percent} className="w-full h-[1.5rem] border" />
            </div>

          </div>
        </div>

      </div>
      <div className="absolute bottom-0 right-0 px-4">
        <div className="" onClick={() => navigate(PAGES.shop)}>
          <ShopButton />
        </div>
      </div>
    </div>

  );
};
