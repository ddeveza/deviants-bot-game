import React from 'react';

const SearchSVG = ({ className }) => {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio='xMidYMid meet' viewBox="0 0 16 17" fill="none">
                <circle cx="7.33317" cy="7.83317" r="4.66667" stroke="white" strokeWidth="2" />
                <path d="M7.3335 5.8335C7.07085 5.8335 6.81078 5.88523 6.56813 5.98574C6.32548 6.08625 6.105 6.23357 5.91928 6.41928C5.73357 6.605 5.58625 6.82548 5.48574 7.06813C5.38523 7.31078 5.3335 7.57085 5.3335 7.8335" stroke="white" strokeLinecap="round" />
                <path d="M13.3335 13.8335L11.3335 11.8335" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
        </div>
    );
}

export default SearchSVG;
