export const BoostButton = () => {
  return <div className="relative cursor-pointer">
    {/* Outer SVG (Dark Shadow) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="113"
      height="67"
      viewBox="0 0 100 59"
      fill="none"
      className="absolute -z-10 top-1.5"
    >
      <path
        d="M0.744141 10.1821C0.744141 4.65928 5.22129 0.182129 10.7441 0.182129H100V58.5364H35.6987C33.1506 58.5364 30.6986 57.5637 28.8435 55.8169L3.88895 32.3203C1.88202 30.4307 0.744141 27.7963 0.744141 25.0398V10.1821Z"
        fill="#BBBBBB"
      />
    </svg>

    {/* Inner SVG  */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="113"
      height="67"
      viewBox="0 0 100 59"
      fill="none"
    >
      <path
        d="M0.744141 10C0.744141 4.47715 5.22129 0 10.7441 0H100V58.3542H35.6987C33.1506 58.3542 30.6986 57.3815 28.8435 55.6348L3.88895 32.1382C1.88202 30.2485 0.744141 27.6142 0.744141 24.8577V10Z"
        fill="white"
      />
    </svg>

    {/* Icon and Text */}
    <div className="flex flex-col items-center absolute bottom-2 right-3">
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.9326 4.5C14.5126 4.5 4.43262 14.58 4.43262 27C4.43262 39.42 14.5126 49.5 26.9326 49.5C39.3526 49.5 49.4326 39.42 49.4326 27C49.4326 14.58 39.3751 4.5 26.9326 4.5ZM35.3701 27.7875L27.0001 37.305L26.0101 38.43C24.6376 39.9825 23.5126 39.5775 23.5126 37.485V28.575H19.6876C17.9551 28.575 17.4826 27.5175 18.6301 26.2125L27.0001 16.695L27.9901 15.57C29.3626 14.0175 30.4876 14.4225 30.4876 16.515V25.425H34.3126C36.0451 25.425 36.5176 26.4825 35.3701 27.7875Z"
          fill="#171717"
        />
      </svg>
      <p className="text-sm uppercase font-extrabold">Boost</p>
    </div>
  </div>;
};
