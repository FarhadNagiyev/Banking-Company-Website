import CheckIcon from '@/components/ui/CheckIcon'
import { cn } from '@/utils/MergeTailwindclasses'
import React from 'react'
type MiniInfoProps = {
    className?: string;
}
function MiniInfo({ className }: MiniInfoProps) {
    return (
        <div className='flex items-center justify-center md:justify-normal'>
            <div
                className={cn(
                    'flex',
                    'justify-between',
                    'items-center',
                    'gap-[6px]',
                    'p-[8px]',
                    '2xl:p-[11px]',
                    ' text-[12px]',
                    ' md:text-[14px]',
                    ' 2xl:text-[18px]',
                    ' max-w-max',
                    'bg-grey-15',
                    'font-light',
                    'rounded-[61px]',
                    className
                )}
            >
                <CheckIcon /> No LLC Required, No Credit Check.
            </div >
        </div>
    )
}

export default MiniInfo
