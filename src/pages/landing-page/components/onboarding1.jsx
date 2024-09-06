import { triangleOne } from "../assets";

export const OnboardingOne = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <p className="font-chakra text-3xl max-w-[315px] uppercase text-center text-white font-bold leading-[100%]">Tap to speed up the incubation process</p>

      <img
        src={triangleOne}
        className="w-full rotate-6 scale-110"
      />
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[80%] top-1/2">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[60%] top-[65%]">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[70%] top-[40%]">-1s</p>

      <div
        className="flex flex-col items-center justify-between gap-2 font-bowlby text-white rounded-3xl py-4 min-w-[80%]"
        style={{ background: "rgba(255, 255, 255, 0.50" }}
      >
        <p className="uppercase text-xl leading-5 tracking-[-0.5px]">incubation time</p>
        <p className="text-4xl leading-8 tracking-[-0.7px]">00:00:15</p>
      </div>
    </div>
  );
};
