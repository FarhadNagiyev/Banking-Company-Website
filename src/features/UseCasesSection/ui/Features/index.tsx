import Mapper from '@/components/Mapper'
import React from 'react'
import Icon from '@/components/Icon'

// Define the type for items in the array
type FeatureItem = {
    icon: string;
    title: string;
}

// Define the props for the Features component
type FeaturesProps = {
    array: FeatureItem[];
}

function Features({ array }: FeaturesProps) {
    return (
        <div className='h-full'>
            <Mapper array={array}
                ulStyle='
                grid grid-cols-2 2xl:gap-[20px] gap-[10px]
                px-[clamp(14px,5vw,50px)] py-[clamp(20px,5vh,50px)]
                bg-grey-11 rounded-[20px]
                min-h-full'
            >
                {(item: FeatureItem) => (
                    <div className='flex min-h-full min-w-full flex-col justify-center items-center text-center 2xl:gap-6 gap-3.5  bg-grey-10 custom-border 
                    py-[clamp(20px,3vh,30px)] px-[clamp(14px,2vw,30px)] 2xl:rounded-[1rem] rounded-[0.75rem]'>
                        <div className='custom-flex-center size-[clamp(72px,7vw,78px)]'>{/* temp size */}
                            <Icon src={item.icon} alt={item.title} variant='medium' />
                        </div>
                        <h3 className='min-w-min fluid-20' >
                            {item.title}
                        </h3>
                    </div>
                )}
            </Mapper>
        </div>
    )
}

export default Features