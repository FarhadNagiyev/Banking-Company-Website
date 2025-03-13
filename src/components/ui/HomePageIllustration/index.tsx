
import DynamicImage from '@/components/DynamicImage'

function HomePageIllustration() {
    return (
        <div className='custom-flex-center'>
            <DynamicImage
                alt='abstract design image'
                src="/mockherosectionhomepage.webp"
                maxWidth={515}
                middleWidth={410}
                minWidth={306}

                maxHeight={625}
                minHeight={502}
                middleHeight={368}
            />
        </div>
    )
}

export default HomePageIllustration
