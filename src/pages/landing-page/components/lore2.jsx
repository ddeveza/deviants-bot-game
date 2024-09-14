import Planets from "@/components/planets";
import { Asteroid, planets } from "../assets";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap/all";
import SplitType from "split-type";

export const LoreTwo = () => {
  const mainContainer = useRef();
  const textLore = useRef();
  useGSAP(() => {
    gsap.to(".asteroid-1", {
      rotate: 360,
      duration: 20,
      repeat: -1
    })
    gsap.to(".asteroid-2", {
      rotate: 360,
      duration: 30,
      repeat: -1
    })
    gsap.to(".asteroid-3", {
      rotate: -360,
      duration: 40,
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
    <div ref={mainContainer} className="w-full relative overflow-hidden">
      <img
        src={Asteroid}
        className="absolute asteroid-1 right-[-10%] rotate-[90deg] top-[-10%] w-1/2"
        alt="Asteroid 1"
      />
      <img
        src={Asteroid}
        className="absolute asteroid-2 top-[60%] left-[-50%] w-2/3"
        alt="Asteroid 2"
      />
      <img
        src={Asteroid}
        className="absolute asteroid-3 rotate-[110deg] bottom-[-30%] right-[-30%] w-full"
        alt="Asteroid 3"
      />
      <div className="absolute w-[120%] left-1/2 -translate-x-1/2 top-[30%]">
        <Planets />
      </div>
      <p ref={textLore} className="max-w-[230px] text-xl font-bold uppercase text-right text-white absolute bottom-[25%] right-[10%] font-['Chakra_Petch'] leading-[100%]">The FIVE WORLDS COLLAPSED, ONE REALM REMAINED.</p>
    </div>
  );
};
