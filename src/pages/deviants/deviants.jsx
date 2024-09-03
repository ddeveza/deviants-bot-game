import { CloudSVG, LeftRectangle, RightTriangle } from "@/assets";
import { StatsContainer } from "@/components/stats-container";

const Deviants = () => {
  return (
    <div className="flex flex-col bg-[#00CEB5] min-h-screen ">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "contain" }}
        className="min-h-screen"
      >
        <div>
          <StatsContainer />
        </div>
        <div className="flex justify-between">
          <LeftRectangle />
          <RightTriangle />
        </div>
      </div>
    </div>
  );
};

export default Deviants;
