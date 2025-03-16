
import CTAButton from '@/components/CTAButton'

// import Image from 'next/image'
import React from 'react'
function CTASection() {
    return (

        <section className='bg-grey-11 custom-border rounded-[20px] flex flex-col text-center lg:text-left lg:flex-row justify-between items-center p-[30px] md:p-[60px] 2xl:p-[80px]
        lg:gap-[150px]
        gap-[24px]
       '>
            {/* <Image src="cta.svg" alt="bhnjmk" height={298} width={283} className='relative top-[-80px] left-[-80px]' /> */}
            <div className='space-y-[14px] md:space-x-0'>
                <h3 className="space-x-3 fluid-40">
                    Start your financial journey with
                    <span className="text-green-60 inline"> YourBank today!</span>
                </h3>
                <p className='fluid-18 text-grey-70'>
                    Ready to take control of your finances? Join YourBank now,
                    and let us help you achieve your financial
                    goals with our tailored solutions and exceptional customer service
                </p>
            </div>
            <CTAButton />

        </section>

    )
}

export default CTASection
