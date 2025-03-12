import CTAButton from '@/components/CTAButton'
import HomePageIllustration from '@/components/ui/HomePageIllustration'
import Heading from './ui/Heading'
import Description from './ui/Description'
import MiniInfo from './ui/MiniInfo'



function HeroSection() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-start flex-col md:items-start items-center text-center md:text-left 2xl:gap-[50px] md:gap-[40px] gap-[30px]'>
                <div className='flex flex-col 2x:gap-[20px] md:gap-[1rem] gap-[0.75rem]'>
                    <MiniInfo />
                    <div>
                        <Heading />
                        <Description />
                    </div>
                </div>
                <CTAButton />
            </div>
            <HomePageIllustration />

        </section>
    )
}

export default HeroSection
