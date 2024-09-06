import { flyAngelDeviant } from "@/assets";
import { PAGES } from "@/constant/pages";
import { useNavigate } from "react-router-dom";

const NewDeviant = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate(PAGES.deviants);
  };
  return (
    <div className="z-10 flex flex-col justify-between items-center my-20 w-full">
      <div className="text-white text-center font-chakra text-3xl font-bold leading-none uppercase ">
        <div>Meet the</div>
        <div>Angel Deviant</div>
      </div>
      <div>
        <img
          src={flyAngelDeviant}
          alt="fly-angel"
        />
      </div>
      <div>
        <button
          className="rounded-[20px] py-2.5 px-8 text-[161313] bg-white font-extrabold uppercase"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NewDeviant;
