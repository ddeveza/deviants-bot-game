import { EnergySVG, HpSVG, PowerSVG, RestoreSVG, UpgradeSVG } from "@/assets";
import { Modal } from "../modal";
import { StatUpgrade } from "../stat-upgrades";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";
import { ConfirmationModal } from "./confirmation-modal";

const statsUpgradeMenu = [
  {
    attribute: "HP",
    currentLvl: 1,
    xp: 500,
    icon: <HpSVG />,
    iconColor: "#3BFBE4",
  },
  {
    attribute: "Power",
    currentLvl: 1,
    xp: 500,
    icon: <PowerSVG />,
    iconColor: "#FF6A61",
  },
  {
    attribute: "max energy",
    currentLvl: 1,
    xp: 200,
    icon: <EnergySVG />,
    iconColor: "#06CAFF",
  },
  {
    attribute: "Restore",
    currentLvl: 1,
    xp: 200,
    icon: <RestoreSVG />,
    iconColor: "#3BFBE4",
  },
];

const statsFullUpgradeMenu = [
  {
    attribute: "HP",
    currentLvl: 1,
    xp: 0.1,
    icon: <HpSVG />,
    iconColor: "white",
  },
  {
    attribute: "Power",
    currentLvl: 1,
    xp: 0.1,
    icon: <PowerSVG />,
  },
  {
    attribute: "max energy",
    currentLvl: 1,
    xp: 0.2,
    icon: <EnergySVG />,
  },
  {
    attribute: "Restore",
    currentLvl: 1,
    xp: 0.2,
    icon: <RestoreSVG />,
  },
];

export const UpgradeModal = ({ children }) => {
  //TODO: use global state for modal
  const [open, setOpen] = useState(false);
  const [openIndividualUpgrade, setOpenIndividualUpgrade] = useState(false);
  const [selectedUpgrade, setSelectedUpgrade] = useState(null);
  const handleOpenConfirmation = (upgrade) => {
    setSelectedUpgrade(upgrade);
    setOpen(false) //close upgrade menu
    setOpenIndividualUpgrade(true)
  }
  return (
    <>
    <Modal
      open={open}
      setOpen={setOpen}
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
            {statsUpgradeMenu.map(({ attribute, currentLvl, xp, icon, iconColor }) => (
              <div
                key={attribute}
                className="col-span-1"
                onClick = {()=>{handleOpenConfirmation({attribute, currentLvl, xp, icon, iconColor, isFullUpgrade:true})}}
              >
                <StatUpgrade
                  attribute={attribute}
                  currentLvl={currentLvl}
                  xp={xp}
                  icon={icon}
                  iconColor={iconColor}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Upgrade */}
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2 font-ibmMono">full upgrade</p>
          <div className="grid grid-cols-2 gap-2">
            {statsFullUpgradeMenu.map((upgrade) => (
              <div
                key={upgrade.attribute}
                className="col-span-1"
                onClick = {()=>{handleOpenConfirmation({...upgrade, isFullUpgrade:true})}}
              >
                <StatUpgrade
                  attribute={upgrade.attribute}
                  currentLvl={upgrade.currentLvl}
                  xp={upgrade.xp}
                  icon={upgrade.icon}
                  iconColor={upgrade?.iconColor}
                  isFullUpgrade
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex m-auto translate-y-20">
          <DialogClose asChild>
            <Button className="rounded-full px-7 bg-white text-black font-bowlby m-auto">Close</Button>
          </DialogClose>
        </div>
      </div>
    </Modal>
    <ConfirmationModal
      onClose={setOpenIndividualUpgrade}
      open={openIndividualUpgrade}
      attribute={selectedUpgrade?.attribute}
      currentLevel={selectedUpgrade?.currentLvl}
      upgradeLevel={selectedUpgrade?.upgradeLevel}
      cost={`${selectedUpgrade?.xp} ${selectedUpgrade?.isFullUpgrade ? "TON" : "XP"}`}
    />
    </>
    
  );
};
