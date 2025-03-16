"use client"
import SectionHeader from '@/components/ui/SectionHeader'
import { header } from './data/contents'
import SectionSidebar from './components/SectionSidebar'

import FeatureCards from './components/FeatureCards'



function OurFuturesSection() {

    return (
        <section className='flex   flex-col custom-section-gap'>
            <SectionHeader
                heading={header.SectionHeading}
                description={header.SectionDescription} />

            <div className='flex lg:flex-row flex-col gap-[clamp(20px,3vw,30px)] '>
                <SectionSidebar />
                <FeatureCards />

            </div>

        </section>
    )
}

export default OurFuturesSection
