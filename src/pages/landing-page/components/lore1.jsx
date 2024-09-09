import { BottomRightCornerSVG, TopLeftCornerSVG } from "@/assets";
import { Asteroid, planets } from "../assets";

export const LoreOne = () => {
  return (
    <div className="w-full relative">
      <img
        src={Asteroid}
        className="absolute right-[-10%] rotate-[90deg] top-1/5 w-1/3"
        alt="Asteroid 1"
      />
      <img
        src={Asteroid}
        className="absolute top-[60%] left-[-20%] w-1/2"
        alt="Asteroid 2"
      />
      <img
        src={Asteroid}
        className="absolute rotate-[110deg] bottom-[-10%] right-[-10%] w-2/3"
        alt="Asteroid 3"
      />
      <img
        src={planets}
        className="absolute w-2/3 left-1/2 -translate-x-1/2 top-[40%]"
        alt="Planets"
      />
      <div
        className="p-3 max-w-[254px] absolute top-[25%] ml-6"
        style={{ background: "rgba(184, 184, 184, 0.30)" }}
      >
        <div className="absolute top-0 left-0">
          <TopLeftCornerSVG color={"white"} />
        </div>
        <p className="text-white text-xs font">
          Five outer dimensional home worlds lie in ruin. Those brave enough to enter the ancient gateways were transported to the last bastion of hope: <br />
          <b>Astra Nova</b>
        </p>
        <div className="absolute bottom-0 right-0">
          <BottomRightCornerSVG color={"white"} />
        </div>
      </div>
    </div>
  );
};
