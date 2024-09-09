import { incubatorOne } from "../assets";

export const  OnboardingOne = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <div className="absolute top-0 left-0 w-full px-12 py-8">
        <p className="font-chakra text-2xl uppercase text-center text-white font-bold leading-[100%]">{`Tap to speed up the incubation process`}</p>

      </div>
      <img
        src={incubatorOne}
        className="relative rotate-[10deg] w-full object-contain object-center aspect-[1] shrink-0 grow-0"
      />
      {/* <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[80%] top-1/2">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[60%] top-[65%]">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[70%] top-[40%]">-1s</p> */}

      <div
        className="absolute w-full bottom-0 left-0 flex flex-col items-center justify-center gap-2 font-bowlby text-white py-8 leading-5 font-normal -tracking-[0.5px]">
        <div className="relative px-8 py-4 bg-white bg-opacity-50 rounded-xl flex flex-col items-center justify-center gap-1" >

          <p className="uppercase text-xl leading-5 tracking-[-0.5px]">incubation time</p>
          <p className="text-3xl leading-8 tracking-[-0.7px]">00:00:15</p>
        </div>
      </div>
    </div>
  );
};
