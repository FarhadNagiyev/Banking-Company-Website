import SectionHeader from '@/components/ui/SectionHeader'
import Features from './ui/Features'
import Statistics from './ui/Statistics'
import { businessFeatures, businessStatistics, header, individualsStatistics, invidualsFeatures } from './data/contents'


function UseCasesSection() {
    return (
        <section className='flex flex-col custom-section-gap'>
            <SectionHeader heading={header.SectionHeading} description={header.SectionDescription} />

            <div className='flex flex-col items-center justify-center h-full gap-[clamp(40px,10vh,60px)]'>

                <div className="grid lg:grid-cols-2 gap-[clamp(30px,5vh,100px)] h-full">
                    <Features array={invidualsFeatures} />
                    <Statistics content={individualsStatistics} />

                </div>
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-[clamp(30px,5vh,100px)] h-full ">
                    <Statistics content={businessStatistics} />
                    <Features array={businessFeatures} />

                </div>
            </div>
        </section>
    )
}

export default UseCasesSection
