import SectionHeader from '@/components/ui/SectionHeader'
import SectionTabs from '@/components/ui/SectionTabs'
const content = {
    SectionHeading: "Our Features",
    SectionDescription: "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience",
    tabs: [
        { id: "1", label: "For Individuals" },
        { id: "2", label: "For Businesses" }]
}
function OurProductsSection() {
    return (
        <section>
            <div className='lg:flex  text-center md:text-left lg:items-stretch justify-between h-[some-height] 2xl:gap-[150px]'>
                <div className=" md:self-start">
                    <SectionHeader heading={content.SectionHeading} description={content.SectionDescription} />
                </div>
                <div className='flex lg:flex-col lg:justify-end justify-center'>
                    <SectionTabs tabs={content.tabs} />
                </div>
            </div>

        </section>
    )
}

export default OurProductsSection
