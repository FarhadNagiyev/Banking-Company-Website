import React from 'react';

type SectionHeadingProps = {
    heading: string;
    description: string;
};

function SectionHeader({ heading, description }: SectionHeadingProps) {
    function splitTwoWords(input: string): [string, string | null] {
        const words = input.trim().split(/\s+/);
        return [words[0], words[1] ?? null];
    }

    const [firstWord, secondWord] = splitTwoWords(heading);

    return (
        <div className='flex flex-col 2xl:gap-[14px] gap-[10px]'>

            <h3 className='
            md:text-left text-center
            font-medium section-heading-fluid 2xl:gap-[1rem] md:gap-[0.75rem] gap-[0.5rem]'>
                <span>{firstWord}</span>
                {secondWord && (
                    <span className='text-green-60'>{secondWord}</span>
                )}
            </h3>
            <p className='text-grey-70 description-fluid-18'>
                {description}
            </p>
        </div>
    );
}

export default SectionHeader;
