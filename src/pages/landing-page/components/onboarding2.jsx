import { LightSVG, incubatorOne } from "../assets";

export const OnboardingTwo = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <div className="absolute top-0 left-0 size-full">
        <LightSVG className={"relative size-full"} />
      </div>
      <p className="relative font-chakra text-3xl uppercase text-center text-white font-bold leading-[100%]">
        Incubator is ready
      </p>
      <img
        src={incubatorOne}
        className="relative z-[2] w-full rotate-6 scale-110"
      />
    </div>
  );
};
