import { CloudSVG, LeftRectangle, RightTriangle } from "@/assets";
import { DeviantsCarousel } from "@/components/deviants-carousel";
import { StatsContainer } from "@/components/stats-container";

const Deviants = () => {
  return (
    <div className="bg-[#00CEB5]">
      <div
        style={{ background: `center no-repeat url(${CloudSVG})`, backgroundSize: "cover" }}
        className="flex flex-col min-h-screen space-y-6"
      >
        <div className=" flex items-center justify-center">
          <StatsContainer />
        </div>
        <div className="flex items-center justify-center w-full border">
          <DeviantsCarousel />
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
