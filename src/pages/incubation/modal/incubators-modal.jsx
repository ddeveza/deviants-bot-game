/* eslint-disable react/prop-types */

import { Modal } from "@/components/modal";
import IncubatorList from "../component/incubator-list";

const IncubatorsModal = ({ children }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl p-0 min-h-[500px] translate-y-[-60%]"
    >
      <div className=" bg-white rounded-3xl h-[99%] p-4 ">
        <div className="flex justify-center  border-red-500 border h-full">
          <IncubatorList />
        </div>
      </div>
    </Modal>
  );
};

export default IncubatorsModal;
