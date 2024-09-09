import React from 'react';
import { BubbleSVG, flyAngelImg, ShardSVG, ShopButton } from "@/assets";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";

const StatsDiv = ({ level, progress, className, shards }) => {
    return (
        <div className={className}>
            <div className="w-full flex items-center gap-2 bottom-0">
                <Avatar className="bg-gray-600 w-7 h-7">
                    <AvatarImage src={flyAngelImg} />
                    <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 justify-center w-full">
                    <p className="text-[8px] text-[#3F3B3B] ">communityjuice</p>
                    <div className="flex flex-col">
                        <p className="text-[6px] capitalize text-[#606060]">Level {level}</p>
                        <Progress
                            value={progress}
                            className="h-0.5 bg-[#A2A2A2] w-full"
                            indicatorColor={"bg-black"}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-end">
                <ShardSVG className="w-5 h-5" />
                <p className=" whitespace-nowrap text-[14px]">{shards}</p>
            </div>
        </div>
    );
}

export default StatsDiv;
