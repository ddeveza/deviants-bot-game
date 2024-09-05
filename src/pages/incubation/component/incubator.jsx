/* eslint-disable react/prop-types */

import { ShardSVG } from "@/assets";

const Incubator = ({ src, version, value, isAllowUpgrade }) => {
  let style = isAllowUpgrade ? {} : { background: `linear-gradient(180deg, rgba(134, 134, 134, 0.50) 0%, rgba(32, 32, 32, 0.50) 48.5%, rgba(134, 134, 134, 0.50) 100%)` };
  return (
    <div
      className="relative w-40 h-36 bg-[#E8E8E8] rounded-2xl"
      style={style}
    >
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
      {!isAllowUpgrade && (
        <div className="absolute uppercase text-[8px] font-extrabold text-center h-full w-full flex items-center justify-center">
          <span className="px-4 py-2 rounded-2xl  bg-[#ffffffcc] ">Need prior incubator</span>
        </div>
      )}
    </div>
  );
};

export default Incubator;
