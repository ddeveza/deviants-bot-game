import { flyAngelImg, ShardSVG } from "@/assets";
import { BottomRightCornerSVG, TopLeftCornerSVG } from "@/assets/svg/corner-svg";
import { Modal } from "./modal";
import { Button } from "./ui/button";
import { DialogClose } from "./ui/dialog";

export const StatsModal = ({ children }) => {
  return (
    <Modal
      triggerButton={children}
      disabledCloseButton={true}
      className={"max-w-[360px] bg-transparent border-none p-0 gap-0"}
    >
      {/* Outer SVG (Shadow) */}
      <div className="relative">
        <p className="text-white font-extrabold text-lg uppercase absolute -translate-x-1/2 left-1/2 -top-10">Stats</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356 439"
          fill="none"
          className="absolute -z-10 top-1.5 w-full"
        >
          <path
            d="M0.25 35.3922V428.75C0.25 434.273 4.72715 438.75 10.25 438.75H345.75C351.273 438.75 355.75 434.273 355.75 428.75V402.75V10.75C355.75 5.22715 351.273 0.75 345.75 0.75H34.8921C32.24 0.75 29.6964 1.80357 27.8211 3.67893L3.17893 28.3211C1.30357 30.1964 0.25 32.74 0.25 35.3922Z"
            fill="#DADADA"
          />
        </svg>

        {/* Inner SVG (Light) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356 439"
          fill="none"
          className="w-full relative"
        >
          <path
            d="M0.25 34.8922V428.25C0.25 433.773 4.72715 438.25 10.25 438.25H345.75C351.273 438.25 355.75 433.773 355.75 428.25V402.25V10.25C355.75 4.72715 351.273 0.25 345.75 0.25H34.8921C32.24 0.25 29.6964 1.30357 27.8211 3.17893L3.17893 27.8211C1.30357 29.6964 0.25 32.24 0.25 34.8922Z"
            fill="white"
          />
        </svg>

        <div className="absolute top-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 333 222"
            fill="none"
            className="p-2"
          >
            <defs>
              <clipPath id="clipPathShape">
                <path d="M0.25 32.1236V211.062C0.25 216.585 4.72715 221.062 10.25 221.062H294.553C297.166 221.062 299.676 220.039 301.545 218.212L329.241 191.128C331.165 189.247 332.25 186.67 332.25 183.979V10.0625C332.25 4.53965 327.773 0.0625 322.25 0.0625H32.8106C30.1971 0.0625 27.6876 1.08558 25.8191 2.91274L3.25851 24.9739C1.33453 26.8553 0.25 29.4327 0.25 32.1236Z" />
              </clipPath>
            </defs>

            <g clipPath="url(#clipPathShape)">
              {/* Background Rect to fill the transparent parts of the image */}
              <rect
                width="100%"
                height="100%"
                fill="#72E6DF"
              />
              <image
                href={flyAngelImg}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
          <div className="flex flex-col space-y-3 px-2">
            <DeviantStat
              attribute={"new hp"}
              value={3000}
              isShard={false}
            />
            <DeviantStat
              attribute={"new max energy"}
              value={1000}
              isShard={false}
            />
            <DeviantStat
              attribute={"new restore"}
              value={80}
              isShard={false}
            />
            <DeviantStat
              attribute={"new power"}
              value={80}
              isShard={false}
            />

            <DeviantStat
              attribute={"shard cost"}
              value={10000}
              isShard={true}
            />
          </div>
        </div>

        <div className="flex m-auto mt-6">
          <DialogClose asChild>
            <Button className="rounded-full px-7 bg-white text-black font-extrabold uppercase m-auto">Close</Button>
          </DialogClose>
        </div>
      </div>
    </Modal>
  );
};

const DeviantStat = ({ attribute, value, isShard }) => {
  return (
    <div className="flex justify-start px-3 py-1 bg-[#E4E4E4] relative">
      <div className="absolute top-0 left-0">
        <TopLeftCornerSVG />
      </div>
      <div className="absolute bottom-0 right-0">
        <BottomRightCornerSVG />
      </div>

      <p className="text-xs font-bold uppercase">{attribute}</p>
      <p className="text-3xl font-extrabold absolute right-4 -top-3.5">
        {isShard ? (
          <span className="flex items-center gap-1">
            <ShardSVG className="w-7 h-7" /> {value}
          </span>
        ) : (
          value
        )}
      </p>
    </div>
  );
};
