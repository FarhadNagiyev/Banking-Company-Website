import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react';

type SectionHeadingProps = {
    heading: string;
    description: string;
    className?: string;
};

function SectionHeader({ heading, description, className }: SectionHeadingProps) {
    function splitTwoWords(input: string): [string, string | null] {
        // Find the first space in the string
        const spaceIndex = input.indexOf(' ');

        // If there's no space, return the whole string as first word and null as second
        if (spaceIndex === -1) {
            return [input, null];
        }

        // Split the string at the first space
        const firstWord = input.substring(0, spaceIndex);
        const secondWord = input.substring(spaceIndex + 1);

        return [firstWord, secondWord];
    }

    const [firstWord, secondWord] = splitTwoWords(heading);

    return (
        <div className={
            cn(
                "flex ",
                "flex-col",
                "2xl:gap-[14px]",
                "gap-[10px]",
                className
            )}>
            <h3 className='
            md:text-left text-center flex
            font-medium section-heading-fluid 2xl:gap-[1rem] md:gap-[0.75rem] gap-[0.5rem] '>
                <div>{firstWord}</div>
                {secondWord && (
                    <div className='text-green-60'>{secondWord}</div>
                )}
            </h3>
            <p className='text-grey-70 fluid-18'>
                {description}
            </p>
        </div>
    );
}

export default SectionHeader;