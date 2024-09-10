import { CloudSVG } from "@/assets";
import EnergyBar from "@/assets/svg/energy-bar";
import { StatsContainer } from "@/components/stats-container";
import { useState } from "react";
import { BoostButton } from "./component/incub-boost-button";
import { IncubationCarousel } from "./component/incub-carousel";
import { IncubationCarouselEmpty } from "./component/incub-empty-carousel";
import IncubButtonUpgrade from "./component/incub-upgrade-button";
import BoostModal from "./modal/boost-modal";
import IncubatorsModal from "./modal/incubators-modal";

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
    <div className="bg-[#00CEB5] relative flex flex-col size-full justify-between">
      <div className="absolute size-full top-0 left-0 z-[0]">
        <CloudSVG className="size-full relative" />
      </div>
      <div className="relative size-full z-[1]">
        <div className="absolute top-0 left-0 w-full flex items-center justify-center z-[2] ">
          <StatsContainer
            isEmpty={isEmpty}
            isIncubation={true}
          />
        </div>
        <div className="relative size-full flex items-center justify-center w-full z-[1]">{carousel}</div>
        <div className="absolute w-full bottom-[6rem] left-0 flex justify-between z-[11]">
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

        <div className="absolute flex items-center justify-center w-full bottom-[-1rem]">{!isEmpty && <EnergyBar percentage={100} />}</div>
      </div>
    </div>
  );
};

export default Incubation;
