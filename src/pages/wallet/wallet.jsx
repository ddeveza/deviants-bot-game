import { cn } from "@/lib/utils";
import { walletBGSVG, walletConnectedBGSVG } from "./assets/svg";
import { HeadContainer } from "./component/head-container";
import { useState } from "react";

const Wallet = () => {
  const [connected, setConnected] = useState(false);
  let bg = connected ? walletConnectedBGSVG : walletBGSVG;

  return (
    <div className={cn("pt-40 relative overflow-hidden font-bowlby flex-1 flex h-full", { "bg-[#515151]": !connected, "bg-[#0098EA]": connected })}>
      <div
        className="flex flex-col items-center w-full "
        style={{ background: `center no-repeat url(${bg}) ;`, backgroundSize: "cover" }}
      >
        <div>
          <HeadContainer connected={connected}/>
        </div>
        <div
          className="self-start text-transparent text-[7rem] "
          style={{ WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: 1 }}
        >
          Deviant
        </div>

        <div className="pt-20 grid grid-rows-2 justify-center items-center space-y-3 ">
          {connected ? (
            <button
              className="w-[23rem] font-bowlby text-white rounded-[20px] py-2.5 px-8 text-[161313] bg-[#929292]"
              style={{
                boxShadwdow: "box-shadow: 2px 3px 0px 1px rgba(0, 0, 0, 0.20);",
                WebkitBoxShadow: "3px 6px 5px 0px rgba(22, 19, 19, 0.75) 100%)",
              }}
              onClick={() => setConnected(!connected)}
            >
              Copy Address
            </button>
          ) : (
            <div />
          )}
          <button
            className="w-[23rem] font-bowlby rounded-[20px] py-2.5 px-8 text-[161313] bg-white"
            style={{
              boxShadwdow: connected ? "2px 3px 0px 1px rgba(0, 0, 0, 0.20)" : "3px 6px 5px 0px rgba(0,0,0,0.75)",
              WebkitBoxShadow: "3px 6px 5px 0px rgba(0,0,0,0.75)",
            }}
            onClick={() => setConnected(!connected)}
          >
            {connected ? "Remove Wallet" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
