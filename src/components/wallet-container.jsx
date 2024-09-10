import { WalletRoundedIcon } from "@/assets";
import { TwitterSVG } from "@/assets/svg/twitter-svg";
import { PAGES } from "@/constant/pages";
import { Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SvgFilter from "./ui/svg-filter";
export const WalletContainer = ({ category, connected }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full flex stats-container">
      {/*SVG Filter for round corners and drop-shadow*/}
      <SvgFilter
        roundCorner="4"
        id="rounded-filter-8"
        dropShadowColor="#BBBBBB"
      />

      <div className="relative w-full stats-box pb-[8px] h-auto">
        <div className="relative w-full wallet-box-inner pt-5 pb-14">
          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center">
              {category === "twitter" ? <TwitterSVG /> : <WalletRoundedIcon connected={connected} />}
              <span className="text-2xl mt-3">{connected ? `connected to` : "connect to"}</span>
              <span className="text-4xl">{category === "twitter" ? "Twitter / X" : "TON WALLET"}</span>
              {connected && (
                <span className="flex font-sans font-normal">
                  <LinkIcon className="pr-2" />
                  {category === "twitter" ? "communityjuice" : "UFT4r65H...U67v2rBx"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div
          className=""
          onClick={() => navigate(PAGES.wallet)}
        >
          <BackButton />
        </div>
      </div>
    </div>
  );
};

const BackButton = () => {
  return (
    <div className="relative w-full cursor-pointer pb-[4px]">
      <SvgFilter
        roundCorner="4"
        id="back-filter"
      />
      <SvgFilter
        roundCorner="5"
        id="back-filter-shadow"
      />
      <div className="btn-back-shadow-container absolute top-0 left-0 size-full">
        <div className="btn-back-shadow size-full"></div>
      </div>
      <div className="btn-back-container w-[9rem] h-[2rem]">
        <div className="btn-back size-full flex items-center justify-center">
          <p className="text-white uppercase pl-4 font-bowlbyregular">back</p>
        </div>
      </div>
    </div>
  );
};
