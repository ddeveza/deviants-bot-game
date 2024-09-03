import { DeviantsSVG, PvpLogo, ShopSVG, TaskSVG, WalletSVG } from "@/assets";

export const Navbar = () => {
  return (
    <nav
      className="w-full bg-white fixed bottom-0 h-14"
      style={{
        WebkitBoxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
        MozBoxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
        boxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
      }}
    >
      <div className="flex justify-around w-full h-full relative items-center">
        <button className="p-2">
          <DeviantsSVG className={"h-7 w-7 "} />
        </button>
        <button className="p-2">
          <TaskSVG className={"h-7 w-7"} />
        </button>
        <button
          style={{ background: "linear-gradient(180deg, #E2DADA 0%, #AAA4A4 100%)", boxShadow: "0 0 0 5px white" }}
          className="flex items-center justify-center w-14 h-14 rounded-full relative -translate-y-3 z-10"
        >
          <img
            src={PvpLogo}
            alt="PvP Logo"
            className="w-9 h-9"
          />
        </button>
        <button className="p-2">
          <ShopSVG className={"h-7 w-7"} />
        </button>
        <button className="p-2">
          <WalletSVG className={"h-7 w-7"} />
        </button>
      </div>
    </nav>
  );
};
