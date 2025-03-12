
import SocialAccounts from "../SocialAccounts";


function Footbar() {
    return (
        <div className='
        flex md:flex-row flex-col items-center justify-between 
        py-[30px]  md:py-[12px] 2xl:py-[1rem]
        md:px-[16px] 
        custom-border 
        md:rounded-[100px] rounded-[12px]
        bg-grey-10'>
            <SocialAccounts />
            <p className='relative top-[-20px] md:top-0 font-light text-grey-70'>YourBank All Rights Reserved</p>
            <div className='flex text-center justify-center gap-[12px] font-light text-grey-70 fluid-18'>
                Privacy Policy
                <div className=' min-h-min w-[1px] bg-grey-70'></div>
                Terms of Service
            </div>
        </div>
    )
}

export default Footbar
