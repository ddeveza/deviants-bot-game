import { useRef } from "react"
import loreBgBnw from '../../assets/images/lore-bg-bnw.webp'
import StatsDiv from "@/components/stats-div";
import DeviantCharacters from "@/components/deviant-characters";
import { DEVIANT } from "@/constant/constants";
import { Link } from "react-router-dom";
import { PAGES } from "@/constant/pages";
const PVP = () => {
  const mainContainer = useRef();
  return (
    <div ref={mainContainer} className="relative size-full pb-[5.5rem] bg-[#2F2F2F]">
      <div className="absolute size-full top-0 left-0">
        <img src={loreBgBnw} alt="" className="object-cover object-center opacity-50" />
      </div>
      <div className="absolute top-0 left-0 py-4 px-4 w-full">
        <StatsDiv level={1} progress={33} shards={4000} />
      </div>
      <div className="relative pt-[5rem] size-full">
        <div className="size-full flex flex-col justify-start items-center gap-4">
          <div className="w-full py-2 flex justify-center items-center">
            <h1 className="font-bowlby text-xl text-white uppercase">Battle</h1>
          </div>


          <div className="w-full h-full relative pb-[1rem] flex flex-col justify-start items-center px-4 gap-2">
            <Link to={PAGES.leaderboard} className="shrink-0 grow-0 btn-dev-container relative w-full px-4 pt-3 pb-4 flex justify-center items-center">
              <h1 className="text-black font-bowlby text-lg relative">Leaderboards</h1>
            </Link>
            <div className="flex justify-center items-center w-full gap-2">
              <Link to={PAGES.friends} className="btn-dev-container relative w-full px-4 pt-3 pb-4 flex justify-center items-center">
                <h1 className="text-black font-bowlby text-lg relative">Friends</h1>
              </Link>
              <Link to={PAGES.clans} className="btn-dev-container relative w-full px-4 pt-3 pb-4 flex justify-center items-center">
                <h1 className="text-black font-bowlby text-lg relative">Clans</h1>
              </Link>
            </div>
            <div className="grow shrink basis-0 w-full relative">
              <div className="btn-dev-container relative w-full h-full px-4 pt-3 pb-4 flex flex-col justify-center items-center gap-1">
                <div className="w-full h-full flex justify-between items-center relative">
                  <div className="w-3/5 flex flex-col justify-start items-start">
                    <h1 className="font-chakra text-black text-xs uppercase">Selected</h1>
                    <h1 className="font-bowlby text-black text-base">{DEVIANT[0].species + " (" + DEVIANT[0].evolutionPhase + ")"}</h1>
                    <h1 className="font-bowlby text-black text-xs">HP: {DEVIANT[0].stats.hp.value}</h1>
                    <h1 className="font-bowlby text-black text-xs">Max Energy: {DEVIANT[0].stats.max_energy.value}</h1>
                    <h1 className="font-bowlby text-black text-xs">Power: {DEVIANT[0].stats.power.value}</h1>
                    <h1 className="font-bowlby text-black text-xs">Restore: {DEVIANT[0].stats.restore.value}</h1>
                  </div>
                  <div className="w-2/5 aspect-square grow-0 shrink-0 relative ">
                    <DeviantCharacters species={DEVIANT[0].species} evolutionPhase={DEVIANT[0].evolutionPhase} pose="Card" className="size-full relative" />
                  </div>
                </div>
                <h1 className="text-black font-bowlby text-lg relative">Select Deviant</h1>
              </div>
            </div>
            <div className="btn-dev-container-red relative w-full px-4 pt-3 pb-4 flex justify-center items-center">
              <h1 className="text-white font-bowlby text-lg relative">Start Match</h1>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default PVP