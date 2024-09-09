import { flyAngelDeviant } from "@/assets";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";

const NewDeviant = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate(PAGES.deviants);
  };
  return (
    <div className="z-10 relative flex flex-col justify-center items-center  w-full">
      <div className="absolute py-12 top-0 left-0 w-full text-white text-center font-['Chakra_Petch'] text-3xl font-bold leading-none uppercase ">
        <div>Meet the</div>
        <div>Angel Deviant</div>
      </div>
      <div>
        <img
          src={flyAngelDeviant}
          alt="fly-angel"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex justify-center w-full py-12">
        <button
          className="rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-bowlby uppercase"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NewDeviant;
