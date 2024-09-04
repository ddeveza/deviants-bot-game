import { UpgradeSVG } from "@/assets";

export const UpgradeButton = () => {
  return (
    <div className="relative cursor-pointer">
      {/* Outer SVG (Dark Shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="67"
        viewBox="0 0 107 59"
        fill="none"
        className="absolute -z-10 top-1.5"
      >
        <path
          d="M106.325 10.1821C106.325 4.65928 101.848 0.182129 96.3252 0.182129H-0.000244141V58.5364H69.3605C71.7904 58.5364 74.1373 57.6516 75.9624 56.0473L102.927 32.3461C105.087 30.4475 106.325 27.7109 106.325 24.8351V10.1821Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Inner SVG  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="67"
        viewBox="0 0 107 59"
        fill="none"
      >
        <path
          d="M106.325 10C106.325 4.47715 101.848 0 96.3252 0H-0.000244141V58.3542H69.3605C71.7904 58.3542 74.1373 57.4695 75.9624 55.8652L102.927 32.1639C105.087 30.2654 106.325 27.5288 106.325 24.653V10Z"
          fill="white"
        />
      </svg>

      {/* Icon and Text */}
      <div className="flex flex-col items-center absolute bottom-2 left-1">
        <UpgradeSVG />
        <p className="text-sm uppercase font-extrabold">Upgrades</p>
      </div>
    </div>
  );
};
