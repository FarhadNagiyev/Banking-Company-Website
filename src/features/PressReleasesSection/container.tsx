import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import { headerContent } from './data/contents'
import ReleaseCards from './components/ReleaseCards'

function PressReleasesSection() {
    return (
        <section className='flex flex-col custom-section-gap'>
            <SectionHeader heading={headerContent.Heading} description={headerContent.Description} />
            <ReleaseCards />
        </section>
    )
}

export default PressReleasesSection
