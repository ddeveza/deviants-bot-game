import { CloudSVG, ShardSVG } from "@/assets"
import Squares from "@/assets/svg/squares";
import DeviantCharacters from "@/components/deviant-characters";
import Incubators from "@/components/incubators";
import StatsDiv from "@/components/stats-div"
import { DEVIANTS, INCUBATORS } from "@/constant/constants";
import horizontalLoop from "@/lib/horizontalLoop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react"
import DeviantsFull from "./deviants-full";
import IncubatorFull from "./incubator-full";


const Shop = () => {
  const mainContainer = useRef();
  const shopCardLoop = useRef();
  const { contextSafe } = useGSAP({ dependencies: [], scope: mainContainer, revertOnUpdate: true });
  const defaultDeviant = {
    species: "Undefined",
    evolutionPhase: "Natura",
    cost: 0,
    stats: {
      hp: 0,
      power: 0,
      max_energy: 0,
      restore: 0,
    },
    primaryColor: "#FFFFFF",
    secondaryColor: "#000000"
  }

  const defaultIncubator = {
    incubatorLevel: 1,  // Incubator Level
    status: "Active",          // Locked, Unlocked, Inactive and Active
    incubatorStats: {
      time_reduction: 1,    // time reduced per tap
      max_energy: 100,        // Max Incubator Energy
      restore: 1           // Energy restored per sec
    },
    cost: 0,           // Shards Cost for buying
    primaryColor: "#19D3BE",
    secondaryColor: "#BEF7FC"
  };
  const [deviantSelected, setDeviantSelected] = useState(defaultDeviant);
  const [incubatorSelected, setIncubatorSelected] = useState(defaultIncubator);

  const handlePointerEvents = contextSafe((type, object, attached = {}) => {
    object.preventDefault();
    if (type == "click incubators") {
      gsap.fromTo(".bg-tab-cards", { xPercent: 0 }, { xPercent: 100, duration: 0.5, ease: "power2.inOut" });
      shopCardLoop.current.toIndex(1);
    } else if (type == "click deviants") {
      gsap.fromTo(".bg-tab-cards", { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: "power2.inOut" });
      shopCardLoop.current.toIndex(0);
    } else if (type == "open deviant") {
      setDeviantSelected(attached);
      gsap.to(".deviant-full", { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" });
    } else if (type == "close deviant") {
      gsap.to(".deviant-full", {
        autoAlpha: 0, duration: 0.5, ease: "power2.inOut", onComplete: () => {
          setDeviantSelected(defaultDeviant);
        }
      });
    } else if (type == "open incubator") {
      setIncubatorSelected(attached);
      gsap.to(".incubator-full", { autoAlpha: 1, duration: 0.5, ease: "power2.inOut" });
    } else if (type == "close incubator") {
      gsap.to(".incubator-full", {
        autoAlpha: 0, duration: 0.5, ease: "power2.inOut", onComplete: () => {
          setIncubatorSelected(defaultIncubator);
        }
      });
    }
  })


  useGSAP(() => {
    const shopCards = gsap.utils.toArray(".shop-cards");
    shopCardLoop.current = horizontalLoop(shopCards, {
      paused: true,
      center: false,
      speed: 10
    })
    shopCardLoop.current.toIndex(0, { duration: 0 });
  }, { dependencies: [], scope: mainContainer })


  useGSAP(() => {
    gsap.to(".bg-tab-cards", { xPercent: 0, duration: 0.5, ease: "power2.inOut" });
    gsap.to(".deviant-full", { autoAlpha: 0, duration: 0.02, ease: "power2.inOut" });
    gsap.to(".incubator-full", { autoAlpha: 0, duration: 0.02, ease: "power2.inOut" });
  }, { scope: mainContainer, revertOnUpdate: true })


  return (
    <div ref={mainContainer} className="relative size-full pb-[4.5rem] bg-[#150D24]">
      <div className="absolute to-0 left-0 size-full">
        <CloudSVG color="#3C6480" className="size-full relative" />
      </div>
      <div className="absolute top-0 left-0 py-4 px-4 w-full">
        <StatsDiv level={1} progress={33} shards={4000} />
      </div>
      <div className="relative pt-[5rem] size-full">
        <div className="size-full flex flex-col justify-start items-center gap-4">
          <div className="w-full py-2 flex justify-center items-center">
            <h1 className="font-bowlby text-xl text-white">Shop</h1>
          </div>
          <div className="relative w-full px-4">
            <div className="relative w-full flex bg-[#FFFFFF] rounded-xl isolate">
              <div className="absolute top-0 left-0 w-1/2 h-full flex items-center py-2">
                <div className="z-[0] bg-tab-cards absolute translate-x-[0%] flex items-center h-full top-0 left-0 w-full py-2 px-2 ">
                  <div className="relative size-full bg-black rounded-xl"></div>
                </div>
                <div className="z-[2] mix-blend-screen bg-tab-cards absolute translate-x-[0%] flex items-center h-full top-0 left-0 w-full py-2 px-2 ">
                  <div className="relative size-full bg-[#00D1B9] rounded-lg"></div>
                </div>

              </div>

              <div onClick={(e) => handlePointerEvents("click deviants", e)} className="z-[1] relative grow shrink basis-0 flex justify-center items-center py-4 mix-blend-difference">
                <h1 className="text-white font-bowlby">Deviants</h1>
              </div>
              <div onClick={(e) => handlePointerEvents("click incubators", e)} className="z-[1] relative grow shrink basis-0 flex justify-center items-center py-4 mix-blend-difference">
                <h1 className="text-white font-bowlby">Incubators</h1>
              </div>
            </div>
          </div>

          <div className="w-full h-full relative pb-[1rem] flex flex-nowrap justify-start items-center ">
            <div className="shrink-0 grow-0 shop-cards h-full relative w-full px-4">
              <div className="shrink-0 grow-0 shop-container relative w-full h-full px-4 pt-4 pb-6">
                <div className="relative overflow-scroll size-full">
                  <div className="absolute top-0 left-0 w-full h-auto grid grid-cols-2 gap-2 ">
                    {DEVIANTS.map((deviant, idx) => {
                      return (
                        <div key={`deviant-${idx}`} onClick={(e) => handlePointerEvents("open deviant", e, deviant)} style={{ background: `linear-gradient(135deg, ${deviant.primaryColor} 0%, ${deviant.primaryColor} 60%, ${deviant.secondaryColor} 60%, ${deviant.secondaryColor} 100%)` }} className="relative w-full aspect-square rounded-lg overflow-hidden">
                          <div className="absolute right-[-20%] top-0 size-full">
                            <DeviantCharacters species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Card" className="size-full relative" />
                          </div>
                          <div className="absolute top-0 left-0 h-full w-1/3 opacity-40">
                            <Squares className="size-full relative" />
                          </div>
                          <div className="relative p-2 size-full flex flex-col justify-end items-start">
                            <h1 className="text-white font-bowlbyregular font-normal text-xs">{deviant.species}</h1>
                            <div className="flex gap-1 justify-start items-center">
                              <div className="w-4 h-4 relative">
                                <ShardSVG className="size-full relative" />
                              </div>
                              <h1 className="text-white font-chakra font-black text-xs">{deviant.cost}</h1>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                  </div>
                </div>

              </div>
            </div>
            <div className="shrink-0 grow-0 shop-cards h-full relative w-full px-4">
              <div className="shrink-0 grow-0 shop-container relative size-full px-4 pt-4 pb-6">
                <div className="relative size-full overflow-scroll">
                  <div className="absolute top-0 left-0 w-full h-auto grid grid-cols-2 gap-2 ">
                    {INCUBATORS.map((incubator, idx) => {
                      return (
                        <div key={`incubator-${idx}`}  onClick={(e) => handlePointerEvents("open incubator", e, incubator)} className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-b from-[#e8e8e8] via-[#b5b5b5] to-[#eeeeee]">
                          <div className="absolute right-[-20%] top-0 size-full">
                            <Incubators level={incubator.incubatorLevel - 1} className="size-full relative" />
                          </div>
                          <div className="absolute top-0 left-0 h-full w-1/3 opacity-40">
                            <Squares className="size-full relative" />
                          </div>
                          <div className="relative p-2 size-full flex flex-col justify-end items-start">
                            <h1 className="text-black font-bowlbyregular font-normal text-[10px] leading-[1]">{`Incubator`}</h1>
                            <h1 className="text-black font-bowlbyregular font-normal text-xs">{`V${incubator.incubatorLevel}.0`}</h1>
                            <div className="flex gap-1 justify-start items-center">
                              <div className="w-4 h-4 relative">
                                <ShardSVG className="size-full relative" />
                              </div>
                              <h1 className="text-black font-chakra font-black text-xs">{incubator.cost}</h1>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="deviant-full absolute top-0 left-0 size-full z-[5]">
        <DeviantsFull deviant={deviantSelected} handleButtonEvents={handlePointerEvents} />
      </div>

      <div className="incubator-full absolute top-0 left-0 size-full z-[5]">
        <IncubatorFull incubator={incubatorSelected} handleButtonEvents={handlePointerEvents} />
      </div>

    </div>
  )
}

export default Shop