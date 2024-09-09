import { CloudSVG } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatModal } from "@/components/modals/stat-modal";
import { UpgradeModal } from "@/components/modals/upgrade-modal";
import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";

const Deviants = () => {
  return (
    <div className="bg-[#00CEB5] relative flex flex-col size-full justify-between">
      <div className="absolute size-full top-0 left-0 z-[0]">
        <CloudSVG className="size-full relative" />
      </div>
      <div className="relative size-full z-[1]">
        <div className="absolute top-0 left-0 w-full flex items-center justify-center z-[2] ">
          <StatsContainer />
        </div>
        <div className="relative size-full flex items-center justify-center w-full z-[1]">
          <DeviantsCarousel />
        </div>
        <div className="absolute w-full bottom-[6rem] left-0 flex justify-between z-[11]">
          <UpgradeModal>
            <UpgradeButton />
          </UpgradeModal>
          <StatModal>
            <StatsButton />
          </StatModal>
        </div>
      </div>
    </div>
  );
};

export default Deviants;
