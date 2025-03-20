import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import { headerContent, MissionCardContent, VisionCardContent } from './data/contents'
import MAVCard from './components/MAVCard'


function MissionAndVision() {
    return (
        <section className='flex flex-col custom-section-gap'>
            <SectionHeader heading={headerContent.Heading} description={headerContent.Description} variant='allGreen' />
            <div>
                <div className='flex flex-col lg:relative gap-[50px] lg:gap-0 space-y-[clamp(-25px,5vh,-100px)]  xl:space-y-[clamp(-45px,5vh,-100px)] 3xl:space-y-[clamp(-82px,5vh,-100px)]'>
                    <MAVCard variant="left" content={MissionCardContent} />
                    <MAVCard variant="right" content={VisionCardContent} />
                </div>
            </div>
        </section>
    )
}

export default MissionAndVision
