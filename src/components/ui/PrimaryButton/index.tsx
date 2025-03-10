"use client"
import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react'


type PrimaryButton = {
    className?: string;
    onClick?: React.MouseEvent<HTMLButtonElement>;
    children: React.ReactNode;
}
function PrimaryButton({ className, onClick, children }: PrimaryButton) {
    return (
        <button
            onClick={() => onClick}
            className={cn(
                "2xl:px-[30px]", "px-[24px]",
                "2xl:py-[14px] ", "py-[12px]",
                "bg-[var(--green-60)]",
                "text-[var(--grey-11)]",
                "2xl:text-[18px]",
                "text-[14px]",
                "custom-rounded",
                className
            )}>
            {children}
        </button>
    )
}

export default PrimaryButton
