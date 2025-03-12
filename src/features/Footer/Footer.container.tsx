
import Divider from '@/components/ui/Divider'
import ContactInfo from './ui/ContactInfo'



import { content } from "./data/contents"
import FooterHead from './ui/Head'
import Footbar from './ui/Footbar'

function Footer() {
    return (
        <div className='bg-grey-11 custom-border '>
            <footer className='custom-container pb-[30px] 2xl:pb-[50px] pt-[50px] md:pt-[60px] 2xl:pt-[100px] space-y-[50px]'>
                <FooterHead />
                <Divider />
                <ContactInfo content={content.contactInfo} />
                <Divider />
                <Footbar />
            </footer >
        </div>

    )
}

export default Footer
