import Incubators from "@/components/incubators";
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
      <div className="relative tap-area w-[100%] scale-110 origin-center aspect-square shrink-0 grow-0 z-[1]">
        <Incubators className="incubator-animated size-full relative" level={0} />
      </div>
    </div>
  );
};
