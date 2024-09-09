import { cn } from "@/lib/utils";

export const LightCloudSVG = ({ className }) => {
  return (
    <div className={cn(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 390 841"
        fill="none"
      >
        <g
          style={{ mixBlendMode: "overlay" }}
          filter="url(#filter0_f_370_663)"
        >
          <path
            d="M49.6967 225.401C34.0967 159.401 33.1968 111.401 133.697 64.4012C234.196 17.4011 360.697 89.4012 346.697 127.901C332.697 166.401 146.197 140.901 146.197 219.901C146.197 298.901 176.697 237.401 323.697 261.901C470.697 286.401 309.197 503.901 261.197 591.401C213.197 678.901 345.197 677.901 309.197 724.901C273.197 771.901 91.1968 701.901 33.1968 659.401C-24.8032 616.901 142.697 489.401 146.197 430.401C149.697 371.401 69.1967 307.901 49.6967 225.401Z"
            fill="#C6CBC4"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_370_663"
            x="-79"
            y="-51"
            width="563.096"
            height="891.527"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_370_663"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
