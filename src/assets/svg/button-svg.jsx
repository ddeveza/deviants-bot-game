export const ShopButton = () => {
  return (
    <div className="relative w-full cursor-pointer ">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="40"
        viewBox="0 0 135 40"
        fill="none"
        className="absolute top-1 left-0 z-0 w-full"
      >
        <path
          d="M22.226 3.1906L3.62966 23.1906C-2.31824 29.5875 2.21821 40 10.953 40H125C130.523 40 135 35.5228 135 30V10C135 4.47715 130.523 0 125 0H29.5494C26.771 0 24.1179 1.15589 22.226 3.1906Z"
          fill="#815F00"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="40"
        viewBox="0 0 134 40"
        fill="none"
        className="relative z-10 w-full"
      >
        <path
          d="M21.6072 3.12811L3.45942 22.3135C-2.57114 28.6888 1.94851 39.1854 10.7242 39.1854H124C129.523 39.1854 134 34.7082 134 29.1854V10C134 4.47715 129.523 0 124 0H28.872C26.1234 0 23.496 1.13132 21.6072 3.12811Z"
          fill="url(#paint0_linear_488_950)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_488_950"
            x1="42.0541"
            y1="-7.59753e-06"
            x2="132.297"
            y2="37.8851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DFBB00" />
            <stop
              offset="0.27212"
              stopColor="#C99D00"
            />
            <stop
              offset="0.690781"
              stopColor="#DFBB00"
            />
            <stop
              offset="1"
              stopColor="#795700"
            />
          </linearGradient>
        </defs>
      </svg>

      <p className="absolute inset-0 left-2 flex items-center justify-center z-20 text-white font-bold uppercase">Shop</p>
    </div>
  );
};

export const CarouselLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="none"
      className="relative translate-x-10"
    >
      <path
        opacity="0.5"
        d="M27 29.446V2.55405C27 0.99478 25.2949 0.0352472 23.962 0.844474L1.81577 14.2904C0.533045 15.0692 0.533045 16.9308 1.81577 17.7096L23.962 31.1555C25.2949 31.9648 27 31.0052 27 29.446Z"
        fill="white"
      />
    </svg>
  );
};

export const CarouselRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="32"
      viewBox="0 0 27 32"
      fill="none"
      className="relative -translate-x-10"
    >
      <path
        opacity="0.5"
        d="M0 29.446V2.55405C0 0.99478 1.70511 0.0352472 3.03796 0.844474L25.1842 14.2904C26.467 15.0692 26.467 16.9308 25.1842 17.7096L3.03796 31.1555C1.70511 31.9648 0 31.0052 0 29.446Z"
        fill="white"
      />
    </svg>
  );
};
