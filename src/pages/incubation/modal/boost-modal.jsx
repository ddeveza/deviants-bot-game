/* eslint-disable react/prop-types */

import { Modal } from "@/components/modal";
import { BoostSVG } from "../assets";
import { BoostItem } from "../component/incub-boost-item";

const BoostModal = ({ children }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl p-0 min-h-[500px] translate-y-[-60%]"
    >
      <div className="bg-white rounded-3xl h-[99%] p-4 relative">
        <div className="flex gap-1 items-center m-auto w-max">
          <div className="w-8 h-8">
            <BoostSVG className="size-full relative" />
          </div>
          <p className="text-sm uppercase font-extrabold">Boost</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">Regular Boosts</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <BoostItem
                isPremium={false}
                title={"Efficiency Enhancer"}
                shardsValue={200}
              />
            </div>
            <div className="col-span-1">
              <BoostItem
                isPremium={false}
                title={"Full Energy"}
                shardsValue={200}
              />
            </div>
            <div className="col-span-1">
              <BoostItem
                isPremium={false}
                title={"Time Warp"}
                shardsValue={1000}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">Premium Boost</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <BoostItem
                isPremium
                title={"Skip Incubation"}
                tonValue={1}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BoostModal;
