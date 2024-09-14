import { EnergySVG, HpSVG, PowerSVG, RestoreSVG, UpgradeSVG } from "@/assets";
import { Modal } from "../modal";
import { StatUpgrade } from "../stat-upgrades";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

export const UpgradeModal = ({ children }) => {
  return (
    <Modal
      title="Upgrade Deviant"
      description="Upgrades a Deviant's stats"
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl sm:rounded-3xl p-0 min-h-[300px] translate-y-[-60%]"
    >
      <div className="bg-white rounded-3xl h-[98%] p-4">
        <div className="flex gap-2 items-center m-auto w-max">
          <div className="w-7 h-7">
            <UpgradeSVG className="size-full" />
          </div>
          <p className="text-sm font-bowlby">Deviant Upgrades</p>
        </div>

        {/* Base Stats */}
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2 font-ibmMono">base stats</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <StatUpgrade
                attribute={"HP"}
                currentLvl={1}
                xp={500}
                icon={<HpSVG />}
                iconColor={"#3BFBE4"}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"Power "}
                currentLvl={1}
                xp={500}
                icon={<PowerSVG />}
                iconColor={"#FF6A61"}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"max energy"}
                currentLvl={1}
                xp={200}
                icon={<EnergySVG />}
                iconColor={"#06CAFF"}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"HP"}
                currentLvl={1}
                xp={200}
                icon={<RestoreSVG />}
                iconColor={"#3BFBE4"}
              />
            </div>
          </div>
        </div>

        {/* Full Upgrade */}
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2 font-ibmMono">full upgrade</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <StatUpgrade
                attribute={"HP"}
                currentLvl={1}
                xp={0.1}
                icon={<HpSVG />}
                iconColor={"white"}
                isFullUpgrade={true}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"Power "}
                currentLvl={1}
                xp={0.1}
                icon={<PowerSVG />}
                isFullUpgrade={true}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"max energy"}
                currentLvl={1}
                xp={0.2}
                icon={<EnergySVG />}
                isFullUpgrade={true}
              />
            </div>
            <div className="col-span-1">
              <StatUpgrade
                attribute={"HP"}
                currentLvl={1}
                xp={0.2}
                icon={<RestoreSVG />}
                isFullUpgrade={true}
              />
            </div>
          </div>
        </div>
        <div className="flex m-auto translate-y-20">
          <DialogClose asChild>
            <Button className="rounded-full px-7 bg-white text-black font-bowlby m-auto">Close</Button>
          </DialogClose>
        </div>
      </div>
    </Modal>
  );
};
