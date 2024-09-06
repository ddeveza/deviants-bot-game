import { PAGES } from "@/constant/pages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { galaxyBG } from "../assets";
import { LoreOne } from "../components/lore1";
import { LoreTwo } from "../components/lore2";
import { LoreThree } from "../components/lore3";
import { LoreFour } from "../components/lore4";

const Lore = () => {
  const [lore, setLore] = useState(1);
  const navigate = useNavigate();

  let component;
  switch (lore) {
    case 2:
      component = <LoreTwo />;
      break;
    case 3:
      component = <LoreThree />;
      break;
    case 4:
      component = <LoreFour />;
      break;
    default:
      component = <LoreOne />;
      break;
  }

  const handleLore = () => {
    if (lore === 4) {
      navigate(PAGES.onboard);
      return;
    }
    setLore((prev) => prev + 1);
  };

  return (
    <div
      style={{
        background: `center no-repeat url(${galaxyBG})`,
        backgroundSize: "100% 145%",
        backgroundPosition: "0 90%",
      }}
      onClick={handleLore}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex min-h-screen w-full z-10">{component}</div>
    </div>
  );
};

export default Lore;
