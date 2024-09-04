import { incubatorsUpgradeSVG } from "@/assets"
import { incubatorGreenImg, incubatorRedImg, incubatorWhiteImg, incubatorYellowImg } from "../assets/images"
import Incubator from "./incubator"


const incubators = [
    {
      src:incubatorGreenImg,
      version:2,
      value: 10000,
      isAllowUpgrade:false,
    },
   {
      src:incubatorRedImg,
      version:3,
      value: 30000,
      isAllowUpgrade:false,
    },
    {
      src:incubatorWhiteImg,
      version:4,
      value: 50000,
      isAllowUpgrade:false,
    },
    {
      src:incubatorYellowImg,
      version:5,
      value: 100000,
      isAllowUpgrade:false,
    },
    {
      src:incubatorWhiteImg,
      version:6,
      value: 200000,
      isAllowUpgrade:false,
    },
    {
      src:incubatorRedImg,
      version:7,
      value: 300000,
      isAllowUpgrade:false,
    },
    
]


const IncubatorList = () => {
  return (
    <div className="absolute grid grid-cols-2 items-center gap-2 overflow-y-auto">
      {incubators.map(incubator => <Incubator key={incubator.version} {...incubator}/>)}
    </div>
  )
}

export default IncubatorList