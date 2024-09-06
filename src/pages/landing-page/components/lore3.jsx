import { pillar } from "../assets";

export const LoreThree = () => {
  return (
    <div className="flex justify-center w-full relative overflow-hidden">
      <p className="text-base max-w-[320px] uppercase text-right text-white mt-20 leading-[100%] font-chakra">
        The Weavers of Space-Time, beings of pure energy, opened the ancient portals to Astra Nova, a hidden haven for the people of The Five Worlds as theirplanets were destroyed by an all-consuming
        entity of entropy and chaos...
      </p>
      <div className="absolute bottom-0 w-full">
        <img
          src={pillar}
          alt="Pillar"
          className="absolute bottom-[30%] left-1/2 -translate-x-1/2  w-[70%]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 390 244"
          fill="none"
          className="w-full"
        >
          <path
            d="M201 0C131 21.5 -10.2 64.7 -15 65.5L-21 261.5H398L404 76.5L201 0Z"
            fill="#C1C1C1"
          />
        </svg>
      </div>
    </div>
  );
};
