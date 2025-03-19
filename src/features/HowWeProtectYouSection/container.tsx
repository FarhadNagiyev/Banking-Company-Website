import SectionHeader from '@/components/ui/SectionHeader'
import React from 'react'
import { headerContent } from './data/contents'
import SecurityCards from './components/SecurityCards'

function HowWeProtectYouSection() {
  return (
    <section className='flex flex-col custom-section-gap'>
      <SectionHeader heading={headerContent.Heading} description={headerContent.Description} />
      <SecurityCards />
    </section>
  )
}
export default HowWeProtectYouSection
