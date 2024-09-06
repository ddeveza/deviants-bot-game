import { DeviantsSVG, PvpLogo, ShopSVG, TaskSVG, WalletSVG } from "@/assets";
import { PAGES } from "@/constant/pages";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  let pvpBG = pathname === PAGES.pvp ? "linear-gradient(180deg, #FF8F5F 0%, #F00 100%)" : "linear-gradient(180deg, #E2DADA 0%, #AAA4A4 100%)";

  return (
    <nav
      className="w-full bg-white relative"
      style={{
        WebkitBoxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
        MozBoxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
        boxShadow: "0px -20px 60px 30px rgba(22, 19, 19, 0.35)",
      }}
    >
      <div className="flex justify-around w-full h-full relative items-center ">
        <Link
          className="p-2"
          to={PAGES.deviants}
        >
          <DeviantsSVG
            className={"h-10 w-10"}
            isActive={pathname === PAGES.deviants || pathname === PAGES.incubation}
          />
        </Link>
        <Link
          className="p-2"
          to={PAGES.tasks}
        >
          <TaskSVG
            className={"h-10 w-10"}
            isActive={pathname === PAGES.tasks}
          />
        </Link>
        <Link
          to={PAGES.pvp}
          style={{ background: pvpBG, boxShadow: "0 0 0 5px white" }}
          className="flex items-center justify-center w-16 h-16 rounded-full relative -translate-y-3 z-10"
        >
          <img
            src={PvpLogo}
            alt="PvP Logo"
            className="w-12 h-12"
          />
        </Link>
        <Link
          className="p-2"
          to={PAGES.shop}
        >
          <ShopSVG
            className={"h-10 w-10"}
            isActive={pathname === PAGES.shop}
          />
        </Link>
        <Link
          className="p-2"
          to={PAGES.wallet}
        >
          <WalletSVG
            className={"h-10 w-10"}
            isActive={pathname === PAGES.wallet || pathname === PAGES.walletTon || pathname === PAGES.walletTwitter}
          />
        </Link>
      </div>
    </nav>
  );
};
