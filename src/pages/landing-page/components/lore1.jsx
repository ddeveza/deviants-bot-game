import { BottomRightCornerSVG, TopLeftCornerSVG } from "@/assets";
import { AsteroidOne, AsteroidThree, AsteroidTwo, planets } from "../assets";

export const LoreOne = () => {
  return (
    <div className="w-full relative">
      <img
        src={AsteroidOne}
        className="absolute right-0 top-1/4"
        alt="Asteroid 1"
      />
      <img
        src={AsteroidTwo}
        className="absolute top-[60%] left-0"
        alt="Asteroid 2"
      />
      <img
        src={AsteroidThree}
        className="absolute bottom-0 right-0"
        alt="Asteroid 3"
      />
      <img
        src={planets}
        className="absolute left-1/2 -translate-x-1/2 top-[40%]"
        alt="Planets"
      />
      <div
        className="p-3 max-w-[254px] absolute top-[35%] ml-6"
        style={{ background: "rgba(184, 184, 184, 0.30)" }}
      >
        <div className="absolute top-0 left-0">
          <TopLeftCornerSVG color={"white"} />
        </div>
        <p className="text-white text-xs">
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
