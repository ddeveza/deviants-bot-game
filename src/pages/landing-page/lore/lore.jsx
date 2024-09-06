import { lore1, lore2, lore3, lore4 } from "@/assets";
import { PAGES } from "@/constant/pages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Lore = () => {
  const [lore, setLore] = useState(1);
  const navigate = useNavigate();

  let image;
  switch (lore) {
    case 2:
      image = lore2;
      break;
    case 3:
      image = lore3;
      break;
    case 4:
      image = lore4;
      break;
    default:
      image = lore1;
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
    <div className="p-0 min-h-screen">
      <img
        src={image}
        alt="lore"
        className="w-full"
        onClick={handleLore}
      />
    </div>
  );
};

export default Lore;
