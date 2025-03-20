import DynamicImage from "@/components/DynamicImage";

type OverviewSectionProps = {
    heading: string,
    description: string,
    imgAlt: string,
    imgURL: string;
}
function OverviewSection({ content }: { content: OverviewSectionProps }) {
    return (
        <section className="relative flex max-h-max bg-grey-11 rounded-[20px] p-[clamp(14px,5vw,50px)]">
            {/* Metin Kutusu */}
            <div className="relative w-[60%] z-10 flex flex-col space-y-[clamp(14px,2vh,23px)] p-[clamp(24px,7vw,80px)] bg-grey-10 rounded-l-[20px] rounded-br-[80px]">
                <h2 className="text-[clamp(28px,7vw,58px)] font-medium">{content.heading}</h2>
                <p className="fluid-18 font-light text-grey-70">
                    {content.description}
                </p>
            </div>

            {/* Resim Kutusu */}
            <div className="absolute right-[clamp(14px,5vw,50px)] min-h-max min-w-max top-[clamp(14px,5vw,50px)] z-0 flex justify-end items-center">
                <DynamicImage
                    alt="Careers Page section"
                    src="careersOverview.svg"
                    maxWidth={774} maxHeight={573}
                    middleWidth={572} middleHeight={454}
                    minWidth={263} minHeight={202}
                />
            </div>
        </section>


    )
}

export default OverviewSection
