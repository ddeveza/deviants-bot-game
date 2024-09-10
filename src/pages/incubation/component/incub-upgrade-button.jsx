import { PvpLogo } from "@/assets";
import SvgFilter from "@/components/ui/svg-filter";

const IncubButtonUpgrade = () => {
  return (
    <div className="relative cursor-pointer w-[7rem]">
      <SvgFilter
        dropShadowColor="#BBBBBB"
        roundCorner="2"
        id="btn-modal-filter"
      />
      <div className="relative btn-left-modal-container w-full h-[4rem] pb-[6px]">
        <div className="relative btn-left-modal size-full"></div>
      </div>
      {/* Icon and Text */}
      <div className="absolute bottom-0 left-0 flex flex-col w-full h-full items-start justify-end pl-2 pb-3">
        <div className="flex flex-col items-center justify-end">
          <div className="w-16 h-16">
            <img
              src={PvpLogo}
              alt="incubators-upgrade"
            />
          </div>
          <p className="text-xs font-bowlby">Incubators</p>
        </div>
      </div>
    </div>
  );
};

export default IncubButtonUpgrade;
