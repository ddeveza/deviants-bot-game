import { LightCloudSVG } from "@/assets";
import { Progress } from "@/components/ui/progress";
import { TrophySVG } from "./assets";
import { TaskItem } from "./components/task-item";
import { Navbar } from "@/components/navbar";

const Tasks = () => {
  return (
    <div className="bg-[#20506E] flex flex-col justify-between size-full">
      <div className="absolute size-full top-0 left-0 z-[0]">
        <LightCloudSVG className="size-full relative" />
      </div>

      <div className=" flex flex-col space-y-5 z-[1] overflow-y-scroll">
        <div className="px-3 flex flex-col space-y-2 ">
          <p className="proportional-nums lining-nums font-bowlby text-4xl leading-8 -tracking-[0.5px] flex gap-2 items-center text-white">
            <TrophySVG />
            Tasks
          </p>
          <p className="text-white text-sm text-start">Set out to be the best player and claim free crystals, levels, and battle points with the daily tasks!</p>
        </div>
        <div
          className="px-3 bg-white relative p-[4px] rounded-xl z-[3] flex-1 border-2 border-red-700"
          style={{
            background: "linear-gradient(0deg, #AF6C1A 0%, #FEFFBD 100%)",
          }}
        >
          <div className="flex flex-col space-y-3 bg-white h-full w-full p-4 rounded-xl">
            <p className="text-[#281E1E] text-xl font-bowlbyregular leading-[100%]">7 Tasks Available</p>
            <Progress
              value={33}
              className="h-2 bg-[#E6E6E6] w-full"
              indicatorColor={"bg-gradient-to-r from-[#16D3BD] to-[#02B8A3]"}
            />
          </div>
        </div>

        <div className="px-3 flex flex-col space-y-3 py-1">
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
          <TaskItem
            tasks={"win 2 matches using angel"}
            reward={200}
            status={"start"}
            progress={1}
            goal={2}
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
          <TaskItem
            tasks={"win 2 matches using angel"}
            reward={200}
            status={"start"}
            progress={1}
            goal={2}
          />
        </div>
        <div className="border-2 border-red-500">
        <Navbar isAbsolute={false} />
      </div>
      </div>
      
    </div>
  );
};

export default Tasks;
