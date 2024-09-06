import { deviantLogo, flyDevilDeviant } from "@/assets";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";
import { cloudSVG } from "./assets";
const LandingPage = () => {
  let hasDeviants = false; //NOTE: need to make it state to check if user has deviant already.
  let navigate = useNavigate();
  const handlePlay = () => {
    //NOTE: need to identify here if the user has no current deviants
    if (!hasDeviants) {
      navigate(PAGES.lore);
    }
  };
  return (
    <div
      style={{ background: `top no-repeat url(${cloudSVG}) #CB1800`, backgroundSize: "cover", backgroundPositionY: "60px" }}
      className="flex flex-col h-full"
    >
      <div
        style={{ background: `top no-repeat url(${flyDevilDeviant})`, backgroundSize: "cover", backgroundPositionY: "60px" }}
        className="flex flex-col h-full justify-between items-center my-10"
      >
        <img
          src={deviantLogo}
          alt="deviant-logo"
          className="h-auto"
        />

        <Button
          className="font-bowlby rounded-[20px] py-2.5 px-8 text-[161313] bg-white"
          onClick={handlePlay}
        >
          Play Game
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
