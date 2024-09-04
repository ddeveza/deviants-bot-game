import { CloudSVG } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";
import { UpgradeModal } from "@/components/upgrade-modal";

const Deviants = () => {
  return (
    <div className="flex bg-[#00CEB5] flex-1 border border-blue-500 h-full">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col border border-red-500 h-auto w-full justify-between"
      >
        <div className=" flex items-center justify-center border">
          <StatsContainer />
        </div>
        <div className="flex items-center justify-center w-full border">
          <DeviantsCarousel />
        </div>
        <div className="flex justify-between z-10 pb-10">
          <UpgradeModal>
            <UpgradeButton />
          </UpgradeModal>
          <StatsButton />
        </div>
      </div>
      ;
    </div>
  );
};

export default Deviants;
