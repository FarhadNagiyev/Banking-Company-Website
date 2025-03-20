import DynamicImage from "@/components/DynamicImage";

type OverviewSectionProps = {
    heading: string,
    description: string,
    imgAlt: string,
    imgURL: string;
}
function OverviewSection({ content }: { content: OverviewSectionProps }) {
    return (
        <section className="flex items-center xl:items-start flex-col-reverse xl:flex-row bg-grey-11 rounded-[20px] p-[clamp(14px,2vh,40px)]   space-y-reverse space-y-[-41px] space-x-0 xl:space-y-0  xl:space-x-[clamp(-500px,50vw,-174px)]">
            <div className="z-10  text-center xl:text-left flex flex-col h-max space-y-[clamp(14px,2vh,20px)] p-[clamp(24px,7vw,60px)] bg-grey-10 xl:rounded-l-[20px] xl:rounded-br-[80px] rounded-[20px]">
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-medium">{content.heading}</h2>
                <p className="text-[clamp(14px,1vw,16px)] font-light text-grey-70 flex flex-wrap">{content.description}</p>
            </div>
            <DynamicImage
                alt={content.imgAlt}
                src={content.imgURL}

                maxWidth={715} maxHeight={568}
                middleWidth={629} middleHeight={453}
                minWidth={329} minHeight={253}
            />

        </section>


    )
}

export default OverviewSection
