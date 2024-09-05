import { Progress } from "@/components/ui/progress";
import { cloudSVG } from "./assets";
import { TrophySVG } from "./assets/svg/trophy-svg";
import { TaskItem } from "./components/task-item";

const Tasks = () => {
  return (
    <div
      style={{ background: `center no-repeat url(${cloudSVG}) #20506E`, backgroundSize: "cover" }}
      className="flex flex-col w-full justify-between flex-1 h-full"
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
          className="bg-white relative p-[4px] rounded-xl"
          style={{
            background: "linear-gradient(0deg, #AF6C1A 0%, #FEFFBD 100%)",
          }}
        >
          <div className="flex flex-col space-y-3 bg-white h-full w-full p-4 rounded-xl">
            <p className="text-[#281E1E] text-xl font-extrabold">7 Tasks Available</p>
            <Progress
              value={33}
              className="h-2 bg-[#E6E6E6] w-full"
              indicatorColor={"bg-gradient-to-r from-[#16D3BD] to-[#02B8A3]"}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-3 max-h-[350px] overflow-hidden overflow-y-scroll">
          <TaskItem
            tasks={"subscribe to deviants telegram"}
            reward={100}
            status={"claimed"}
          />
          <TaskItem
            tasks={"win 2 matches using angel"}
            reward={200}
            status={"start"}
            progress={1}
            goal={2}
          />
          <TaskItem
            tasks={"win one match"}
            reward={50}
            status={"claim"}
            progress={1}
            goal={1}
          />
          <TaskItem
            tasks={"incubate 1 deviant"}
            reward={50}
            status={"start"}
            progress={0}
            goal={1}
          />

          <TaskItem
            tasks={"share battle match to telegram"}
            reward={200}
            status={"start"}
          />
          <TaskItem
            tasks={"log in to the game"}
            reward={50}
            status={"claim"}
          />
          <TaskItem
            tasks={"use crystals to purchase in the shop"}
            reward={100}
            status={"start"}
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
