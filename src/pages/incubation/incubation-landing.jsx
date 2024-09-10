import { CloudSVG, incubatorImg } from "@/assets";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";
import LowerVector from "./component/lower-vector";
import { UpperVector } from "./component/upper-vector";

const IncubationLanding = () => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(PAGES.incubation);
  };
  return (
    <div className="bg-[#00CEB5] flex flex-col items-center justify-center h-full uppercase">
      <div className="absolute size-full top-0 left-0 z-[0]">
        <CloudSVG className="size-full relative" />
      </div>
      <div className="flex flex-col items-center justify-center z-[1]">
        <div className="relative flex items-center justify-center py-1.5 px-14 bg-[#656565]/[0.2]">
          <div className="absolute top-0 left-0">
            <UpperVector />
          </div>
          <div className="text-black text-center font-inter text-xs font-normal leading-normal">Achievement</div>
          <div className="absolute bottom-0 right-0">
            <LowerVector />
          </div>
        </div>
        <div className="mt-2 font-bold text-2xl max-w-52 text-center font-chakra">You unlocked an incubator!</div>
      </div>

      <img
        src={incubatorImg}
        alt="incubator"
        className="z-[2]"
      />
      <button
        className="rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-normal leading-5 font-bowlby lining-nums  proportional-nums -tracking-[0.8px] z-[3]"
        onClick={handlePlay}
      >
        Continue
      </button>
    </div>
  );
};

export default IncubationLanding;
