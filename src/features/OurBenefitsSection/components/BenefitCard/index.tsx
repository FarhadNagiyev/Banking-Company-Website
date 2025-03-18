import Icon from '@/components/Icon';
import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react'
type BenefitCardProps = {
    content: {
        icon: string;
        title: string;
        description: string;
        variant: 'left' | 'right';
    };

}
function BenefitCard({ content }: BenefitCardProps) {
    return (
        <div className={
            cn(
                "flex",
                "flex-col",
                "gap-[clamp(20px,1vh,30px)]",
                "bg-grey-11 p-[clamp(24px,3vw,50px)]",
                content.variant === "left" ? " md:rounded-tl-[50px] md:rounded-tr-[20px] md:rounded-br-[50px] md:rounded-bl-[20px] || rounded-t-[40px] rounded-b-[14px]" : "",
                content.variant === "right" ? " md:rounded-tr-[50px] md:rounded-tl-[20px] md:rounded-bl-[50px] md:rounded-br-[20px] || rounded-t-[40px] rounded-b-[14px]" : "",
            )
        }>
            <div className='flex  items-center justify-start gap-[clamp(10px,1vw,20px)]'>
                <div className='flex items-center justify-center size-[clamp(72px,5vw,100px)] bg-grey-10 rounded-full'> {/* temp size */}
                    <Icon alt='title' src={content.icon} variant='large' />
                </div>
                <h3 className='fluid-20'>
                    {content.title}
                </h3>
            </div>
            <p className='fluid-18 text-grey-70'>
                {content.description}
            </p>
        </div>
    )
}

export default BenefitCard
