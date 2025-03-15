"use client"
import SectionHeader from '@/components/ui/SectionHeader'
import { header, OnlineBanking } from './data/contents'
import SectionSidebar from './components/SectionSidebar'
import FeatureCard from './components/FeatureCard'
import Mapper from '@/components/Mapper'



function OurFuturesSection() {
    // const [renderedFeatures, setRenderedFeatures] = useState(OnlineBanking)
    const renderedFeatures = OnlineBanking;
    return (
        <section className='flex   flex-col gap-[clamp(50px,10vh,80px)]'>

            <SectionHeader heading={header.SectionHeading} description={header.SectionDescription} />

            <div className='flex lg:flex-row flex-col gap-[clamp(20px,3vw,30px)] '>
                <SectionSidebar />

                <Mapper array={renderedFeatures} ulStyle='grid lg:grid-cols-2 gap-[clamp(20px,4vw,30px)]'>
                    {(item) => (
                        <FeatureCard title={item.title} description={item.description} link={item.link} />
                    )}
                </Mapper>
            </div>

        </section>
    )
}

export default OurFuturesSection
