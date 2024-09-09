import { Asteroid, planets } from "../assets";

export const LoreTwo = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <img
        src={Asteroid}
        className="absolute right-[-10%] rotate-[90deg] top-[-10%] w-1/2"
        alt="Asteroid 1"
      />
      <img
        src={Asteroid}
        className="absolute top-[60%] left-[-50%] w-2/3"
        alt="Asteroid 2"
      />
      <img
        src={Asteroid}
        className="absolute rotate-[110deg] bottom-[-30%] right-[-30%] w-full"
        alt="Asteroid 3"
      />
      <img
        src={planets}
        className="absolute left-1/2 -translate-x-1/2 top-[20%] min-w-[500px]"
        alt="Planets"
      />
      <p className="max-w-[230px] text-xl font-bold uppercase text-right text-white absolute bottom-[25%] right-[10%] font-['Chakra_Petch'] leading-[100%]">The FIVE WORLDS COLLAPSED, ONE REALM REMAINED.</p>
    </div>
  );
};
