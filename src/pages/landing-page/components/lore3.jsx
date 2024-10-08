import { useRef } from "react";
import { pillar } from "../assets";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap/all";

export const LoreThree = () => {
  const mainContainer = useRef();
  const textLore = useRef();
  useGSAP(() => {
    const text1 = new SplitType(textLore.current, { types: 'words, chars' })
    gsap.from(text1.chars, {
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 2 },
    })

    gsap.to(".pillar-lore", {
      yPercent: 3,
      yoyo:true,
      ease: "sine.inOut",
      duration: 1,
      repeat: -1
    })
  }, { scope: mainContainer, revertOnUpdate: true})

  return (
    <div ref={mainContainer} className="flex justify-center w-full h-full relative overflow-hidden ">
      <p ref={textLore} className="px-[32px] text-base uppercase text-right text-white mt-20 leading-[100%] font-chakra font-normal">
        The Weavers of Space-Time, beings of pure energy, opened the ancient portals to Astra Nova, a hidden haven for the people of The Five Worlds as theirplanets were destroyed by an all-consuming
        entity of entropy and chaos...
      </p>
      <div className="absolute bottom-0 left-0 h-full w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 390 244"
          fill="none"
          className="w-full absolute bottom-[-10%] left-0 z-[0]"
        >
          <path
            d="M201 0C131 21.5 -10.2 64.7 -15 65.5L-21 261.5H398L404 76.5L201 0Z"
            fill="#D1D1D1"
          />
        </svg>
        <img
          src={pillar}
          alt="Pillar"
          className="absolute pillar-lore bottom-[5%] left-1/2 -translate-x-1/2  w-[60%] max-h-[450px] object-contain object-center"
        />

      </div>
    </div>
  );
};
