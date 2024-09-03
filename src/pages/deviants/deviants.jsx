import { AngelDeviant, CloudSVG, LeftRectangle, RightTriangle } from "@/assets";
import { StatsContainer } from "@/components/stats-container";

const Deviants = () => {
  return (
    <div className="bg-[#00CEB5]">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col min-h-screen space-y-16"
      >
        <div>
          <StatsContainer />
        </div>
        <div>
          <img
            src={AngelDeviant}
            alt="Deviant"
          />
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
