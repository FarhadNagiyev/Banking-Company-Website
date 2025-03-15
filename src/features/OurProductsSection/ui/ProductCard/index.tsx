import DynamicImage from '@/components/DynamicImage'
import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react'
type ProductCardProps = {
    id: string;
    imageUrl: string;
    heading: string;
    description: string;
}
function ProductCard({ id, imageUrl, heading, description }: ProductCardProps) {
    return (
        <div className={cn(
            "text-center items-center flex flex-col gap-[20px] md:gap-[24px] 2xl:gap-[30px]",
            `${(id === "0") || (id === "1") ? "border-b-[2px] lg:border-b-0 border-grey-15 lg:border-r-[2px] pb-[25px] lg:pb-0 pr-0 lg:pr-[25px]" : ""}`

        )}>
            <div className='size-[98px] custom-flex-center'>{/* temp size */}

                <DynamicImage
                    alt={heading}
                    src={imageUrl}
                    maxWidth={34}
                    middleWidth={28}
                    minWidth={28}
                    maxHeight={34}
                    middleHeight={28}
                    minHeight={28}
                />
            </div>
            <div className='flex flex-col gap-[12px] md:gap-[1rem] 2xl:gap-[20px]'>
                <h3 className='text-[20px] 2xl:text-[24px]'>
                    {heading}
                </h3>
                <p className='fluid-18 font-light text-grey-70'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
