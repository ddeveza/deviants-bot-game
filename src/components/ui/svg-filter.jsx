const SvgFilter = ({ id, dropShadowColor, roundCorner, side }) => {
  return (
    <svg
      className="absolute invisible"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={roundCorner}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result={id}
          />
          <feComposite
            in="SourceGraphic"
            in2={id}
            operator="atop"
          />
          {dropShadowColor &&
            (side == "left" ? (
              <feDropShadow
                dx="-4"
                dy="7"
                stdDeviation="0"
                floodOpacity="1"
                floodColor={dropShadowColor}
              />
            ) : (
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="0"
                floodOpacity="1"
                floodColor={dropShadowColor}
              />
            ))}
        </filter>
      </defs>
    </svg>
  );
};

export default SvgFilter;
