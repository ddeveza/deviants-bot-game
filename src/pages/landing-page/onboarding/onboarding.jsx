import { useEffect, useRef, useState } from "react";
import { galaxyBG } from "../assets";
import { OnboardingOne } from "../components/onboarding1";
import { OnboardingTwo } from "../components/onboarding2";
import NewDeviant from "./new-deviant";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { mod } from "@/lib/utils";

const Onboarding = () => {
  const [onboard, setOnboard] = useState(1);
  const mainContainer = useRef();
  const [timeString, setTimeString] = useState("00:01:00");
  const num = useRef(0);
  const timeRemaining = useRef(60000);
  let component;
  switch (onboard) {
    case 1:
      component = <OnboardingOne time={timeString} />;
      break;
    case 2:
      component = <OnboardingTwo />;
      break;
    default:
      component = <OnboardingOne />;
      break;
  }

  const { contextSafe } = useGSAP({ dependencies: [], scope: mainContainer, revertOnUpdate: true });
  const handleOnboard = contextSafe((type, object) => {

    object.preventDefault();
    if (type == "tap" && onboard < 2) {
      timeRemaining.current = timeRemaining.current - 1000;
      console.log(timeRemaining.current)
      setTimeString(getTimeString(timeRemaining.current))
      let xbase;
      let ybase;
      num.current = num.current + 1;
      num.current = mod(num.current, 20);
      xbase = object.clientX;
      ybase = object.clientY;
      gsap.to(`.num-${num.current}`, {
        keyframes: {
          "0%": { x: xbase, rotateX: 0, scale: 1, y: ybase, autoAlpha: 1 },
          "45%": { x: xbase + 1 / 5, rotateX: 45, scale: 1, y: ybase / 2, autoAlpha: 1, ease: "sine.out" },
          "90%": { x: (window.innerWidth / 2), rotateX: 90, scale: 0, y: 0, autoAlpha: 0.5, ease: "sine.out" },
          "100%": { x: (window.innerWidth / 2), rotateX: 90, scale: 0, y: -50, autoAlpha: 0, ease: "power2.out" },
          // ease between keyframes
        },
        duration: 2,
        ease: 'sine.inOut'
      })

      if (timeRemaining.current <= 0) {
        setOnboard((prev) => prev + 1);
      }
    }
  });


  useEffect(() => {
    const interv = setInterval(() => {
      timeRemaining.current = timeRemaining.current - 1000;
      if (timeRemaining.current <= 0) {
        setOnboard((prev) => prev + 1);
      } else {
        setTimeString(getTimeString(timeRemaining.current))
      }
    }, 1000)
    return (() => {
      clearInterval(interv)
    })
  }, [])


  const getTimeString = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }


  return (
    <div ref={mainContainer}
      style={{
        background: `center no-repeat url(${galaxyBG})`,
        backgroundSize: "100% 145%",
        backgroundPosition: "0 90%",
      }}
      onClick={(e) => handleOnboard("tap", e)}
      className="relative size-full"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex relative size-full z-10 font-inter text-xs">{onboard <= 2 ? component : <NewDeviant />}</div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-0`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-1`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-2`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-3`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-4`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-5`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-6`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-7`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-8`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-9`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-10`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-11`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-12`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-13`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-14`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-15`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-16`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-17`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-18`}>+<span className="num-text">1s</span></div>
      <div className={`absolute opacity-0 top-0 left-0 pointer-events-none font-bowlby text-white font-bold text-2xl z-[10] num-19`}>+<span className="num-text">1s</span></div>
    </div>
  );
};

export default Onboarding;
