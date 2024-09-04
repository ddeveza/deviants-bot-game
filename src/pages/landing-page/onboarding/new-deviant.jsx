import { flyAngelDeviant, loreBG } from "@/assets";

const NewDeviant = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center space-y-10"
      style={{ background: `no-repeat url(${loreBG})`, backgroundColor: "currentcolor" }}
    >
      <div className="text-white text-center font-chakra text-2xl font-bold leading-none uppercase max-w-52">
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
          onClick={() => {}}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default NewDeviant