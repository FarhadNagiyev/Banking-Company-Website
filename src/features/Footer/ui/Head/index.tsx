import NavigationLinks from "@/components/NavigationLinks";
import Logo from "@/components/ui/Logo";


function FooterHead() {
    return (
        <div className='custom-flex-center '>
            <div className='flex flex-col  items-center justify-center 2xl:gap-[50px] md:gap-[40px] gap-[24px]'>
                <Logo />
                <NavigationLinks
                    wrapperStyle='flex gap-[14px] 2xl:gap-[26px]'
                    linkStyle='fluid-18'
                    activeClass='border-b border-green-60'
                />
            </div>
        </div>

    )
}

export default FooterHead
