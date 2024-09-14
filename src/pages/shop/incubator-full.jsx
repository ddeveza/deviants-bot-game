import { CloudSVG } from '@/assets';
import Squares from '@/assets/svg/squares';
import DeviantCharacters from '@/components/deviant-characters';
import StatsDiv from '@/components/stats-div';
import horizontalLoop from '@/lib/horizontalLoop';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react';
import { BuyButton } from './components/buy-button';
import { BackButton } from './components/back-button';
import DeviantStatRight from '@/components/deviant-stat-right';
import Incubators from '@/components/incubators';
import IncubatorStatRight from '@/components/incubator-stat-right';

const IncubatorFull = ({ incubator, handleButtonEvents }) => {
    const mainContainer = useRef();
    const incubatorsMarqueeLoop = useRef();
    const buybutton = useRef();
    const backbutton = useRef();
    const { contextSafe } = useGSAP({ dependencies: [], scope: mainContainer, revertOnUpdate: true });
    const handlePointerEvents = contextSafe((type, object, attached = {}) => {
        object.preventDefault();
        if (type == "click close") {
            // gsap.to(".incubator-main", { xPercent: -50, opacity: 0, duration: 0.5, ease: "power2.inOut" });
            // gsap.to(".incubator-name", { yPercent: -100, opacity: 0, duration: 0.5, ease: "power2.inOut" });
            // gsap.to(".incubator-squares", { yPercent: -100, opacity: 0, duration: 0.4, delay: 0.1, ease: "power2.inOut" });
            // gsap.to(".incubator-stat-card", { xPercent: 50, opacity: 0, duration: 0.3, delay: 0.1, ease: "power2.inOut" });
            incubatorsMarqueeLoop.current.pause();
            handleButtonEvents("close incubator", object);
        } else if (type == "click view") {

        }
    })

    useGSAP(() => {
        const incubatorsMarquee = gsap.utils.toArray(".incubators-marquee");
        incubatorsMarqueeLoop.current = horizontalLoop(incubatorsMarquee, {
            paused: true,
            repeat: -1,
            center: false,
            speed: 0.5
        })

    }, { dependencies: [], scope: mainContainer })

    useGSAP(() => {
        if (incubator.species !== "Undefined") {
            incubatorsMarqueeLoop.current.play();
            gsap.fromTo(".incubator-marquee", { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.inOut" });
            gsap.fromTo(".incubator-main", { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" });
            gsap.fromTo(".incubator-name", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" });
            gsap.fromTo(".incubator-squares", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.4, delay: 0.1, ease: "power2.inOut" });
            gsap.fromTo(".incubator-stat-card", { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
            
        }
    }, { dependencies: [incubator], scope: mainContainer, revertOnUpdate: true })


    return (
        <div ref={mainContainer} className='size-full relative' style={{ backgroundColor: incubator.primaryColor }}>
            <div className="absolute top-0 left-0 size-full clouds-bg-full">
                <CloudSVG className="size-full relative opacity-80" color={incubator.secondaryColor} />
            </div>

            <div className="absolute size-full top-0 left-0 flex flex-col justify-center items-start pt-[12rem] incubator-marquee">
                <div className="relative h-auto w-full flex justify-start items-center opacity-50">
                    <h1 className="font-bowlby text-outline text-[6rem] leading-[1] incubators-marquee">DEVIANTS.</h1>
                    <h1 className="font-bowlby text-outline text-[6rem] leading-[1] incubators-marquee">DEVIANTS.</h1>
                    <h1 className="font-bowlby text-outline text-[6rem] leading-[1] incubators-marquee">DEVIANTS.</h1>
                    <h1 className="font-bowlby text-outline text-[6rem] leading-[1] incubators-marquee">DEVIANTS.</h1>
                </div>
            </div>
            <div className="absolute top-[0%] left-[4.6rem] rotate-90 origin-top-left w-auto h-[4rem] border-b-[1px] border-white incubator-name">
                <div className="relative py-2 size-full pr-[5rem] rotate-180 flex flex-col justify-start items-end">
                    <h1 className="font-bowlby text-[3rem] leading-[1] text-white flex-nowrap whitespace-nowrap  text-right ">V{incubator.incubatorLevel}.0</h1>
                </div>

            </div>
            <div className="incubator-squares absolute top-[5rem] left-[5rem] w-[0.8rem]">
                <Squares className="size-full relative" />
            </div>
            <div className="absolute top-0 right-[-1rem] size-full flex flex-col justify-center items-start pt-[5rem]">
                <div className="relative w-[120%] aspect-square grow-0 shrink-0">
                    <Incubators level={incubator.incubatorLevel-1} className="size-full relative incubator-main" />
                </div>
            </div>

            <div className="absolute top-[5rem] left-0 w-full incubator-stat-card">
                <IncubatorStatRight incubator={incubator} isShop />
            </div>

            <div className="absolute top-0 left-0 py-4 px-4 w-full">
                <StatsDiv level={1} progress={33} shards={4000} />
            </div>


            <div className="absolute w-full bottom-[6rem] left-0 flex gap-4 justify-between items-start">
                <BackButton onClick={(e) => handlePointerEvents("click close", e)} ref={backbutton} />
                <BuyButton ref={buybutton} />
            </div>
        </div>
    );
}

export default IncubatorFull;
