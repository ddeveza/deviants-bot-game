import Incubators from "@/components/incubators";
import { incubatorOne } from "../assets";
import { useEffect, useRef } from "react";
import gsap, { TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

export const OnboardingOne = ({ time }) => {
  gsap.registerPlugin(TextPlugin);
  const mainContainer = useRef();
  useGSAP(() => {
    gsap.to(".incubator-animated", {
      yPercent: 3,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1,
      repeat: -1
    })
  }, { scope: mainContainer, revertOnUpdate: true })


  useGSAP(() => {
    gsap.set(".time-remain", { text: time });

  }, { dependencies: [time], scope: mainContainer })


  return (
    <div ref={mainContainer} className="flex flex-col justify-center items-center w-full relative overflow-hidden space-y-10">
      <div className="absolute top-0 left-0 w-full px-12 py-8">
        <p className="font-chakra text-2xl uppercase text-center text-white font-bold leading-[100%]">{`Tap to speed up the incubation process`}</p>

      </div>
      <div className="relative tap-area w-[100%] aspect-square shrink-0 grow-0 z-[1] pt-[2rem]">
        <Incubators className="incubator-animated size-full relative" level={0} />
      </div>
      {/* <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[80%] top-1/2">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[60%] top-[65%]">-1s</p>
      <p className="font-bowlby text-4xl tracking-[-6px] leading-8 absolute text-white left-[70%] top-[40%]">-1s</p> */}

      <div
        className="absolute w-full bottom-0 left-0 flex flex-col items-center justify-center gap-2 font-bowlby text-white py-8 leading-5 font-normal -tracking-[0.5px]">
        <div className="relative px-8 py-4 bg-white bg-opacity-50 rounded-xl flex flex-col items-center justify-center gap-1" >

          <p className="uppercase text-xl leading-5 tracking-[-0.5px]">incubation time</p>
          <p className="text-3xl leading-8 tracking-[-0.7px] time-remain">00:01:00</p>
        </div>
      </div>
    </div>
  );
};
