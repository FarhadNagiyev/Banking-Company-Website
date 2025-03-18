import React from 'react'
import BenefitCard from '../BenefitCard'
import { firstLineContent, secondLineContent } from '../../data/contents'
import "@/styles/customDashedBorder.css"
import { LineContent } from '../../types/types'



type LineProps = {
    lineContent: LineContent;
}

function BenefitCards() {
    return (
        <div className='flex w-full flex-col gap-[clamp(24px,4.5vw,50px)]'>
            <Line lineContent={firstLineContent} />
            <hr className='custom-border-dashed-t' />
            <Line lineContent={secondLineContent} />
        </div>
    )
}
export default BenefitCards




function Line({ lineContent }: LineProps) {
    return (
        <div className='flex md:flex-row flex-col gap-[clamp(24px,4.5vw,50px)]'>
            <BenefitCard content={lineContent.left} />
            <div className='min-h-full md:w-[1px] custom-border-dashed-t custom-border-dashed-r'></div>
            <BenefitCard content={lineContent.right} />
        </div>
    )
}