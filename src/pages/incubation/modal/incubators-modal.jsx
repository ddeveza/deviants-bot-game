/* eslint-disable react/prop-types */

import { Modal } from "@/components/modal";
import IncubatorList from "../component/incubator-list";
import { incubatorsUpgradeSVG } from "@/assets";

const IncubatorsModal = ({ children }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl p-0 min-h-[400px] translate-y-[-60%]"
    >
      <div className=" bg-white rounded-3xl h-[99%] p-4 ">
        <div className="flex gap-2 items-center m-auto w-max pb-2">
          <img
            src={incubatorsUpgradeSVG}
            alt=""
            className="h-8"
          />
          <p className="font-extrabold uppercase text-sm">Incubators</p>
        </div>
        <div className="h-[90%] relative flex item-center justify-center overflow-y-auto ">
          <IncubatorList />
        </div>
      </div>
    </Modal>
  );
};

export default IncubatorsModal;
