import { useState } from "react";
import { galaxyBG } from "../assets";
import { OnboardingOne } from "../components/onboarding1";
import { OnboardingTwo } from "../components/onboarding2";
import NewDeviant from "./new-deviant";

const Onboarding = () => {
  const [onboard, setOnboard] = useState(1);
  let component;
  switch (onboard) {
    case 1:
      component = <OnboardingOne />;
      break;
    case 2:
      component = <OnboardingTwo />;
      break;
    default:
      component = <OnboardingOne />;
      break;
  }

  const handleOnboard = () => {
    setOnboard((prev) => prev + 1);
  };

  return (
    <div
      style={{
        background: `center no-repeat url(${galaxyBG})`,
        backgroundSize: "100% 145%",
        backgroundPosition: "0 90%",
      }}
      onClick={handleOnboard}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex min-h-screen w-full z-10">{onboard <= 2 ? component : <NewDeviant />}</div>
    </div>
  );
};

export default Onboarding;
