import Mapper from '@/components/Mapper'
import { FooterContentItem } from '../../types/types'
import Icon from '@/components/Icon'
import Link from 'next/link'

function ContactInfo({ content }: { content: FooterContentItem[] }) {
    return (
        <Mapper
            array={content}
            ulStyle='flex flex-wrap gap-[1rem] justify-center'
        >
            {(item: FooterContentItem) => (
                <Link href={item.linkhref} className='flex gap-[6px]'>
                    <Icon src={item.imgurl} alt={item.text} variant="mini" />
                    {item.text}
                </Link>
            )}
        </Mapper>

    )
}

export default ContactInfo
