import { ShardSVG } from "@/assets";
import { Button } from "@/components/ui/button";

export const TaskItem = ({ tasks, reward, status, progress, goal }) => {
  return (
    <div
      className="flex items-center justify-between border border-[#F0F0F0] rounded-lg py-2 px-3"
      style={{ background: "rgba(255, 255, 255, 0.20)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="border p-1 rounded-xl"
          style={{ background: "radial-gradient(65.5% 65.5% at 50% 50%, #00A8ED 0%, #0676B2 100%)" }}
        >
          <ShardSVG className="w-8 h-8" />
        </div>

        <div className="flex flex-col">
          <p className="text-white text-xs capitalize">
            {tasks}
            {progress && ` (${progress}/${goal})`}
          </p>
          <p className="flex items-center text-white text-sm">
            <span className="font-extrabold">+</span>
            <span>
              <ShardSVG />
            </span>
            <span className="proportional-nums lining-nums font-bowlbyregular text-sm leading-5 -tracking-[0.84]">{reward}</span>
          </p>
        </div>
      </div>
      <div>
        <div
          className="flex p-[1px] rounded-[15px]"
          style={{ background: status === "claimed" || status === "claim" ? "linear-gradient(0deg, #16D3BD 0%, #359F93 100%)" : "linear-gradient(180deg, #0676B2 0%, #00A8ED 100%)" }}
        >
          <Button
            disabled={status == "claimed"}
            className="capitalize h-min text-white text-[10px] font-bowlbyregular leading-[100%] rounded-[15px] px-3 py-1"
            style={{ background: status === "claimed" || status === "claim" ? "linear-gradient(180deg, #16D3BD -15.5%, #359F93 115.5%)" : "linear-gradient(180deg, #00A8ED -15.5%, #0676B2 115.5%)" }}
          >
            {status}
          </Button>
        </div>
      </div>
    </div>
  );
};
