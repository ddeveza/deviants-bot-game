import { cn } from "@/lib/utils";

export const StatUpgrade = ({ attribute, icon, currentLvl, xp, iconColor, isFullUpgrade }) => {
  const upgradeLevel = isFullUpgrade ? currentLvl + 4 : currentLvl + 1;
  return (
    <div
      className="flex gap-3 bg-[#E8E8E8] rounded-xl p-2 items-center"
      style={{
        background: isFullUpgrade ? "linear-gradient(90deg, #FFD700 0%, #A78D00 28%, #C6A700 47%, #BB9E00 76.5%, #FFD700 100%)" : "",
      }}
    >
      <div
        className={cn(`rounded-md w-10 h-10 p-1`)}
        style={{
          background: isFullUpgrade ? "white" : iconColor,
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col space-y-1">
        <p className={cn("uppercase text-[8px] font-ibm leading-[8px] -tracking-[0.32px] font-bold proportional-nums lining-nums", isFullUpgrade ? "text-white" : "text-black")}>{`upgrade ${attribute}`}</p>
        <p className={cn("uppercase text-[8px] font-bold", isFullUpgrade ? "text-white" : "text-black")}>
          {`LVL ${currentLvl} `}
          <span className={cn(isFullUpgrade ? "text-[#FAFF00]" : "text-[#00AF9A]")}>&gt; {`LVL ${upgradeLevel}`}</span>
        </p>
        <p className={cn("uppercase text-[8px] proportional-nums font-bowlbyregular font-normal leading-[8px] -tracking-[0.48px]", isFullUpgrade ? "text-white" : "text-black")}>{`${xp} ${isFullUpgrade ? "TON" : "XP"}`}</p>
      </div>
    </div>
  );
};
