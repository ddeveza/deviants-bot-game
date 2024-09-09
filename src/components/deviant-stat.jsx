import { BottomRightCornerSVG, ShardSVG, TopLeftCornerSVG } from "@/assets";

export const DeviantStat = ({ attribute, value, isEvolve = false, currentLvl = 1, isShard = false }) => {
  return (
    <div className="flex justify-start px-3 py-1 bg-[#E4E4E4] relative">
      <div className="absolute top-0 left-0">
        <TopLeftCornerSVG color={"black"} />
      </div>
      <div className="absolute bottom-0 right-0">
        <BottomRightCornerSVG color={"black"} />
      </div>

      <p className="text-xs font-bold uppercase">{attribute}</p>

      {isEvolve ? (
        <p className="text-3xl font-extrabold absolute right-4 -top-3.5">
          {isShard ? (
            <span className="flex items-center gap-1">
              <ShardSVG className="w-7 h-7" /> {value}
            </span>
          ) : (
            value
          )}
        </p>
      ) : (
        <p className="absolute right-4 -top-3.5 text-xs font-bold uppercase">
          LVL {currentLvl} / <span className="text-3xl font-extrabold">{value}</span>
        </p>
      )}
    </div>
  );
};
