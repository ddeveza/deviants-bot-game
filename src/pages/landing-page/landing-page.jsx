
import { deviantImg } from "@/assets";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
      return (
            <div
                  style={{ background: `center no-repeat url(${deviantImg.flyDevilImg}) #CB1800`, backgroundSize:'cover' }}
                  className='flex flex-col h-full'
            >
                <h1>Deviants</h1>
                <Button>Play Game</Button>
            </div>
      );
};

export default LandingPage;
