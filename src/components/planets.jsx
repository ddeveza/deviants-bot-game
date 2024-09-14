import React, { useRef } from 'react';
import Sun from '../assets/images/Planets/sun.webp'
import Planet1 from '../assets/images/Planets/planet1.webp'
import Planet2 from '../assets/images/Planets/planet2.webp'
import Planet3 from '../assets/images/Planets/planet3.webp'
import Planet4 from '../assets/images/Planets/planet4.webp'
import Planet5 from '../assets/images/Planets/planet5.webp'
import { useGSAP } from '@gsap/react';
import gsap, { MotionPathPlugin } from 'gsap/all';
const Planets = ({ className }) => {
    gsap.registerPlugin(MotionPathPlugin);
    const mainContainer = useRef();
    useGSAP(() => {
        gsap.to("#Asset_8", {
            duration: 14,
            motionPath: {
                path: "#ellipse_1336",
                align: "#ellipse_1336",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            repeat: -1,
            ease: "none"
        });
        gsap.to("#Asset_11", {
            duration: 4,
            motionPath: {
                path: "#ellipse_1340",
                align: "#ellipse_1340",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            repeat: -1,
            ease: "none"
        }).progress(0.2);
        gsap.to("#Asset_12", {
            duration: 8,
            motionPath: {
                path: "#ellipse_1339",
                align: "#ellipse_1339",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            repeat: -1,
            ease: "none"
        }).progress(0.6);
        gsap.to("#Asset_20", {
            duration: 16,
            motionPath: {
                path: "#ellipse_1341",
                align: "#ellipse_1341",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            repeat: -1,
            ease: "none"
        }).progress(0.5);
        gsap.to("#Asset_19", {
            duration: 10,
            motionPath: {
                path: "#ellipse_1337",
                align: "#ellipse_1337",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            repeat: -1,
            ease: "none"
        }).progress(0.4);
    }, { scope: mainContainer, revertOnUpdate: true })
    return (
        <div ref={mainContainer} className={className} >
            <svg width="100%" height="100%" preserveAspectRatio='xMidYMid meet' viewBox="0 0 352 252" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Group 1321315142">
                    <path id="ellipse_1336" d="M282.815 100.907C286.3 118.066 277.449 136.086 260.22 151.356C242.995 166.622 217.435 179.099 187.618 185.155C157.801 191.211 129.398 189.694 107.583 182.358C85.7616 175.019 70.5822 161.879 67.0972 144.72C63.6123 127.562 72.4627 109.541 89.6925 94.2712C106.917 79.006 132.477 66.5283 162.294 60.4724C192.111 54.4165 220.514 55.9338 242.329 63.27C264.151 70.6086 279.33 83.7486 282.815 100.907Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    <path id="ellipse_1341" d="M331.177 91.0846C336.257 116.1 323.437 142.332 298.502 164.527C273.571 186.718 236.567 204.835 193.395 213.604C150.224 222.372 109.084 220.126 77.4718 209.42C45.853 198.711 23.8153 179.558 18.7346 154.543C13.654 129.528 26.4738 103.296 51.4095 81.1004C76.3399 58.9098 113.344 40.7924 156.516 32.0241C199.687 23.2557 240.828 25.5015 272.439 36.2082C304.058 46.9171 326.096 66.0697 331.177 91.0846Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    <path id="ellipse_1337" d="M259.109 105.722C261.849 119.216 254.977 133.379 241.55 145.374C228.128 157.365 208.192 167.153 184.922 171.879C161.653 176.606 139.478 175.371 122.442 169.566C105.399 163.759 93.5457 153.399 90.8051 139.906C88.0645 126.412 94.937 112.249 108.364 100.253C121.786 88.2623 141.722 78.4746 164.991 73.7484C188.261 69.0221 210.436 70.2571 227.472 76.0619C244.515 81.869 256.368 92.2286 259.109 105.722Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    <path id="ellipse_1339" d="M246.777 108.226C249.092 119.624 243.215 131.609 231.74 141.78C220.27 151.945 203.244 160.258 183.377 164.293C163.511 168.328 144.591 167.316 130.064 162.431C115.53 157.543 105.443 148.799 103.129 137.402C100.814 126.004 106.69 114.018 118.166 103.848C129.636 93.6823 146.662 85.3695 166.528 81.3346C186.394 77.2997 205.315 78.3116 219.841 83.1969C234.375 88.0847 244.462 96.8284 246.777 108.226Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    <path id="ellipse_1340" d="M230.66 111.5C232.443 120.279 227.89 129.527 218.983 137.389C210.082 145.247 196.87 151.68 181.455 154.81C166.041 157.941 151.366 157.172 140.105 153.41C128.836 149.646 121.036 142.906 119.253 134.128C117.47 125.349 122.023 116.1 130.93 108.238C139.832 100.381 153.044 93.9482 168.458 90.8174C183.873 87.6866 198.548 88.4557 209.809 92.2177C221.077 95.9821 228.877 102.722 230.66 111.5Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    <g id="ellipse_1338">
                        <ellipse cx="174.955" cy="122.814" rx="16.4499" ry="9.6764" transform="rotate(-11.4809 174.955 122.814)" fill="#757575" />
                        <path d="M190.831 119.589C191.338 122.086 190.084 124.74 187.549 127.018C185.019 129.292 181.247 131.155 176.831 132.052C172.415 132.948 168.216 132.705 164.999 131.598C161.776 130.489 159.586 128.535 159.079 126.038C158.572 123.542 159.826 120.888 162.361 118.61C164.891 116.336 168.663 114.473 173.079 113.576C177.494 112.679 181.694 112.923 184.911 114.03C188.134 115.138 190.324 117.093 190.831 119.589Z" stroke="#818181" strokeOpacity="0.5" strokeWidth="0.5" />
                    </g>
                    <rect id="Asset_4" x="155.56" y="109.967" width="33.8674" height="32.8998" transform="rotate(-11.4809 155.56 109.967)" fill="url(#pattern0_272_5741)" />
                    <rect id="Asset_8" width="18.7175" height="19.4815" transform="rotate(-11.4809 63.2588 154.322)" fill="url(#pattern1_272_5741)" />
                    <rect id="Asset_11" width="8.78579" height="9.16778" transform="rotate(-11.4809 134.129 148.217)" fill="url(#pattern2_272_5741)" />
                    <rect id="Asset_12" width="11.4597" height="11.4597" transform="rotate(-11.4809 197.301 152.175)" fill="url(#pattern3_272_5741)" />
                    <rect id="Asset_20" width="30.5593" height="30.1773" transform="rotate(-11.4809 230.865 181.169)" fill="url(#pattern4_272_5741)" />
                    <rect id="Asset_19" width="13.7517" height="13.7517" transform="rotate(-11.4809 215.438 68.7615)" fill="url(#pattern5_272_5741)" />
                </g>
                <defs>
                    <pattern id="pattern0_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_272_5741" transform="matrix(0.00195312 0 0 0.00201057 0 -0.0106847)" />
                    </pattern>
                    <pattern id="pattern1_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image1_272_5741" transform="matrix(0.00178834 0 0 0.00171821 -0.00878396 0)" />
                    </pattern>
                    <pattern id="pattern2_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image2_272_5741" transform="matrix(0.00185672 0 0 0.00177936 -0.0208108 0)" />
                    </pattern>
                    <pattern id="pattern3_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image3_272_5741" transform="translate(0 -0.000822368) scale(0.00164474)" />
                    </pattern>
                    <pattern id="pattern4_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image4_272_5741" transform="matrix(0.00158 0 0 0.0016 -0.000860005 0)" />
                    </pattern>
                    <pattern id="pattern5_272_5741" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image5_272_5741" transform="scale(0.00184162)" />
                    </pattern>
                    <image id="image0_272_5741" data-name="Asset 4.png" width="512" height="508" xlinkHref={Sun} href={Sun} />
                    <image id="image1_272_5741" data-name="Asset 8.png" width="569" height="582" xlinkHref={Planet4} href={Planet4} />
                    <image id="image2_272_5741" data-name="Asset 11.png" width="561" height="562" xlinkHref={Planet1} href={Planet1} />
                    <image id="image3_272_5741" data-name="Asset 12.png" width="608" height="609" xlinkHref={Planet2} href={Planet2} />
                    <image id="image4_272_5741" data-name="Asset 16.png" width="634" height="625" xlinkHref={Planet5} href={Planet5} />
                    <image id="image5_272_5741" data-name="Asset 10.png" width="543" height="543" xlinkHref={Planet3} href={Planet3} />
                </defs>
            </svg>
        </div>
    );
}

export default Planets;
