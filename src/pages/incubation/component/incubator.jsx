/* eslint-disable react/prop-types */

import { ShardSVG } from "@/assets";

const Incubator = ({ src, version, value }) => {
  return (
    <div className="relative w-40 h-36 bg-[#E8E8E8] rounded-2xl">
      <img
        src={src}
        alt={version}
        className="absolute h-36 w-36 right-0"
      />
      <div className="absolute bottom-4 text-[10px] font-bold px-3">
        <div>{`Incubator V${version}.0`}</div>
        <div className="flex space-x-2">
          <ShardSVG className={"h-4"} />
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Incubator;
