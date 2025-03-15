import Icon from '@/components/Icon'
import Link from 'next/link'
import React from 'react'
type FeatureCardProps = {
    title: string,
    description: string,
    link: string
}
function FeatureCard({ title, description, link }: FeatureCardProps) {
    return (
        <div className='min-h-full flex flex-col bg-grey-11 custom-border p-[clamp(30px,5vw,50px)] rounded-[0.75rem] gap-[clamp(20px,5vh,30px)]'>
            <div className='flex justify-between items-center'>
                <h3 className='fluid-22'>
                    {title}
                </h3>
                <Link href={link}>
                    <Icon alt="arrow top-left" src='/arrow.svg' variant='large' />
                </Link>
            </div>
            <p className='fluid-18 text-grey-70 font-light'>
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
