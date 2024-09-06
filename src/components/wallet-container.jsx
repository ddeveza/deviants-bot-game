import { WalletRoundedIcon } from "@/assets";
import { TwitterSVG } from "@/assets/svg/twitter-svg";
import { PAGES } from "@/constant/pages";
import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const WalletContainer = ({ connected, category }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 367 220"
        fill="none"
        className="w-full"
      >
        <path
          d="M0 210V10C0 4.47715 4.47716 0 10 0H357C362.523 0 367 4.47716 367 10V169.14C367 174.663 362.523 179.14 357 179.14L257.482 179.14C254.925 179.14 252.465 180.119 250.608 181.877L213.219 217.263C211.362 219.021 208.903 220 206.346 220H10C4.47715 220 0 215.523 0 210Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <div className="absolute top-0 left-[3.5px] z-10 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 362 214"
          fill="none"
          className="w-[99%]"
        >
          <path
            d="M0 204V10C0 4.47715 4.47715 0 10 0H352C357.523 0 362 4.47715 362 10V162.5C362 168.023 357.523 172.5 352 172.5H255.002C252.433 172.5 249.963 173.489 248.103 175.262L210.359 211.238C208.499 213.011 206.029 214 203.46 214H10C4.47715 214 0 209.523 0 204Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="absolute top-5 flex items-center justify-center z-20">
        <div className="flex flex-col items-center">
          {category === "twitter" ? <TwitterSVG /> : <WalletRoundedIcon connected={connected} />}
          <span className="text-2xl mt-3">{connected ? `connected to` : "connect to"}</span>
          <span className="text-4xl">{category === "twitter" ? "Twitter / X" : "TON WALLET"}</span>
          {connected && (
            <span className="flex font-sans font-normal">
              <LinkIcon className="pr-2" />
              {category === "twitter" ? "communityjuice" : "UFT4r65H...U67v2rBx"}
            </span>
          )}
        </div>
      </div>

      <Link
        to={PAGES.wallet}
        className="w-[35%] bottom-0 right-0 absolute"
      >
        <BackButton />
      </Link>
    </div>
  );
};

const BackButton = () => {
  return (
    <div className="relative w-full">
      {/* Lighter SVG (main shape) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="33"
        viewBox="0 0 130 33"
        fill="none"
        className="w-full relative z-10"
      >
        <path
          d="M16.3226 2.8773L3.37555 15.6359C-2.9953 21.9141 1.45016 32.7586 10.3946 32.7586H120C125.523 32.7586 130 28.2815 130 22.7586V10C130 4.47715 125.523 0 120 0H23.3416C20.7148 0 18.1935 1.03355 16.3226 2.8773Z"
          fill="url(#paint0_linear_799_250)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_799_250"
            x1="-1.38686"
            y1="16.3793"
            x2="130"
            y2="16.3793"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7C52" />
            <stop
              offset="1"
              stop-color="#FF110B"
            />
          </linearGradient>
        </defs>
      </svg>
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="33"
        viewBox="0 0 130 33"
        fill="none"
        className="w-full absolute top-1"
      >
        <path
          d="M16.3226 2.8773L3.37555 15.6359C-2.9953 21.9141 1.45016 32.7586 10.3946 32.7586H120C125.523 32.7586 130 28.2815 130 22.7586V10C130 4.47715 125.523 0 120 0H23.3416C20.7148 0 18.1935 1.03355 16.3226 2.8773Z"
          fill="#A00600"
        />
      </svg>

      <p className="absolute inset-0 left-2 flex items-center justify-center z-20 text-white cursor-pointer">Back</p>
    </div>
  );
};
