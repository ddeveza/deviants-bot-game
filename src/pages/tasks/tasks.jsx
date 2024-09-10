import { LightCloudSVG } from "@/assets";
import { Progress } from "@/components/ui/progress";
import { TrophySVG } from "./assets";
import { TaskItem } from "./components/task-item";

const Tasks = () => {
  const testTasks = [
    {
      taskName: "subscribe to deviants telegram",
      reward: 100,
      status: "claimed",
    },
    {
      taskName: "win 2 matches using angel",
      reward: 200,
      status: "start",
      progress: 1,
      goal: 2,
    },
    {
      taskName: "win one match",
      reward: 50,
      status: "claim",
      progress: 1,
      goal: 1,
    },
    {
      taskName: "incubate 1 deviant",
      reward: 50,
      status: "start",
      progress: 0,
      goal: 1,
    },
    {
      taskName: "share battle match to telegram",
      reward: 200,
      status: "start",
    },
    {
      taskName: "log in to the game",
      reward: 50,
      status: "claim",
    },
    {
      taskName: "use crystals to purchase in the shop",
      reward: 100,
      status: "start",
    },
    {
      taskName: "subscribe to deviants telegram",
      reward: 100,
      status: "claimed",
    },
    {
      taskName: "win 2 matches using angel",
      reward: 200,
      status: "start",
      progress: 1,
      goal: 2,
    },
    {
      taskName: "win one match",
      reward: 50,
      status: "claim",
      progress: 1,
      goal: 1,
    },
    {
      taskName: "incubate 1 deviant",
      reward: 50,
      status: "start",
      progress: 0,
      goal: 1,
    },
    {
      taskName: "share battle match to telegram",
      reward: 200,
      status: "start",
    },
    {
      taskName: "log in to the game",
      reward: 50,
      status: "claim",
    },
    {
      taskName: "use crystals to purchase in the shop",
      reward: 100,
      status: "start",
    },
  ];

  return (
    <div className="bg-[#20506E] flex flex-col justify-between size-full">
      <div className="absolute size-full top-0 left-0 z-[0]">
        <LightCloudSVG className="size-full relative" />
      </div>

      <div className="px-3 mt-10 flex flex-col space-y-5 z-[1] ">
        <div className="flex flex-col space-y-2">
          <p className="proportional-nums lining-nums font-bowlby text-4xl leading-8 -tracking-[0.5px] flex gap-2 items-center text-white">
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
            <p className="text-[#281E1E] text-xl font-bowlbyregular leading-[100%]">{testTasks.length} Tasks Available</p>

            <Progress
              value={33}
              className="h-2 bg-[#E6E6E6] w-full"
              indicatorColor={"bg-gradient-to-r from-[#16D3BD] to-[#02B8A3]"}
            />
          </div>
        </div>

        <div
          className="flex flex-col space-y-3 pb-10 overflow-y-scroll"
          style={{ maxHeight: "calc(100vh - 23rem)" }}
        >
          {testTasks.map((task) => {
            const { taskName, reward, status } = task;
            return (
              <TaskItem
                tasks={taskName}
                reward={reward}
                status={status}
                progress={task?.progress}
                goal={task.goal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
