import { CloudSVG } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatsModal } from "@/components/stat-modal";
import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";
import { UpgradeModal } from "@/components/upgrade-modal";

const Deviants = () => {
  return (
    <div
      style={{ background: `center no-repeat url(${CloudSVG}) #00CEB5`, backgroundSize: "cover" }}
      className="flex flex-col border border-red-500 w-full justify-between flex-1 h-full"
    >
      <div className=" flex items-center justify-center border">
        <StatsContainer />
      </div>
      <div className="flex items-center justify-center w-full border">
        <DeviantsCarousel />
      </div>
      <div className="flex justify-between z-10 border pb-10">
        <UpgradeModal>
          <UpgradeButton />
        </UpgradeModal>
        <StatsModal>
          <StatsButton />
        </StatsModal>
      </div>
    </div>
  );
};

export default Deviants;
