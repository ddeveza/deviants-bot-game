import { HpSVG, UpgradeSVG } from "@/assets";
import { Modal } from "./modal";
import { StatUpgrade } from "./stat-upgrades";

export const UpgradeModal = ({ children }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-xs min-w-s bg-red-500 border-none rounded-3xl p-0 min-h-[500px] translate-y-[-60%]"
    >
      <div className="bg-blue-500 rounded-3xl h-[99%] p-4">
        <div className="flex gap-2 items-center m-auto w-max">
          <UpgradeSVG className="w-7 h-7" />
          <p className="font-extrabold uppercase text-sm">Deviant Upgrades</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">base stats</p>
          <div className="grid grid-cols-2">
            <div className="col-span-1 ">
              <StatUpgrade
                attribute={"HP"}
                currentLvl={1}
                xp={500}
                icon={<HpSVG />}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
