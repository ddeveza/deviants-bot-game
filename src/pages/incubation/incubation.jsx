import { CloudSVG } from "@/assets";
import { IncubationCarousel } from "./component/incub-carousel";
import { StatsContainer } from "./component/stats-container";
import EnergyBar from "@/assets/svg/energy-bar";
import IncubButtonUpgrade from "./component/incub-upgrade-button";
import { BoostButton } from "./component/incub-boost-button";
import IncubatorsModal from "./modal/incubators-modal";
import BoostModal from "./modal/boost-modal";
import { IncubationCarouselEmpty } from "./component/incub-empty-carousel";
import { useState } from "react";

const Incubation = () => {
  const [page, setPage] = useState(2);
  let isEmpty = page === 1 || page == 3;
  let carousel;

  switch (page) {
    case 1:
      carousel = (
        <IncubationCarouselEmpty
          page={page}
          setPage={setPage}
        />
      );
      break;
    case 2:
      carousel = (
        <IncubationCarousel
          page={page}
          setPage={setPage}
        />
      );
      break;
    case 3:
      carousel = (
        <IncubationCarouselEmpty
          page={page}
          setPage={setPage}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="relative flex bg-[#00CEB5] flex-1 h-full">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col  h-auto w-full justify-between"
      >
        <div className=" flex items-center justify-center ">
          <StatsContainer isEmpty={isEmpty} />
        </div>
        <div className="flex items-center justify-center w-full  h-full">{carousel}</div>

        <div className="flex justify-between z-10  pb-10">
          {!isEmpty && (
            <>
             
              <IncubatorsModal>
                <IncubButtonUpgrade />
              </IncubatorsModal>
              <BoostModal>
                <BoostButton />
              </BoostModal>
            </>
          )}
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full -bottom-14">{!isEmpty && <EnergyBar percentage={100} />}</div>
    </div>
  );
};

export default Incubation;
