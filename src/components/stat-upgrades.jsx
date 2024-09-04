export const StatUpgrade = ({ attribute, icon, currentLvl, xp }) => {
  return (
    <div className="flex gap-3 bg-[#E8E8E8] rounded-xl p-1 items-center">
      <div className="bg-[#3BFBE4] rounded-md w-10 h-10 p-1">{icon}</div>
      <div className="flex flex-col">
        <p className="uppercase text-[8px] font-bold">{`upgrade ${attribute}`}</p>
        <p className="uppercase text-[8px] font-bold">
          {`LVL ${currentLvl} `}
          <span className="text-[#00AF9A]">&gt; {`LVL ${currentLvl + 1}`}</span>
        </p>
        <p className="uppercase text-[8px] font-extrabold">{`${xp} XP`}</p>
      </div>
    </div>
  );
};
