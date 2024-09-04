/* eslint-disable react/prop-types */

import { Modal } from "@/components/modal";
import { BoostButton } from "../component/incub-boost-button";
import { StatUpgrade } from "@/components/stat-upgrades";
import { EnergySVG, HpSVG, PowerSVG, RestoreSVG } from "@/assets";
import { BoostSVG } from "../assets/svg";


const BoostModal = ({ children }) => {
 return <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className="max-w-[360px] bg-[#BBBBBB] border-none rounded-3xl p-0 min-h-[500px] translate-y-[-60%]"
    >
      <div className="bg-white rounded-3xl h-[99%] p-4 relative">
        <div className="flex gap-2 items-center m-auto w-max">
        <BoostSVG/>
        <p className="text-sm uppercase font-extrabold">Boost</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">base stats</p>
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
        <div className="flex flex-col mt-3">
          <p className="text-xs uppercase my-2">full upgrade</p>
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
      
      </div>
    </Modal>
};

export default BoostModal           ;