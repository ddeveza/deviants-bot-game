import { LightCloudSVG } from "@/assets";
import { Button } from "@/components/ui/button";
import { WalletContainer } from "@/components/wallet-container";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { WalletLeftSVG, WalletRightSVG } from "./assets/svg/wallet-bg-icon";

const WalletTon = () => {
  const [connected, setConnected] = useState(false);

  let bg = connected ? `center no-repeat url(${LightCloudSVG}) #0098EA` : `center no-repeat url(${LightCloudSVG}) #515151`;

  return (
    <div
      className={cn("flex-1 flex h-full")}
      style={{ background: bg, backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center w-full justify-between">
        {/* Header Container */}
        <div className="w-[90%] mt-32 font-bowlby z-10">
          <WalletContainer connected={connected} />
        </div>

        <div className="absolute left-0 top-1/3">
          <WalletLeftSVG connected={connected} />
        </div>
        <div className="absolute right-0 bottom-[10%]">
          <WalletRightSVG connected={connected} />
        </div>

        {/* Buttons */}
        {/* TODO: Add "Bowlby One font not Bowlby SC" */}
        <div className="justify-center items-center w-[90%] z-10 mb-16 flex flex-col gap-4">
          {connected && (
            <Button
              className="w-full rounded-[20px] py-6 px-8 bg-[#929292] font-bowlby text-xl text-white"
              style={{
                boxShadwdow: "2px 3px 0px 1px rgba(0, 0, 0, 0.20)",
                WebkitBoxShadow: "2px 3px 0px 1px rgba(0,0,0,0.20)",
              }}
            >
              Copy Address
            </Button>
          )}

          <Button
            className="w-full rounded-[20px] py-6 px-8 bg-white text-[#281E1E] font-bowlby text-xl hover:text-white"
            style={{
              boxShadwdow: "2px 3px 0px 1px rgba(0, 0, 0, 0.20)",
              WebkitBoxShadow: "2px 3px 0px 1px rgba(0,0,0,0.20)",
            }}
            onClick={() => setConnected(!connected)}
          >
            {connected ? "Remove Wallet" : "Connect"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletTon;
