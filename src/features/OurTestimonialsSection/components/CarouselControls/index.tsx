"use client"

import React from 'react';
import ArrowButton from '../ArrowButton';

// Define types for button props
interface ButtonProps {
    variant: 'left' | 'right';
    onClick: () => void;
    disabled: boolean;
    className?: string;
}

// Define types for mobile buttons props
interface MobileButtonsProps {
    onPrevClick: () => void;
    onNextClick: () => void;
    prevDisabled: boolean;
    nextDisabled: boolean;
}

function Button({ variant, onClick, disabled, className = "" }: ButtonProps) {
    const combinedClassName = `${className || ''} ${variant === 'left' ? 'lg:block hidden' : 'lg:block hidden'}`;

    return (
        <ArrowButton
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            className={combinedClassName}
        />
    );
}

function MobileButtons({ onPrevClick, onNextClick, prevDisabled, nextDisabled }: MobileButtonsProps) {
    return (
        <div className="flex justify-center gap-4 lg:hidden">
            <ArrowButton
                variant="left"
                onClick={onPrevClick}
                disabled={prevDisabled}
            />
            <ArrowButton
                variant="right"
                onClick={onNextClick}
                disabled={nextDisabled}
            />
        </div>
    );
}

// Define the type for the compound component
const CarouselControls = {
    Button,
    MobileButtons
};

export default CarouselControls;