import { Button } from "@/components/ui/button";
import { PAGES } from "@/constant/pages";
import { Link } from "react-router-dom";
import { ShardLeftSVG, ShardRightSVG } from "./assets";

const Wallet = () => {
  return (
    <div className="flex flex-col space-y-48 flex-1 bg-[#110079]">
      <div className="flex justify-center mt-48 relative">
        <div className="absolute left-0 -bottom-10">
          <ShardLeftSVG />
        </div>
        <p className="text-white text-center font-bowlby text-4xl z-10">
          Connect
          <br />
          Accounts
        </p>
        <div className="absolute right-0 -top-10">
          <ShardRightSVG />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <p className="text-white text-sm text-center max-w-[200px]">To secure your Shards, connect your following accounts:</p>
        <div className="flex flex-col space-y-5 w-[90%]">
          <Link to={PAGES.walletTon}>
            <Button className="w-full text-[#281E1E] bg-[#F1F1F1] px-20 py-7 rounded-2xl border-b-4 border-[#9B9B9B] font-bowlby text-2xl hover:text-white">Ton wallet</Button>
          </Link>
          <Link to={PAGES.walletTwitter}>
            <Button className="w-full text-[#281E1E] bg-[#FAFAFA] px-20 py-7 rounded-2xl border-b-4 border-[#BABABA] font-bowlby text-2xl hover:text-white">Twitter / x</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
