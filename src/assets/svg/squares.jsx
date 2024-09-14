import { cn } from '@/lib/utils';
import React from 'react';

const Squares = ({ className }) => {
    return (
        <div className={cn(className)}>
            <svg width="100%" height="100%" preserveAspectRatio='xMidYMid meet' viewBox="0 0 10 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <g opacity="0.6">
                        <rect y="65" width="10" height="10" fill="white" />
                    </g>
                    <g opacity="0.8">
                        <rect y="34" width="10" height="10" fill="white" />
                    </g>
                    <g>
                        <rect width="10" height="10" fill="white" />
                    </g>
                    <g opacity="0.4">
                        <rect y="95" width="10" height="10" fill="white" />
                    </g>
                    <g opacity="0.2">
                        <rect y="125" width="10" height="10" fill="white" />
                    </g>
                </g>
            </svg>

        </div>
    );
}

export default Squares;
