import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import { headerContent, tabsContent } from './data/contents'
import SectionTabs from '@/components/ui/SectionTabs'
import TestimonialCarousel from './components/TestimonialCarousel'

function OurTestimonialsSection() {
    return (
        <section>
            <div className='flex lg:flex-row flex-col  text-center md:text-left lg:items-stretch justify-between h-[some-height] gap-[20px] lg:gap-[150px] 2xl:gap-[300px]'>
                <div className=" md:self-start">
                    <SectionHeader descriptionStyle='max-w-full' heading={headerContent.SectionHeading} description={headerContent.SectionDescription} />
                </div>
                <div className='flex lg:flex-col lg:justify-end justify-center'>
                    <SectionTabs tabs={tabsContent} />
                </div>
            </div>
            <div>
                <TestimonialCarousel />
            </div>

        </section >
    )
}

export default OurTestimonialsSection
