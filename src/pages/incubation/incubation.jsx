import { CloudSVG } from "@/assets";

import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";
import { UpgradeModal } from "@/components/upgrade-modal";
import { IncubationCarousel } from "./incub-carousel";

const Incubation = () => {
  return (
    <div className="flex bg-[#00CEB5] flex-1  h-full">
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
            <UpgradeButton />
          </UpgradeModal>
          <StatsButton />
        </div>
      </div>
      
    </div>
  );
};

export default Incubation;
