import DynamicImage from '@/components/DynamicImage'
import React from 'react'
import { MAVCardType } from '../../types/types'
import { cn } from '@/utils/MergeTailwindclasses'
type MAVCardProps = {
    variant: "left" | "right",
    content: MAVCardType
}
function MAVCard({ variant, content }: MAVCardProps) {
    const { imgAlt, imgURL, title, description } = content;
    return (
        <div className={cn(
            "flex",
            "flex-col",
            "items-center",
            "justify-between",
            "text-center",
            "lg:text-left",
            variant === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>

            <CardImage alt={imgAlt} src={imgURL} />
            <div className={cn(
                "lg:w-[60%] flex flex-col gap-[clamp(10px,2vh,14px)] pt-[30px] lg:pt-0 border-t lg:border-t-0  border-green-60",
                variant === "right" ? " lg:pr-[clamp(30px,5vw,50px)]   lg:border-r" : "lg:pl-[clamp(30px,5vw,50px)] lg:border-l"
            )}>
                <CardTitle text={title} />
                <CardDescription text={description} />
            </div>
        </div>
    )
}

export default MAVCard


const CardImage = ({ alt, src }: { alt: string, src: string }) => {
    return (
        <div className='lg:w-[40%] flex items-center justify-center  bg-grey-11 custom-border rounded-t-[50px] lg:rounded-b-[20px] pt-[24px] lg:pt-[clamp(20px,5vh,60px)] px-[clamp(20px,5vw,60px)]'>
            <DynamicImage alt={alt} src={src} maxWidth={544} maxHeight={561} middleWidth={425} middleHeight={440} minWidth={318} minHeight={309} />
        </div>
    )
}
const CardTitle = ({ text }: { text: string }) => {
    return (
        <h3 className='text-[clamp(26px,4vw,38px)] font-medium'>
            {text}
        </h3>
    )
}
const CardDescription = ({ text }: { text: string }) => {
    return (
        <p className='fluid-18 font-light text-grey-70'>
            {text}
        </p>
    )
}
