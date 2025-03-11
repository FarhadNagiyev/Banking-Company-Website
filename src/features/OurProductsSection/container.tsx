import SectionHeader from '@/components/ui/SectionHeader'
import SectionTabs from '@/components/ui/SectionTabs'
import ProductCard from './ui/ProductCard'

import { content } from './content'
function OurProductsSection() {
    return (
        <section className='flex flex-col gap-[100px]'>
            <div className='flex lg:flex-row flex-col  text-center md:text-left lg:items-stretch justify-between h-[some-height] gap-[20px] lg:gap-[150px] 2xl:gap-[300px]'>
                <div className=" md:self-start">
                    <SectionHeader heading={content.SectionHeading} description={content.SectionDescription} />
                </div>
                <div className='flex lg:flex-col lg:justify-end justify-center'>
                    <SectionTabs tabs={content.tabs} />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-[25px]'>
                {

                    content.cards && content.cards.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))
                }
            </div>

        </section>
    )
}

export default OurProductsSection
