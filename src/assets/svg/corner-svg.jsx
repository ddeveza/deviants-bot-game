export const TopLeftCornerSVG = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M0.25 10.0625V0.0625H10.25"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

export const BottomRightCornerSVG = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M10.25 0.0625L10.25 10.0625L0.25 10.0625"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};
