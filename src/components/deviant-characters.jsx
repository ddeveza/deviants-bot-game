import React from 'react';
// import ApeNaturaCard from '../assets/images/deviants/ApeCard.webp'
// import ApeNaturaPVP from '../assets/images/deviants/ApePVP.webp'
// import ApeNaturaIncubation from '../assets/images/deviants/ApePVP.webp'
import AngelNaturaCard from '../assets/images/deviants/AngelCard.webp'
import AngelNaturaPVP from '../assets/images/deviants/AngelPVP.webp'
import AngelNaturaIncubation from '../assets/images/deviants/AngelPVP.webp'
import AlienNaturaCard from '../assets/images/deviants/AlienPVP.webp'
import AlienNaturaPVP from '../assets/images/deviants/AlienPVP.webp'
import AlienNaturaIncubation from '../assets/images/deviants/AlienPVP.webp'
import CyborgNaturaCard from '../assets/images/deviants/CyborgPVP.webp'
import CyborgNaturaPVP from '../assets/images/deviants/CyborgPVP.webp'
import CyborgNaturaIncubation from '../assets/images/deviants/CyborgPVP.webp'
import DevilNaturaCard from '../assets/images/deviants/DevilCard.webp'
import DevilNaturaPVP from '../assets/images/deviants/DevilPVP.webp'
import DevilNaturaIncubation from '../assets/images/deviants/DevilPVP.webp'
import ElementalNaturaCard from '../assets/images/deviants/ElementalCard.webp'
import ElementalNaturaPVP from '../assets/images/deviants/ElementalPVP.webp'
import ElementalNaturaIncubation from '../assets/images/deviants/ElementalPVP.webp'
import ElfNaturaCard from '../assets/images/deviants/ElfCard.webp'
import ElfNaturaPVP from '../assets/images/deviants/ElfPVP.webp'
import ElfNaturaIncubation from '../assets/images/deviants/ElfPVP.webp'
import FairyNaturaCard from '../assets/images/deviants/FairyPVP.webp'
import FairyNaturaPVP from '../assets/images/deviants/FairyPVP.webp'
import FairyNaturaIncubation from '../assets/images/deviants/FairyPVP.webp'
import GhoulNaturaCard from '../assets/images/deviants/GhoulPVP.webp'
import GhoulNaturaPVP from '../assets/images/deviants/GhoulPVP.webp'
import GhoulNaturaIncubation from '../assets/images/deviants/GhoulPVP.webp'
import RobotNaturaCard from '../assets/images/deviants/RobotPVP.webp'
import RobotNaturaPVP from '../assets/images/deviants/RobotPVP.webp'
import RobotNaturaIncubation from '../assets/images/deviants/RobotPVP.webp'
import SkeletonNaturaCard from '../assets/images/deviants/SkeletonPVP.webp'
import SkeletonNaturaPVP from '../assets/images/deviants/SkeletonPVP.webp'
import SkeletonNaturaIncubation from '../assets/images/deviants/SkeletonPVP.webp'
import TrollNaturaCard from '../assets/images/deviants/TrollPVP.webp'
import TrollNaturaPVP from '../assets/images/deviants/TrollPVP.webp'
import TrollNaturaIncubation from '../assets/images/deviants/TrollPVP.webp'
import VampireNaturaCard from '../assets/images/deviants/VampirePVP.webp'
import VampireNaturaPVP from '../assets/images/deviants/VampirePVP.webp'
import VampireNaturaIncubation from '../assets/images/deviants/VampirePVP.webp'
import ZombieNaturaCard from '../assets/images/deviants/ZombiesPVP.webp'
import ZombieNaturaPVP from '../assets/images/deviants/ZombiesPVP.webp'
import ZombieNaturaIncubation from '../assets/images/deviants/ZombiesPVP.webp'
const DeviantCharacters = ({ species, evolutionPhase, pose, className }) => {
    return (
        <>
            {(() => {
                switch (species) {
                    case "Human":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Elf":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={ElfNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={ElfNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={ElfNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Angel":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={AngelNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={AngelNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={AngelNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Vampire":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={VampireNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={VampireNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={VampireNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Robot":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={RobotNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={RobotNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={RobotNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Zombie":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={ZombieNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={ZombieNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={ZombieNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Ape":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Cyborg":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={CyborgNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={CyborgNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={CyborgNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Skeleton":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={SkeletonNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={SkeletonNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={SkeletonNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Troll":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={TrollNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={TrollNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={TrollNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Devil":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={DevilNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={DevilNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={DevilNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Fairy":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={FairyNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={FairyNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={FairyNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Alien":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={AlienNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={AlienNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={AlienNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Ghoul":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={GhoulNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={GhoulNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={GhoulNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }
                    case "Elemental":
                        switch (evolutionPhase) {
                            case "Natura":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={ElementalNaturaCard} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={ElementalNaturaPVP} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={ElementalNaturaIncubation} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Gesis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                            case "Vitalis":
                                switch (pose) {
                                    case "Card":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "PVP":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                    case "Incubation":
                                        return (
                                            <div className={className}>
                                                <img src={null} className='size-full object-contain object-bottom' />
                                            </div>
                                        )
                                }
                        }

                }
            })()}

        </>
    );
}

export default DeviantCharacters;
