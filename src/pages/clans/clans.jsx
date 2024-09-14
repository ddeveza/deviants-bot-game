import loreBgBnw from '../../assets/images/lore-bg-bnw.webp'
import React, { useRef } from 'react';
import { ClansContainer } from './clans-container';

const Clans = () => {
    const mainContainer = useRef();
    return (
        <div ref={mainContainer} className="relative size-full pb-[5.5rem] bg-[#2F2F2F]">
            <div className="absolute size-full top-0 left-0">
                <img src={loreBgBnw} alt="" className="object-cover object-center opacity-50" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start z-[2] gap-4">
                <ClansContainer />
                <div className="relative py-4">
                    <h1 className="text-white font-chakra">No Clans Available.</h1>
                </div>
            </div>
        </div>
    );
}

export default Clans;
