import { onboard1, onboard2 } from "@/assets";
import { useState } from "react";
import NewDeviant from "./new-deviant";


const Onboarding = () => {
  const [onboard, setOnboard] = useState(1);
  let imageSrc;
  switch (onboard) {
    case 1:
      imageSrc= onboard1;
      break;
      case 2:
        imageSrc= onboard2;
        break;
    default:
      imageSrc= onboard1;
      break;
  }

  const handleOnboard = () => {
    setOnboard(prev => prev+1);
  }


  return (
    <div className="min-h-screen">
      {onboard <= 2 ? (
        <img
          src={imageSrc}
          alt="onboard"
          onClick={handleOnboard}
        />
      ) : (
        <NewDeviant />
      )}
    </div>
  );
}

export default Onboarding