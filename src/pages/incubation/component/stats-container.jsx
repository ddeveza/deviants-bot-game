import { flyAngelImg, ShardSVG, ShopButton } from "@/assets";


import { DeviantMaturityBar } from "@/components/deviant-maturity-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { ClockIcon, EnergyIcon, TapReductionIcon } from "../assets/svg";

export const StatsContainer = ({isEmpty}) => {
  let percent = 0;

  if(isEmpty) {
   return <div className="relative">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 367 244"
        fill="none"
        className="absolute top-0 left-0 z-0"
      >
        <path
          d="M0 234V0H367V188.682C367 194.205 362.523 198.682 357 198.682L257.785 198.682C255.049 198.682 252.432 199.804 250.544 201.785L213.283 240.898C211.396 242.879 208.779 244 206.043 244H10C4.47715 244 0 239.523 0 234Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <div className="relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 363 238"
          fill="none"
          className="w-full px-0.5"
        >
          <path
            d="M0.5 227.345V0H362.5V181.318C362.5 186.841 358.023 191.318 352.5 191.318H255.806C253.057 191.318 250.43 192.45 248.541 194.446L210.921 234.217C209.032 236.214 206.405 237.345 203.656 237.345H10.5C4.97715 237.345 0.5 232.868 0.5 227.345Z"
            fill="#F0F0F0"
          />
        </svg>

        {/* Profile and Shard Details */}
        <div className="flex justify-between w-full absolute top-2 z-20 font-extrabold max-w-[90%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl py-2 px-3">
          <div className="flex items-center gap-2 bottom-0">
            <Avatar className="bg-gray-600 w-7 h-7">
              <AvatarImage src={flyAngelImg} />
              <AvatarFallback>CJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 justify-center ">
              <p className="text-[8px] text-[#3F3B3B]">communityjuice</p>
              <div className="flex flex-col">
                <p className="text-[6px] capitalize text-[#606060]">level 1</p>
                <Progress
                  value={33}
                  className="h-0.5 bg-[#A2A2A2] w-20"
                  indicatorColor={"bg-black"}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-1 items-center">
            <ShardSVG className="w-5 h-5" />
            <p className="font-extrabold text-[14px]">0</p>
          </div>
        </div>

        {/* Deviant Stats */}
        <div className="flex flex-col items-center space-y-0.5 justify-between w-full absolute top-[58px] z-20  max-w-[90%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl py-2 px-3 uppercase font-extrabold">
          <span className="text-center text-lg">Not Available</span>
          <span className="flex items-center justify-center text-center text-[10px] max-w-52 font-normal normal-case">Reach Level 2 to unlock a 2nd Deviant Slot or Unlock with TON to buy a new slot</span>
        </div>

        {/* Deviant Maturity Progress */}
        <div className="flex flex-col space-y-0.5 justify-between w-full absolute top-[159px] z-20  max-w-[50%] left-4 transform uppercase font-extrabold">
          <div className="flex justify-between">
            <p className="text-[8px]">Deviant Progress</p>
            <p className="text-[8px]">N/A </p>
          </div>
          <DeviantMaturityBar percentage={percent}/>
        </div>
      </div>

      <div className="w-[35%] overflow-hidden -bottom-1.5 right-0 absolute">
        <ShopButton />
      </div>
    </div>
  }



  return (
    <div className="relative">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 367 244"
        fill="none"
        className="absolute top-0 left-0 z-0"
      >
        <path
          d="M0 234V0H367V188.682C367 194.205 362.523 198.682 357 198.682L257.785 198.682C255.049 198.682 252.432 199.804 250.544 201.785L213.283 240.898C211.396 242.879 208.779 244 206.043 244H10C4.47715 244 0 239.523 0 234Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <div className="relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 363 238"
          fill="none"
          className="w-full px-0.5"
        >
          <path
            d="M0.5 227.345V0H362.5V181.318C362.5 186.841 358.023 191.318 352.5 191.318H255.806C253.057 191.318 250.43 192.45 248.541 194.446L210.921 234.217C209.032 236.214 206.405 237.345 203.656 237.345H10.5C4.97715 237.345 0.5 232.868 0.5 227.345Z"
            fill="#F0F0F0"
          />
        </svg>

        {/* Profile and Shard Details */}
        <div className="flex justify-between w-full absolute top-2 z-20 font-extrabold max-w-[90%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl py-2 px-3">
          <div className="flex items-center gap-2 bottom-0">
            <Avatar className="bg-gray-600 w-7 h-7">
              <AvatarImage src={flyAngelImg} />
              <AvatarFallback>CJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 justify-center ">
              <p className="text-[8px] text-[#3F3B3B]">communityjuice</p>
              <div className="flex flex-col">
                <p className="text-[6px] capitalize text-[#606060]">level 1</p>
                <Progress
                  value={33}
                  className="h-0.5 bg-[#A2A2A2] w-20"
                  indicatorColor={"bg-black"}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-1 items-center">
            <ShardSVG className="w-5 h-5" />
            <p className="font-extrabold text-[14px]">0</p>
          </div>
        </div>

        {/* Deviant Stats */}
        <div className="flex flex-col space-y-0.5 justify-between w-full absolute top-[58px] z-20  max-w-[90%] left-1/2 transform -translate-x-1/2 bg-white rounded-xl py-2 px-3 uppercase font-extrabold">
          <div className="flex justify-between">
            <div className="flex items-center space-x-0.5">
              <ClockIcon />
              <p className="text-[10px]">Incubation Time</p>
            </div>
            <p className="text-[#161313] text-xl">01:52:46</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-0.5">
              <TapReductionIcon />
              <p className="text-[10px]">Time Reducation Per Tap</p>
            </div>
            <p className="text-sm">1s</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-0.5">
              <EnergyIcon />
              <p className="text-[10px]">Available Energy</p>
            </div>
            <p className="text-sm">75/1000</p>
          </div>
        </div>

        {/* Deviant Maturity Progress */}
        <div className="flex flex-col space-y-0.5 justify-between w-full absolute top-[159px] z-20  max-w-[50%] left-4 transform uppercase font-extrabold">
          <div className="flex justify-between">
            <p className="text-[8px]">Incubation Progress</p>
            <p className="text-[8px]">{`${percent}%`} </p>
          </div>
          <DeviantMaturityBar percentage={percent}/>
        </div>
      </div>

      <div className="w-[35%] overflow-hidden -bottom-1.5 right-0 absolute">
        <ShopButton />
      </div>
    </div>
  );
};
