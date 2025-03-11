import { cn } from '@/utils/MergeTailwindclasses'
import React from 'react'

type SectionTabProps = {
    children: React.ReactNode,
    onClick: () => void,
    className?: string
}

function SectionTab({ children, onClick, className = '' }: SectionTabProps) {
    return (
        <button
            className={cn(
                'relative',
                'rounded-[140px]',
                '2xl:px-[24px]', "px-[18px]",
                '2xl:py-[14px]', "py-[10px]",
                '2xl:text-[1.125rem]', "text-[14px]",
                'text-white',
                'transition',
                'focus-visible:outline-2',

                className
            )}
            style={{
                WebkitTapHighlightColor: "transparent",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default SectionTab