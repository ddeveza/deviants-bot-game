import React from 'react';

const ShopSvg = ({ name, className }) => {
    return (
        <div className={className}>
            {(() => {
                switch (name) {
                    case "Shards Circle":
                        return (
                            <svg width="100%" height="100%" preserveAspectRatio='xMidYMid meet' viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 27C4.5 14.58 14.58 4.5 27 4.5C39.42 4.5 49.5 14.58 49.5 27C49.5 39.42 39.42 49.5 27 49.5C14.58 49.5 4.5 39.42 4.5 27ZM19.5917 17.4758L22.6144 16.0383L22.7929 19.819L19.3036 27.5678L18.5 28.7314L16.9233 26.849L17.4636 20.6879L19.5917 17.4758ZM38.6284 18.5356L31.8858 18.2285L25.0531 21.9279L18.2506 32.3808L19.2722 37.2259L21.8056 35.9168L35.3618 25.4337L38.6284 18.5356ZM33.638 29.4269L36.9817 29.5792L35.3618 33L28.6392 38.1987L27.3829 38.8478L26.8763 36.4451L30.2497 31.2615L33.638 29.4269Z" fill="#171717" />
                            </svg>
                        )
                    case "Back Arrow":
                        return (
                            <svg width="100%" height="100%" preserveAspectRatio='xMidYMid meet' viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 4.5C15.08 4.5 5 14.58 5 27C5 39.42 15.08 49.5 27.5 49.5C39.92 49.5 50 39.42 50 27C50 14.58 39.92 4.5 27.5 4.5ZM35.375 28.6875H23.6975L27.5675 32.5575C28.22 33.21 28.22 34.29 27.5675 34.9425C27.23 35.28 26.8025 35.4375 26.375 35.4375C25.9475 35.4375 25.52 35.28 25.1825 34.9425L18.4325 28.1925C17.78 27.54 17.78 26.46 18.4325 25.8075L25.1825 19.0575C25.835 18.405 26.915 18.405 27.5675 19.0575C28.22 19.71 28.22 20.79 27.5675 21.4425L23.6975 25.3125H35.375C36.2975 25.3125 37.0625 26.0775 37.0625 27C37.0625 27.9225 36.2975 28.6875 35.375 28.6875Z" fill="#171717" />
                            </svg>
                        )
                }
            })()}
        </div>
    );
}

export default ShopSvg;
