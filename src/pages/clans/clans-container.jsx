import { BubbleSVG, ShopButton } from "@/assets";
import { PAGES } from "@/constant/pages";
import { ClockSVG, EnergySVG, TapSVG } from "@/pages/incubation/assets";
import { useNavigate } from "react-router-dom";
import { DeviantMaturityBar } from "../../components/deviant-maturity-bar";
import StatsDiv from "../../components/stats-div";
import SvgFilter from "../../components/ui/svg-filter";
import SearchSVG from "@/assets/svg/search";
import { BackButton } from "@/assets/svg/button-svg";

export const ClansContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="relative px-4 w-full flex flex-col gap-2 justify-start items-center stats-container">
      {/*SVG Filter for round corners and drop-shadow*/}
      <SvgFilter
        roundCorner="4"
        id="clans-filter"
        dropShadowColor="#BBBBBB"
      />

      <div className="relative w-full clans-box pb-[8px] h-auto">
        <div className="relative w-full clans-box-inner px-2 py-2 gap-y-2 flex flex-col gap-2 justify-between items-start">
          {/* Profile and Shard Details */}

          <StatsDiv
            level={1}
            progress={33}
            shards={4000}
          />

          {/* Clan Stats */}
          <h1 className="text-black font-bowlby text-lg uppercase w-full text-center">Clans</h1>
          <div className="relative flex flex-col justify-center items-center w-full bg-[#DEDEDE] rounded-xl py-6 px-8 ">
            <h1 className="text-black font-chakra font-normal text-center text-xs">{`You are currently not a member of any clan. Join clans or create your own.`}</h1>
          </div>
          <div onClick={() => navigate(PAGES.clans)} className="btn-dev-container relative w-full px-4 pt-3 pb-4 flex justify-center items-center pointer-events-none opacity-40">
            <h1 className="text-black font-bowlby text-lg relative">Create Your Own</h1>
          </div>

          {/* Progress Bar */}

          <div className="relative h-[3rem] flex justify-between uppercase ui-container-button pt-2 pr-2">
            <div className="size-full flex justify-center items-center pb-[6px] relative gap-1 btn-green-container">
              <div className="w-4 h-4 relative">
                <SearchSVG className="size-full relative" />
              </div>
              <h1 className="text-white text-sm  font-bowlby relative">Find Clan By ID</h1>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 right-0 px-4 pb-1">
        <div
          className=""
          onClick={() => navigate(PAGES.pvp)}
        >
          <BackButton />
        </div>
      </div>

    </div>
  );
};
