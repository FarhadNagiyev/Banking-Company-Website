import Mapper from '@/components/Mapper'
import ValueCard from './components/ValueCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { cardsContents, headerContent } from './data/contents'

function OurValuesSection() {
    return (
        <section className='space-y-[clamp(50px,3vw,80px)]'>
            <SectionHeader heading={headerContent.SectionHeading} description={headerContent.SectionDescription} />
            <Mapper
                ulStyle='grid grid-cols-1 gap-[clamp(50px,3vw,80px)] lg:grid-cols-2'
                array={cardsContents}>
                {(item) =>
                    <ValueCard title={item.title} description={item.description} />
                }
            </Mapper>
        </section>
    )
}

export default OurValuesSection
