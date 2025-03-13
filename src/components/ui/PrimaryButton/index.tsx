"use client"
import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react'


type PrimaryButton = {
    className?: string;
    onClick?: React.MouseEvent<HTMLButtonElement>;
    children: React.ReactNode;
    type?: string;
}
function PrimaryButton({ className, onClick, children, type }: PrimaryButton) {
    return (
        <button
            onClick={() => onClick}
            className={cn(
                "2xl:px-[30px]", "px-[24px]",
                "2xl:py-[14px] ", "py-[12px]",
                "bg-green-60",
                "text-grey-11",
                "fluid-18",
                "custom-rounded",
                className
            )}

            typeof={type}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
