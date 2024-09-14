import React from 'react';
import SvgFilter from './ui/svg-filter';

const DeviantStatRight = ({ deviant, isShop = false, isOwned = false }) => {

    return (
        <div className='w-3/5 h-auto absolute top-0  right-0'>
            <div className="absolute top-0 right-0 deviant-stat-right-container w-full h-full pl-[5px]">
                <div className="relative deviant-stat-right size-full"></div>
            </div>
            {/* Icon and Text */}
            <div className="relative  flex flex-col w-full  py-2 items-end justify-start pb-3 pr-4">
                <div className="relative flex flex-col items-end justify-start w-full pt-1 pb-4">
                    {isShop && <p className="text-[10px] font-light font-chakra text-right uppercase">{isOwned ? "Currently Owned" : "Available"} </p>}

                    <p className="text-base font-bowlby text-right">The {deviant.species}</p>
                    <div className="grid grid-cols-2 justify-end items-end gap-y-1 gap-x-1">
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[10px] font-chakra uppercase leading-[1]'>HP:</p>
                            <p className="text-xs font-bowlby text-right">{deviant.stats.hp}</p>
                        </div>
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[10px] font-chakra uppercase leading-[1]'>Power:</p>
                            <p className="text-xs font-bowlby text-right">{deviant.stats.power}</p>
                        </div>
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[8px] font-chakra uppercase leading-[1]'>Max Energy:</p>
                            <p className="text-xs font-bowlby text-right">{deviant.stats.max_energy}</p>
                        </div>
                        <div className="flex justify-end items-center gap-1">
                            <p className='text-[9px] font-chakra uppercase leading-[1]'>Restore:</p>
                            <p className="text-xs font-bowlby text-right">{deviant.stats.restore}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviantStatRight;
