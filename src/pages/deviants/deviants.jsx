import { CloudSVG } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatModal } from "@/components/modals/stat-modal";
import { UpgradeModal } from "@/components/modals/upgrade-modal";
import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";

const Deviants = () => {
  return (
    <div
      style={{ background: `center no-repeat url(${CloudSVG})`, backgroundColor: "#00CEB5", backgroundSize: "cover" }}
      className="flex flex-col w-full justify-between flex-1 h-full"
    >
      <div className=" flex items-center justify-center">
        <StatsContainer />
      </div>
      <div className="flex items-center justify-center w-full ">
        <DeviantsCarousel />
      </div>
      <div className="flex justify-between z-20 pb-10">
        <UpgradeModal>
          <UpgradeButton />
        </UpgradeModal>
        <StatModal>
          <StatsButton />
        </StatModal>
      </div>
    </div>
  );
};

export default Deviants;
