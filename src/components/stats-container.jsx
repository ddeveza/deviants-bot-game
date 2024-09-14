import { BubbleSVG, ShopButton } from "@/assets";
import { PAGES } from "@/constant/pages";
import { ClockSVG, EnergySVG, TapSVG } from "@/pages/incubation/assets";
import { useNavigate } from "react-router-dom";
import { DeviantMaturityBar } from "./deviant-maturity-bar";
import StatsDiv from "./stats-div";
import SvgFilter from "./ui/svg-filter";

export const StatsContainer = ({ isEmpty, isIncubation }) => {
  let percent = 25;
  const navigate = useNavigate();
  return (
    <div className="relative px-4 w-full flex justify-center stats-container">
      {/*SVG Filter for round corners and drop-shadow*/}
      <SvgFilter
        roundCorner="4"
        id="rounded-filter-8"
        dropShadowColor="#BBBBBB"
      />

      <div className="relative w-full stats-box pb-[8px] h-auto">
        <div className="relative w-full stats-box-inner px-2 py-2 gap-y-2 flex flex-col gap-2 justify-between items-start">
          {/* Profile and Shard Details */}

          <StatsDiv
            level={1}
            progress={33}
            shards={isIncubation ? 0 : 4000}
          />

          {/* Deviant Stats */}
          <div className="relative flex flex-col justify-between w-full bg-white rounded-xl py-2 px-3 uppercase font-bowlbyregular ">
            {isEmpty ? (
              <>
                <div className="flex flex-col justify-center items-center px-2 py-3 text-center">
                  <p className="text-xl font-bowlbyregular">Not available</p>
                  <p className="font-chakra text-xs font-bold">Reach Level 2 to unlock a 2nd Deviant Slot or Unlock with TON to buy a new slot</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <div className="flex items-center ">
                    {isIncubation ? <ClockSVG /> : <BubbleSVG />}
                    <p className="text-xs font-normal leading-5 proportional-nums lining-nums">{isIncubation ? "Incubation time" : "Deviant Type"}</p>
                  </div>
                  <p className="text-[#161313] text-xl -tracking-[0.5px]">{isIncubation ? "1:52:46" : "angel"}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center ">
                    {isIncubation && <TapSVG />}
                    <p className="text-[10px] leading-[1]">{isIncubation ? "time reduction per tap" : "Deviant Level"}</p>
                  </div>
                  <p className="text-xs">{isIncubation ? "1s" : "Natura"}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center ">
                    {isIncubation && <EnergySVG />}
                    <p className="text-[10px] leading-[1]">{isIncubation ? "available energy" : "Deviant XP"}</p>
                  </div>

                  <p className="text-xs">{isIncubation ? "75/100" : "245/1000"}</p>
                </div>
              </>
            )}
          </div>

          {/* Progress Bar */}

          {isEmpty ? (
            <div className="relative h-[3rem] w-full flex justify-between uppercase ">
              <div className="grow-0 shrink-0 flex flex-col justify-end gap-1 stats-box-maturity">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bowlbyregular">Maturity</p>
                  <p className="text-[12px] font-bowlbyregular">N/A</p>
                </div>
                <DeviantMaturityBar
                  percentage={0}
                  className="w-full h-[1.5rem] border"
                />
              </div>
            </div>
          ) : (
            <div className="relative h-[3rem] w-full flex justify-between uppercase ">
              <div className="grow-0 shrink-0 flex flex-col justify-end gap-1 stats-box-maturity">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bowlbyregular">{isIncubation ? "Progress" : "Maturity"}</p>
                  <p className="text-[12px] font-bowlbyregular">{`${percent}%`}</p>
                </div>
                <DeviantMaturityBar
                  percentage={percent}
                  className="w-full h-[1.5rem] border"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 px-4 pb-1">
        <div
          className=""
          onClick={() => navigate(PAGES.shop)}
        >
          <ShopButton />
        </div>
      </div>
    </div>
  );
};
