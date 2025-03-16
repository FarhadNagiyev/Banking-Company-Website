"use client"
import React, { useState } from 'react'
import { FAQCardsContent } from '../../data/contents'
import ContentCard from '@/components/ContentCard'
import Icon from '@/components/Icon'
import { cn } from '@/utils/MergeTailwindclasses'


function FAQCards() {
    const [renderLimit, setRenderLimit] = useState(4)
    return (
        <div className={cn("flex flex-col ",
            renderLimit === Infinity ? "gap-[clamp(10px,10vh,20px)]" : "")}>

            <div className="relative">
                {
                    renderLimit && renderLimit === Infinity ?
                        (null)
                        :
                        (<div className="absolute inset-0 z-[1000] linear-shadow-filter"></div>)

                }
                <ul className="relative z-[1] grid lg:grid-cols-2 gap-[clamp(20px,4vw,30px)]">
                    {FAQCardsContent &&
                        FAQCardsContent.map((item, index) =>
                            item.id < renderLimit ? (
                                <li key={index}>
                                    <ContentCard showDivider={true} {...item} />
                                </li>
                            ) : null
                        )}
                </ul>
            </div>
            <div className={cn(
                "flex",
                "items-center",
                "justify-center",
                "w-full",
                "z-[1000]",
                "fluid-18",
                renderLimit === Infinity ? "" : "relative top-[clamp(-10px,1vh,-20px)])",
            )}
            >
                {
                    renderLimit && renderLimit == Infinity ? (
                        <button
                            onClick={() => setRenderLimit(4)}
                            className="flex gap-[4px] min-w-max max-w-max  px-[clamp(20px,2vw,24px)] py-[clamp(14px,2vh,18px)]  custom-rounded bg-grey-11 custom-border">
                            See Less
                            <Icon alt="toggle arrow bottom" className='scale-y-[-1]' src='/toggleArrow.svg' variant="mini" />
                        </button>
                    ) :
                        (<button
                            onClick={() => setRenderLimit(Infinity)}
                            className="flex gap-[4px] min-w-max max-w-max px-[clamp(20px,2vw,24px)] py-[clamp(14px,2vh,18px)]  custom-rounded bg-grey-11 custom-border">
                            Load All FAQ’s
                            <Icon alt="toggle arrow bottom" src='/toggleArrow.svg' variant="mini" />
                        </button>
                        )
                }
            </div>

        </div >
    )
}

export default FAQCards
