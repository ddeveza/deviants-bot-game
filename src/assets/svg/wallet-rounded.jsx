export const WalletRoundedIcon = ({ connected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clip-path="url(#clip0_799_582)">
        <path
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16343 24.8366 0 16 0C7.16343 0 0 7.16343 0 16C0 24.8366 7.16343 32 16 32Z"
          fill={connected ? "#0098EA" : "black"}
        />
        <path
          d="M21.4629 8.93018H10.5363C8.52724 8.93018 7.25386 11.0973 8.26461 12.8493L15.0082 24.5377C15.4482 25.3009 16.551 25.3009 16.9911 24.5377L23.736 12.8493C24.7454 11.1001 23.472 8.93018 21.4643 8.93018H21.4629ZM15.0027 21.0325L13.534 18.1902L9.99038 11.8523C9.75661 11.4466 10.0453 10.9268 10.5349 10.9268H15.0013V21.0339L15.0027 21.0325ZM22.0061 11.8509L18.4638 18.1915L16.9952 21.0325V10.9254H21.4616C21.9511 10.9254 22.2399 11.4453 22.0061 11.8509Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_799_582">
          <rect
            width="32"
            height="32"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
