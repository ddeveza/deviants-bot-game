import { LightCloudSVG } from "@/assets";
import { Button } from "@/components/ui/button";
import { WalletContainer } from "@/components/wallet-container";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TwitterLeftSVG, TwitterRightSVG } from "./assets/svg/wallet-bg-icon";

const WalletTwitter = () => {
  const [connected, setConnected] = useState(false);

  let bg = connected ? `center no-repeat url(${LightCloudSVG}) ` : `center no-repeat url(${LightCloudSVG}) `;

  return (
    <div
      className={cn("flex-1 flex h-full pb-[3rem]")}
      style={{ background: bg, backgroundColor: connected ? "#000000" : "#515151", backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center w-full justify-between">
        {/* Header Container */}
        <div className="w-full px-4 mt-32 font-bowlby z-10">
          <WalletContainer
            connected={connected}
            category={"twitter"}
          />
        </div>

        <div className="absolute left-0 top-1/3">
          <TwitterLeftSVG connected={connected} />
        </div>
        <div className="absolute right-0 bottom-[10%]">
          <TwitterRightSVG connected={connected} />
        </div>

        {/* Buttons */}
        <div className="justify-center items-center w-[90%] z-10 mb-16 flex flex-col gap-4">
          <Button
            className="w-full rounded-[20px] py-6 px-8 bg-white text-[#281E1E] uppercase font-bowlbyregular text-xl hover:text-white"
            style={{
              boxShadwdow: "2px 3px 0px 1px rgba(0, 0, 0, 0.20)",
              WebkitBoxShadow: "2px 3px 0px 1px rgba(0,0,0,0.20)",
            }}
            onClick={() => setConnected(!connected)}
          >
            {connected ? "Remove Twitter" : "Connect"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletTwitter;
