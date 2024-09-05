import { Progress } from "@/components/ui/progress";
import { cloudSVG } from "./assets";
import { TrophySVG } from "./assets/svg/trophy-svg";

const Tasks = () => {
  return (
    <div
      style={{ background: `center no-repeat url(${cloudSVG}) #20506E`, backgroundSize: "cover" }}
      className="flex flex-col border border-red-500 w-full justify-between flex-1 h-full"
    >
      <div className="px-3 mt-10 flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <p className="uppercase font-extrabold text-3xl flex gap-1 items-center text-white">
            <TrophySVG />
            Tasks
          </p>
          <p className="text-white text-sm text-start">Set out to be the best player and claim free crystals, levels, and battle points with the daily tasks!</p>
        </div>
        <div
          className="bg-white relative p-[3px] rounded-sm"
          style={{
            background: "linear-gradient(0deg, #AF6C1A 0%, #FEFFBD 100%)",
          }}
        >
          <div className="flex flex-col space-y-2 bg-white h-full w-full p-2 rounded-sm">
            <p className="text-[#281E1E] text-xl font-extrabold">7 Tasks Available</p>
            <Progress
              value={33}
              className="h-2 bg-[#E6E6E6] w-full"
              indicatorColor={"bg-gradient-to-r from-[#16D3BD] to-[#02B8A3]"}
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Tasks;
