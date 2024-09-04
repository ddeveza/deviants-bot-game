import { CloudSVG } from "@/assets";
import { StatsButton } from "@/components/stats-button";
import { UpgradeButton } from "@/components/upgrade-button";
import { UpgradeModal } from "@/components/upgrade-modal";
import { IncubationCarousel } from "./component/incub-carousel";
import { StatsContainer } from "./component/stats-container";
import EnergyBar from "@/assets/svg/energy-bar";
import IncubButtonUpgrade from "./component/incub-upgrade-button";
import { BoostButton } from "./component/incub-boost-button";

const Incubation = () => {
 
  return (
    <div className="relative flex bg-[#00CEB5] flex-1  h-full border-2 border-red-600">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col  h-auto w-full justify-between"
      >
        <div className=" flex items-center justify-center ">
          <StatsContainer />
        </div>
        <div className="flex items-center justify-center w-full ">
          <IncubationCarousel />
        </div>
        <div className="flex justify-between z-10  pb-10">
          <UpgradeModal>
            <IncubButtonUpgrade />
          </UpgradeModal>
          <BoostButton />
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full -bottom-14">
          <EnergyBar percentage={100}/>
      </div>
      
    </div>
  );
};

export default Incubation;
