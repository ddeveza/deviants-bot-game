import React from 'react';
import SvgFilter from './ui/svg-filter';

const IncubatorStatRight = ({ incubator, isShop = false, isOwned = false }) => {

    return (
        <div className='w-3/5 h-auto absolute top-0  right-0'>
            <div className="absolute top-0 right-0 incubator-stat-right-container w-full h-full pl-[5px]">
                <div className="relative incubator-stat-right size-full"></div>
            </div>
            {/* Icon and Text */}
            <div className="relative  flex flex-col w-full  py-2 items-end justify-start pb-3 pr-4">
                <div className="relative flex flex-col items-end justify-start w-full pt-1 pb-4">
                    {isShop && <p className="text-[10px] font-light font-chakra text-right uppercase">{incubator.status} </p>}

                    <p className="text-base font-bowlby text-right">Incubator V{incubator.incubatorLevel}.0</p>
                    <div className="grid grid-cols-1 justify-end items-end gap-y-1 gap-x-1">
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[10px] font-chakra uppercase leading-[1]'>Time Reduction:</p>
                            <p className="text-xs font-bowlby text-right">{incubator.incubatorStats.time_reduction}</p>
                        </div>
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[10px] font-chakra uppercase leading-[1]'>Max Energy:</p>
                            <p className="text-xs font-bowlby text-right">{incubator.incubatorStats.max_energy}</p>
                        </div>
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[10px] font-chakra uppercase leading-[1]'>Restore:</p>
                            <p className="text-xs font-bowlby text-right">{incubator.incubatorStats.restore}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncubatorStatRight;
