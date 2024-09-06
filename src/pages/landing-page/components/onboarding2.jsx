import { LightSVG, triangleOne } from "../assets";

export const OnboardingTwo = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <div className="border">
        {/* Top */}
        <LightSVG classname={"absolute top-0 left-0"} />
        <LightSVG classname={"absolute top-0 right-0 scale-x-[-1]"} />
        {/* Top Middle */}
        <LightSVG classname={"absolute top-[10%] left-[-40%] rotate-[320deg]"} />
        <LightSVG classname={"scale-x-[-1] absolute top-[10%] right-[-40%] rotate-[40deg]"} />
        {/* Bottom Middle */}
        <LightSVG classname={"absolute bottom-[15%] right-[-8%] scale-y-[-1] rotate-[293deg]"} />
        <LightSVG classname={"absolute bottom-[15%] left-[-8%] scale-x-[-1] scale-y-[-1] rotate-[60deg]"} />
        {/* Bottom */}
        <LightSVG classname={"absolute bottom-0 left-0 scale-y-[-1]"} />
        <LightSVG classname={"absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]"} />
      </div>
      <p className="font-chakra text-3xl max-w-[315px] uppercase text-center text-white font-bold leading-[100%]">
        Incubator is
        <br /> ready
      </p>
      <img
        src={triangleOne}
        className="w-full rotate-6 scale-110"
      />
    </div>
  );
};
