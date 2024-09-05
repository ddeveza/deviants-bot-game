import { CloudSVG, incubatorImg } from "@/assets"
import { UpperVector } from "./component/upper-vector";
import LowerVector from "./component/lower-vector";
import { useNavigate } from "react-router-dom";
import { PAGES } from "@/constant/pages";

const IncubationLanding = () => {
  const navigate = useNavigate();
  const handlePlay =() => {
    navigate(PAGES.incubation);
  }
  return (
    <div
      style={{ background: `center no-repeat url(${CloudSVG}) #00CEB5`, backgroundSize: "cover"}}
      className="flex flex-col items-center justify-center h-full uppercase"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center py-1.5 px-14 bg-[#656565]/[0.2]">
          <div className="absolute top-0 left-0"><UpperVector/></div>
          <div className="text-black text-center font-inter text-xs font-normal leading-normal">Achievement</div>
          <div className="absolute bottom-0 right-0"><LowerVector/></div>
        </div>
        <div className="mt-2 font-bold text-2xl max-w-52 text-center">
           You unlocked an incubator!
        </div>
      </div>

     <img src={incubatorImg} alt='incubator'/> 
     <button
        className="rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-extrabold uppercase"
        onClick={handlePlay}
      >
        Play Game
      </button>
    </div>
  );
}

export default IncubationLanding