import { CarouselLeft, CarouselRight, incubatorImg } from "@/assets";

export const IncubationCarousel = ({page, setPage}) => {
  const handleNext=() => {
    if(page === 2 || page === 1){
      setPage( prev => prev +1);
    }
  }
  const handlePrev=() => {
    if(page === 2 || page === 3){
      setPage( prev => prev - 1);
    }
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-between items-center w-full">
        {page !==1 && <div onClick={handlePrev}><CarouselLeft className="absolute bottom-48 left-5"/></div>}
        <div>
          <img
            src={incubatorImg}
            alt="incubator"
            className=""
          />
        </div>
        {page!==3 &&  <div onClick={handleNext}><CarouselRight className="absolute bottom-48 right-5" /></div>}
      </div>

      {/* Carousel Navigation SVG */}
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="15"
          viewBox="0 0 88 15"
          fill="none"
        >
          <ellipse
            cx="21.8192"
            cy="7.50353"
            rx="4.70492"
            ry="4.72973"
            fill="white"
            fillOpacity="0.8"
          />
          <ellipse
            cx="43.9996"
            cy="7.50358"
            rx="6.72131"
            ry="6.75676"
            fill="white"
          />
          <ellipse
            cx="66.1805"
            cy="7.50353"
            rx="4.70492"
            ry="4.72973"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};
