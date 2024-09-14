/* eslint-disable react/prop-types */

import { Modal } from "@/components/modal";
import { BoostSVG } from "../assets";
import { BoostItem } from "../component/incub-boost-item";

const DeviantsModal = ({ children, deviant }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl p-0 min-h-[500px] translate-y-[-60%]"
    >
      <div className="bg-white rounded-3xl h-[99%] p-4 relative">
        <div className="flex gap-1 items-center m-auto w-max">
          <div className="w-8 h-8">
          </div>
          <p className="text-sm uppercase font-extrabold">{deviant.species + " " + deviant.evolutionPhase}</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">Deviants</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              
            </div>
            <div className="col-span-1">
              
            </div>
            <div className="col-span-1">
              
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeviantsModal;
