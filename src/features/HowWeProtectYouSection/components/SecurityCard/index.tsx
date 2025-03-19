import Image from "next/image"

type SecurityCardProps = {
    title: string
    description: string
    iconURL: string
}
function SecurityCard({ content }: { content: SecurityCardProps }) {
    return (
        <div className="flex flex-col h-full p-fluid-50 gap-[clamp(18px,2vh,24px)]  bg-grey-11 rounded-[20px] custom-border">

            <div className="flex items-center gap-[clamp(14px,2vw,20px)]">
                <div className="relative flex items-center justify-center rounded-full">
                    <Image
                        src={content.iconURL}
                        alt={`${content.title} icon`}
                        width={34}
                        height={34}
                        className="object-contain w-[clamp(24px,3vh,34px)] h-[clamp(24px,3vh,34px)]"
                        priority
                    />
                </div>

                <div className="flex items-center">
                    <h4 className="fluid-24">
                        {content.title}
                    </h4>
                </div>
            </div>

            <p className="font-light fluid-18 text-grey-70">
                {content.description}
            </p>
        </div>
    )
}

export default SecurityCard
