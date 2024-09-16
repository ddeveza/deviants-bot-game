import { EnergySVG } from "@/assets";
import { Modal } from "../modal";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

export const ConfirmationModal = ({ children, attribute, currentLevel, upgradeLevel, cost ,open , onClose }) => {
  const handleClose = () => {
    onClose(false);
  }
  return (
    <Modal
      open={open}
      title="Upgrade Deviant"
      description="Upgrades a Deviant's stats"
      disabledCloseButton
      className="max-w-[360px] bg-[#BBB] border-none rounded-3xl sm:rounded-3xl p-0 min-h-[300px] translate-y-[-60%]"
    >
      <div className="flex flex-col bg-[#DCDCDC] rounded-3xl h-[98%] p-4 py-10 gap-6">
        <div className="flex items-center m-auto w-max">
          <div className="w-8 h-8">
            <EnergySVG className="size-full" /> {/*Change Icon*/}
          </div>
          <p className="text-sm font-bowlby lining-nums proportional-nums tracking-[-0.56px]">upgrade {attribute}</p> {/*Change attribute*/}
        </div>

        <div className="flex justify-center">
          <p className="font-chakra lining-nums proportional-nums tracking-[-0.64px] text-center leading-[20px] p-4">{`You are about to upgrade this Deviant’s ${attribute} from LVL ${currentLevel} to LVL ${upgradeLevel}`}</p>{" "}
          {/*Change atttribute and lvl*/}
        </div>

        <div className="flex flex-col justify-center items-center mt-3 rounded-xl bg-[#FCFCFC] p-4 gap-1">
          <p className="font-ibmMono lining-nums proportional-nums text-[8px] leading-[8px] uppercase">Costs</p>
          <p className="font-bowlby text-xl leading-[20px] uppercase lining-nums proportional-nums">{cost}</p> {/*Change cost*/}
        </div>

       
          <div className="flex flex-col gap-2 lining-nums proportional-nums text-white tracking-[-0.64px] font-bowlby">
            <Button className="bg-[#AAA] rounded-lg py-6 w-full" onClick={handleClose}>cancel</Button>
            <Button
              className="rounded-lg py-6 w-full"
              style={{ background: "linear-gradient(90deg, #FF7C52 0%, #FF110B 100%)" }}
              onClick={handleClose}
            >
              upgrade
            </Button>
          </div>
        
      </div>
    </Modal>
  );
};
