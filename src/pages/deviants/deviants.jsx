import { CloudSVG } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatsButton } from "@/components/stats-button";
import { StatsContainer } from "@/components/stats-container";
import { UpgradeButton } from "@/components/upgrade-button";
import { UpgradeModal } from "@/components/upgrade-modal";

const Deviants = () => {
  return (
    <div className="bg-[#00CEB5]">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col min-h-screen space-y-2"
      >
        <div className=" flex items-center justify-center border">
          <StatsContainer />
        </div>
        <div className="flex items-center justify-center w-full border">
          <DeviantsCarousel />
        </div>
        <div className="flex justify-between z-10 border">
          <UpgradeModal>
            <UpgradeButton />
          </UpgradeModal>
          <StatsButton />
        </div>
      </div>
    </div>
  );
};

export default Deviants;
