import { UpgradeSVG } from "@/assets";
import SvgFilter from "./ui/svg-filter";

export const UpgradeButton = () => {
  return (
    <div className="relative cursor-pointer w-[7rem]">
      <SvgFilter dropShadowColor="#BBBBBB" roundCorner="2" id="btn-modal-filter" />
      <div className="relative btn-left-modal-container w-full h-[4rem] pb-[6px]">
        <div className="relative btn-left-modal size-full">

        </div>
      </div>
      {/* Icon and Text */}
      <div className="absolute bottom-0 left-0 flex flex-col w-full h-full items-start justify-end pl-2 pb-3">
        <div className="flex flex-col items-center justify-end">
          <div className="w-12 h-12">
            <UpgradeSVG className="size-full relative" />
          </div>
          <p className="text-sm  font-bowlby">Upgrades</p>
        </div>
      </div>

    </div>
  );
};
