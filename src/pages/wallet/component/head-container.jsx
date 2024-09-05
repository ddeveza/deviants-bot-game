import { WalletSVG } from "@/assets";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "lucide-react";

export const HeadContainer = ({ connected }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="367"
        height="220"
        viewBox="0 0 367 220"
        fill="none"
      >
        <path
          d="M0 210V10C0 4.47715 4.47716 0 10 0H357C362.523 0 367 4.47716 367 10V169.14C367 174.663 362.523 179.14 357 179.14L257.482 179.14C254.925 179.14 252.465 180.119 250.608 181.877L213.219 217.263C211.362 219.021 208.903 220 206.346 220H10C4.47715 220 0 215.523 0 210Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <div className="absolute top-0 translate-x-1 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="362"
          height="214"
          viewBox="0 0 362 214"
          fill="none"
        >
          <path
            d="M0 204V10C0 4.47715 4.47715 0 10 0H352C357.523 0 362 4.47715 362 10V162.5C362 168.023 357.523 172.5 352 172.5H255.002C252.433 172.5 249.963 173.489 248.103 175.262L210.359 211.238C208.499 213.011 206.029 214 203.46 214H10C4.47715 214 0 209.523 0 204Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="absolute -translate-y-8 flex items-center justify-center z-20">
        <div className="flex flex-col items-center">
          {connected ? (
            <div className=" rounded-full bg-[#0098EA] p-1"> <WalletSVG
            className={"h-7 w-7"}
            fill="white"
          /></div>
          ) : (
            <WalletSVG
              className={"h-9 w-9"}
              fill="#161313"
            />
          )}
          <span className="text-2xl">CONNECT TO</span>
          <span className="text-4xl">TON WALLET</span>
          {connected && (
            <span className="flex font-sans font-normal">
              <Link className="pr-2" />
              UFT4r65H...U67v2rBx
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
