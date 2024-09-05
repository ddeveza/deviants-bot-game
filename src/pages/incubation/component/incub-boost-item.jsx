import { ShardSVG } from "@/assets";
import { cn } from "@/lib/utils";

export const BoostItem = ({ title, isPremium, tonValue, shardsValue=2 }) => {
  return (
    <div
      className="flex gap-3 bg-[#E8E8E8] rounded-xl p-2 items-center"
      style={{
        background: isPremium ? "linear-gradient(90deg, #FFD700 0%, #A78D00 28%, #C6A700 47%, #BB9E00 76.5%, #FFD700 100%)" : "",
      }}
    >
      <div
        className={cn(`rounded-md w-10 h-10 p-1`)}
        style={{
          background: "white",
        }}
      />

      <div className="flex flex-col space-y-1.5 text-[10px]">
        <p className={cn(" font-bold", isPremium ? "text-white" : "text-black")}>{title}</p>
        {isPremium ? (
          <p className={cn("uppercase text-[8px] font-extrabold text-white")}>{`${tonValue} TON`}</p>
        ) : (
          <p className={cn("flex items-center uppercase text-black")}>
            <ShardSVG className="h-4 pr-2"/> <span className="text-center">{shardsValue}</span>
          </p>
        )}
      </div>
    </div>
  );
};
