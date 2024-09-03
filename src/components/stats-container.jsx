export const StatsContainer = () => {
  return (
    <div className="relative px-3.5">
      {/* Darker SVG (shadow) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 367 244"
        fill="none"
        className="absolute top-0 left-0 z-0 px-2.5"
      >
        <path
          d="M0 234V0H367V188.682C367 194.205 362.523 198.682 357 198.682L257.785 198.682C255.049 198.682 252.432 199.804 250.544 201.785L213.283 240.898C211.396 242.879 208.779 244 206.043 244H10C4.47715 244 0 239.523 0 234Z"
          fill="#BBBBBB"
        />
      </svg>

      {/* Lighter SVG (main shape) */}
      <div className="border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 363 238"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M0.5 227.345V0H362.5V181.318C362.5 186.841 358.023 191.318 352.5 191.318H255.806C253.057 191.318 250.43 192.45 248.541 194.446L210.921 234.217C209.032 236.214 206.405 237.345 203.656 237.345H10.5C4.97715 237.345 0.5 232.868 0.5 227.345Z"
            fill="#F0F0F0"
          />
        </svg>
      </div>
    </div>
  );
};
