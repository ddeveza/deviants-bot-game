import { BottomRightCornerSVG, TopLeftCornerSVG } from "@/assets";
import { Asteroid, planets } from "../assets";
import Planets from "@/components/planets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";
import SplitType from "split-type";

export const LoreOne = () => {
  const mainContainer = useRef();
  const textLore = useRef();
  useGSAP(() => {
    gsap.to(".asteroid-1", {
      rotate: 360,
      duration: 30,
      repeat: -1
    })
    gsap.to(".asteroid-2", {
      rotate: 360,
      duration: 40,
      repeat: -1
    })
    gsap.to(".asteroid-3", {
      rotate: -360,
      duration: 500,
      repeat: -1
    })

    const text1 = new SplitType(textLore.current, { types: 'words, chars' })
    gsap.from(text1.chars, {
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 2 },
    })
  }, { scope: mainContainer, revertOnUpdate: true})


  
  return (
    <div ref={mainContainer} className="w-full relative">
      <img
        src={Asteroid}
        className="absolute asteroid-1 right-[-10%] rotate-[90deg] top-1/5 w-1/3"
        alt="Asteroid 1"
      />
      <img
        src={Asteroid}
        className="absolute asteroid-2 top-[60%] left-[-20%] w-1/2"
        alt="Asteroid 2"
      />
      <img
        src={Asteroid}
        className="absolute asteroid-3 rotate-[110deg] bottom-[-10%] right-[-10%] w-2/3"
        alt="Asteroid 3"
      />
      
      <div className="absolute w-2/3 left-1/2 -translate-x-1/2 top-[40%]">
        <Planets />
      </div>
      <div
        className="p-3 max-w-[254px] absolute top-[25%] ml-6"
        style={{ background: "rgba(184, 184, 184, 0.30)" }}
      >
        <div className="absolute top-0 left-0">
          <TopLeftCornerSVG color={"white"} />
        </div>
        <p ref={textLore} className="text-white text-xs font">
          Five outer dimensional home worlds lie in ruin. Those brave enough to enter the ancient gateways were transported to the last bastion of hope: <br />
          Astra Nova
        </p>
        <div className="absolute bottom-0 right-0">
          <BottomRightCornerSVG color={"white"} />
        </div>
      </div>
    </div>
  );
};
