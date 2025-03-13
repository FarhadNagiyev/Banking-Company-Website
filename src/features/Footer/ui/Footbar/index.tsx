import SocialAccounts from "../SocialAccounts";

function Footbar() {
    return (
        <div className='
        custom-border 
        items-center text-center 
        grid md:grid-cols-[1fr_auto_1fr] grid-cols-1
        py-[30px] md:py-[12px] 2xl:py-[1rem] md:px-[16px] 
        md:rounded-[100px] rounded-[12px]
        bg-grey-10
        '>

            <div className="flex justify-center md:justify-start">
                <SocialAccounts />
            </div>

            <p className='font-light text-grey-70'>
                YourBank All Rights Reserved
            </p>


            <div className='flex justify-center md:justify-end gap-[12px] font-light text-grey-70 fluid-18'>
                <span>Privacy Policy</span>
                <div className='min-h-min w-[1px] bg-grey-70'></div>
                <span>Terms of Service</span>
            </div>
        </div>
    )
}

export default Footbar;
