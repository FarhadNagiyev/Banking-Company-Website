import React from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { header } from './data/contents'
import FAQCards from './components/FAQCards'


function FAQSection() {
    return (
        <section className='flex flex-col custom-section-gap'>
            <SectionHeader heading={header.SectionHeading} description={header.SectionDescription} />
            <FAQCards />
        </section>
    )
}

export default FAQSection
