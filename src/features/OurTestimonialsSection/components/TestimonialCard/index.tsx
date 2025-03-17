import DynamicImage from '@/components/DynamicImage'
import Divider from '@/components/ui/Divider'

type TestimonialCardProps = {
    comment: string;
    author: string;
}
function TestimonialCard({ comment, author }: TestimonialCardProps) {
    return (
        <div className='flex flex-col   text-center justify-between min-h-full min-w-1/3 space-y-[clamp(30px,7vh,50px)] '>
            <Divider variant='between'>
                <DynamicImage
                    maxWidth={60}
                    minWidth={44}
                    middleWidth={44}
                    maxHeight={60}
                    minHeight={44}
                    middleHeight={44}
                    alt='reference green' src='/reference.svg' />
            </Divider>
            <p className='fluid-18'>
                {comment}
            </p>
            <h4 className='text-green-60 fluid-18 font-medium'>
                {author}
            </h4>

        </div>
    )
}

export default TestimonialCard
