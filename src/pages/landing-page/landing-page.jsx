import { deviantLogo, flyDevilDeviant } from "@/assets";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  let hasDeviants = false; //TODO: need to make it state to check if user has deviant already.
  let navigate = useNavigate();
  const handlePlay = () => {
    //TODO:: need to identify here if the user has no current deviants
    if (!hasDeviants) {
      navigate(PAGES.lore);
    }
  };
  return (
    <div
      style={{ background: `top no-repeat url(${flyDevilDeviant}) #CB1800`, backgroundSize: "contain", backgroundPositionY: "60px" }}
      className="flex flex-col h-full justify-center items-center space-y-[600px]"
    >
      <img
        src={deviantLogo}
        alt="deviant-logo"
        className="h-auto"
      />
      <button
        className="rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-extrabold uppercase"
        onClick={handlePlay}
      >
        Play Game
      </button>
    </div>
  );
};

export default LandingPage;
