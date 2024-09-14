import React from 'react';
import Back from '../assets/images/incubator/Back.webp'
import GlassBlue from '../assets/images/incubator/GlassBlue.webp'
import GlassGreen from '../assets/images/incubator/GlassGreen.webp'
import GlassPurple from '../assets/images/incubator/GlassPurple.webp'
import GlassRed from '../assets/images/incubator/GlassRed.webp'
import GlassYellow from '../assets/images/incubator/GlassYellow.webp'
import Incubator1 from '../assets/images/incubator/Incubator1.webp'
import Incubator2 from '../assets/images/incubator/Incubator2.webp'
import Incubator3 from '../assets/images/incubator/Incubator3.webp'
import Incubator4 from '../assets/images/incubator/Incubator4.webp'
import Incubator5 from '../assets/images/incubator/Incubator5.webp'
import DeviantCharacters from './deviant-characters';
const Incubators = ({ level, deviant, isOccupied = false, className }) => {
    return (
        <>
            {(() => {
                switch (level) {
                    case 0:
                        return (
                            <div className={className}>
                                <img src={Back} className='absolute top-0 left-0 size-full object-contain object-center' />
                                {isOccupied && <DeviantCharacters className="absolute top-0 left-0 size-full" species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Incubation" />}
                                <img src={GlassBlue} className='absolute top-0 left-0 size-full object-contain object-center' />
                                <img src={Incubator1} className='absolute top-0 left-0 size-full object-contain object-center' />
                            </div>
                        )
                    case 1:
                        return (
                            <div className={className}>
                                <img src={Back} className='absolute top-0 left-0 size-full object-contain object-center' />
                                {isOccupied && <DeviantCharacters className="absolute top-0 left-0 size-full" species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Incubation" />}
                                <img src={GlassGreen} className='absolute top-0 left-0 size-full object-contain object-center' />
                                <img src={Incubator2} className='absolute top-0 left-0 size-full object-contain object-center' />
                            </div>
                        )
                    case 2:
                        return (
                            <div className={className}>
                                <img src={Back} className='absolute top-0 left-0 size-full object-contain object-center' />
                                {isOccupied && <DeviantCharacters className="absolute top-0 left-0 size-full" species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Incubation" />}
                                <img src={GlassRed} className='absolute top-0 left-0 size-full object-contain object-center' />
                                <img src={Incubator3} className='absolute top-0 left-0 size-full object-contain object-center' />
                            </div>
                        )
                    case 3:
                        return (
                            <div className={className}>
                                <img src={Back} className='absolute top-0 left-0 size-full object-contain object-center' />
                                {isOccupied && <DeviantCharacters className="absolute top-0 left-0 size-full" species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Incubation" />}
                                <img src={GlassPurple} className='absolute top-0 left-0 size-full object-contain object-center' />
                                <img src={Incubator4} className='absolute top-0 left-0 size-full object-contain object-center' />
                            </div>
                        )
                    case 4:
                        return (
                            <div className={className}>
                                <img src={Back} className='absolute top-0 left-0 size-full object-contain object-center' />
                                {isOccupied && <DeviantCharacters className="absolute top-0 left-0 size-full" species={deviant.species} evolutionPhase={deviant.evolutionPhase} pose="Incubation" />}
                                <img src={GlassYellow} className='absolute top-0 left-0 size-full object-contain object-center' />
                                <img src={Incubator5} className='absolute top-0 left-0 size-full object-contain object-center' />
                            </div>
                        )



                }
            })()}

        </>
    );
}

export default Incubators;
