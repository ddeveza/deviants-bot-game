import { flyAngelImg } from "@/assets";
import { cn } from "@/lib/utils";
import { DeviantStat } from "../deviant-stat";
import { Modal } from "../modal";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { DEVIANT } from "@/constant/constants";
import DeviantCharacters from "../deviant-characters";
import SvgFilter from "../ui/svg-filter";

export const StatModal = ({ children }) => {
  return (
    <Modal
      title="Deviant Stats"
      description="Shows the stats of the deviant"
      triggerButton={children}
      disabledCloseButton={true}
      className={"max-w-[360px] bg-transparent border-none p-0 gap-0"}
    >
      {/* Outer SVG (Shadow) */}
      <div className="relative flex flex-col justify-center items-center">
        <p className="text-white text-xl absolute -translate-x-1/2 left-1/2 -top-10 font-bowlby uppercase">Stats</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356 439"
          fill="none"
          className="absolute -z-10 top-1.5 w-full"
        >
          <path
            d="M0.25 35.3922V428.75C0.25 434.273 4.72715 438.75 10.25 438.75H345.75C351.273 438.75 355.75 434.273 355.75 428.75V402.75V10.75C355.75 5.22715 351.273 0.75 345.75 0.75H34.8921C32.24 0.75 29.6964 1.80357 27.8211 3.67893L3.17893 28.3211C1.30357 30.1964 0.25 32.74 0.25 35.3922Z"
            fill="#DADADA"
          />
        </svg>

        {/* Inner SVG (Light) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356 439"
          fill="none"
          className="w-full relative"
        >
          <path
            d="M0.25 34.8922V428.25C0.25 433.773 4.72715 438.25 10.25 438.25H345.75C351.273 438.25 355.75 433.773 355.75 428.25V402.25V10.25C355.75 4.72715 351.273 0.25 345.75 0.25H34.8921C32.24 0.25 29.6964 1.30357 27.8211 3.17893L3.17893 27.8211C1.30357 29.6964 0.25 32.24 0.25 34.8922Z"
            fill="white"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center">
          <SvgFilter roundCorner={2} id="clip-card-filter" />
          <div className="w-full h-1/2 p-2 clip-card-container relative">
            <div className="size-full clip-card-deviant" style={{ backgroundColor: DEVIANT[0].primaryColor }}>
              <DeviantCharacters species={DEVIANT[0].species} evolutionPhase={DEVIANT[0].evolutionPhase} pose="Card" className="size-full scale-110 origin-center relative" />

            </div>
          </div>
          {/* Deviant Stats */}
          <div className="flex flex-col space-y-5 px-2 mt-1.5 w-full relative">
            <DeviantStat
              attribute={"hp"}
              value={1500}
              currentLvl={1}
            />
            <DeviantStat
              attribute={"max energy"}
              value={500}
              currentLvl={1}
            />
            <DeviantStat
              attribute={"restore"}
              value={40}
              currentLvl={1}
            />
            <DeviantStat
              attribute={"power"}
              value={40}
              currentLvl={1}
            />
          </div>
        </div>

        <div className="flex m-auto mt-6 relative">
          <DialogClose asChild>
            <Button className={cn("rounded-full px-7 bg-white text-black font-extrabold uppercase m-auto")}>Close</Button>
          </DialogClose>
        </div>
      </div>
    </Modal>
  );
};
