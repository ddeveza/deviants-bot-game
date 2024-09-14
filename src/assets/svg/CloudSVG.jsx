export const CloudSVG = ({ className, color }) => {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 390 814"
                fill="none"
            >
                <g filter="url(#filter0_f_488_887)">
                    <path
                        d="M46.2435 197.986C30.6435 131.986 29.7437 83.9865 130.244 36.9864C230.743 -10.0137 357.244 61.9864 343.244 100.486C329.244 138.986 142.744 113.486 142.744 192.486C142.744 271.486 173.244 209.986 320.244 234.486C467.244 258.986 305.744 476.486 257.744 563.986C209.744 651.486 341.744 650.486 305.744 697.486C269.744 744.486 87.7437 674.486 29.7437 631.986C-28.2563 589.486 139.244 461.986 142.744 402.986C146.244 343.986 65.7435 280.486 46.2435 197.986Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_488_887"
                        x="-82.4531"
                        y="-78.4148"
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
                            result="effect1_foregroundBlur_488_887"
                        />
                    </filter>
                </defs>
            </svg>
        </div>


    )
}