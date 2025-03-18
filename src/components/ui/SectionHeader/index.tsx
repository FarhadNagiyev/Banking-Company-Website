import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react';

type SectionHeadingProps = {
    heading: string;
    description: string;
    descriptionStyle?: string;
    className?: string;
    variant?: 'lastGreen' | 'firstGreen' | 'allGreen';
};

function SectionHeader({
    heading,
    description,
    descriptionStyle,
    className,
    variant = 'lastGreen'
}: SectionHeadingProps) {

    const words = heading.split(' ');

    return (
        <div className={
            cn(
                "flex",
                "flex-col",
                "lg:justify-start justify-center items-center lg:items-start",
                "2xl:gap-[14px]",
                "gap-[10px]",
                className
            )}>
            <h3 className='
            lg:text-left flex-wrap lg:justify-start justify-center text-center flex
            font-medium fluid-48 2xl:gap-[1rem] md:gap-[0.75rem] gap-[0.5rem] '>
                {words.map((word, index) => {
                    const isFirstWord = index === 0;
                    const isLastWord = index === words.length - 1;

                    const wordClassName = cn({
                        'text-green-60':
                            (variant === 'lastGreen' && isLastWord) ||
                            (variant === 'firstGreen' && isFirstWord) ||
                            (variant === 'allGreen')
                    });

                    return <div key={index} className={wordClassName}>{word}</div>;
                })}
            </h3>
            <p className={cn('text-grey-70 fluid-18 max-w-4/5 lg:text-left justify-center items-center text-center', descriptionStyle)}>
                {description}
            </p>
        </div>
    );
}

export default SectionHeader;