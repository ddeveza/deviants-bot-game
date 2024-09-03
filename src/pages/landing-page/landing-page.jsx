import { deviantLogo, flyDevilDeviant } from "@/assets";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
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
      <button className='rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-extrabold uppercase'>Play Game</button>
    </div>
  );
};

export default LandingPage;
