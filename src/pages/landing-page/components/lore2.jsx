import { AsteroidOne, AsteroidThree, AsteroidTwo, planets } from "../assets";

export const LoreTwo = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <img
        src={AsteroidOne}
        className="absolute -right-[5%] top-[5%] rotate-[-10deg]"
        alt="Asteroid 1"
      />
      <img
        src={AsteroidTwo}
        className="absolute top-[63%] -left-[15%]"
        alt="Asteroid 2"
      />
      <img
        src={AsteroidThree}
        className="absolute -bottom-[5%] -right-[15%]"
        alt="Asteroid 3"
      />
      <img
        src={planets}
        className="absolute left-1/2 -translate-x-1/2 top-[20%] min-w-[500px]"
        alt="Planets"
      />
      <p className="max-w-[230px] text-xl font-bold uppercase text-right text-white absolute bottom-[25%] right-[10%] font-chakra leading-[100%]">The FIVE WORLDS COLLAPSED, ONE REALM REMAINED.</p>
    </div>
  );
};
