import DynamicImage from "@/components/DynamicImage"
import { Location } from "@/features/JobOpeningsSection/components/JobCard"


type ReleaseCardContent = {
    imgURL: string,
    title: string,
    location: string,
    date: string,
    description: string,
}


type ReleaseCardProps = {
    content: ReleaseCardContent
}

function ReleaseCard({ content }: ReleaseCardProps) {
    return (
        <div className="flex flex-col text-left items-center h-full p-[clamp(20px,3vw,30px)] gap-[clamp(30px,3vh,50px)] rounded-t-[40px] rounded-b-[16px] bg-grey-11 custom-border ">
            <DynamicImage
                alt={content.title}
                src={content.imgURL}
                maxWidth={723} maxHeight={333}
                middleWidth={582} middleHeight={277}
                minWidth={318} minHeight={206} />
            <div className="space-y-[clamp(24px,2vh,30px)] h-full flex flex-col">
                <div className="space-y-[clamp(10px,1vh,20px)]">
                    <h4 className="text-[clamp(18px,1.5vw,24px)]">
                        {content.title}
                    </h4>
                    <div className='flex flex-wrap flex-row gap-[clamp(6px,1vw,10px)] font-light text-grey-70'>
                        <Location place={content.location} />
                        <Date date={content.date} />
                    </div>
                </div>
                <Description text={content.description} />
            </div>
        </div>
    )
}

export default ReleaseCard

const Date = ({ date }: { date: string }) => {
    return (
        <div className='flex gap-1 flex-wrap min-w-min max-w-max px-[clamp(10px,1vw,16px)] py-[clamp(6px,1vh,8px)] rounded-[68px] bg-grey-10 custom-border'>
            <div>
                Date:
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}

const Description = ({ text }: { text: string }) => {
    return (
        <p className="fluid-18 text-grey-70 flex-grow">
            {text}
        </p>
    )
}