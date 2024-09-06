import { BottomRightCornerSVG, TopLeftCornerSVG } from "@/assets";
import { triangleOne } from "../assets";

export const LoreFour = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <p className="font-chakra text-3xl max-w-[320px] uppercase text-center text-white font-bold leading-[100%]">but they weren’t the first ones there...</p>

      <img
        src={triangleOne}
        className="w-full"
      />

      <div className="flex flex-col items-center justify-between gap-4">
        <div
          className="relative py-2 px-4 w-max"
          style={{ background: "rgba(184, 184, 184, 0.30)" }}
        >
          <div className="absolute top-0 left-0">
            <TopLeftCornerSVG color={"white"} />
          </div>
          <p className="text-white text-xs uppercase">astra nova's first inhabitants</p>
          <div className="absolute bottom-0 right-0">
            <BottomRightCornerSVG color={"white"} />
          </div>
        </div>

        <p className="font-chakra text-3xl max-w-[320px] uppercase text-center text-white font-bold leading-[100%]">meet the deviants</p>
      </div>
    </div>
  );
};
