
import Image from "next/image";

type OverviewSectionProps = {
    heading: string,
    description: string,
    imgAlt: string,
    imgURL: string;
}
function OverviewSection({ content }: { content: OverviewSectionProps }) {
    return (
        <section className="z-0 relative w-full flex custom-section-gap bg-grey-11 rounded-[20px] p-[clamp(14px,5vw,50px)]">

            <div className="flex flex-col w-1/2 absolute z-[10] space-y-[clamp(14px,2vh,23px)] p-[clamp(24px,7vw,80px)] bg-grey-10 rounded-l-[20px] rounded-br-[80px]">
                <h2 className="text-[clamp(28px,7vw,58px)] font-medium">{content.heading}</h2>
                <p className="fluid-18 font-light text-grey-70">
                    {content.description}
                </p>
            </div>


            <div className="z-0 flex items-end justify-end w-full">
                <div className="z-0 w-[clamp(329px,60vw,968px)] h-[clamp(253px,50vh,716px)] items-end justify-end">
                    <Image
                        className="max-w-min z-0"
                        alt={content.imgAlt}
                        src={content.imgURL}
                        fill

                    />
                </div>

            </div>
        </section >


    )
}

export default OverviewSection
