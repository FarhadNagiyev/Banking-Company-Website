import CountUp from "@/components/Animations/CountUp";
import Mapper from "@/components/Mapper"
import { cn } from "@/utils/MergeTailwindclasses";

import "@/styles/customDashedBorder.css"
import Link from "next/link";



interface PercentItem {
    percent: number;
    title: string;
}


interface StatisticsContent {
    heading: string;
    description: string;
    percents: PercentItem[];
}

function Statistics({ content }: { content: StatisticsContent }) {
    return (
        <div className="flex flex-col justify-center  gap-[clamp(50px,1vh,62px)] text-center items-center lg:text-left">
            <div className="flex flex-col gap-[clamp(10px,1vh,14px)]">
                <h3 className="fluid-30 font-medium">
                    {content.heading}
                </h3>
                <p className="fluid-18 text-grey-70 font-light">
                    {content.description}
                </p>
            </div>
            <Mapper<PercentItem> array={content.percents} ulStyle="grid lg:grid-cols-3 grid-cols-1">
                {(item, index) => (
                    <div className={
                        cn(
                            index < content.percents.length - 1 && index != 0 ? "custom-border-dashed-l-b  xl:px-[50px] py-[30px] lg:py-0" : "",
                            index == 0 ? "custom-border-dashed-l-b xl:pr-[50px]  pb-[30px] lg:pb-0" : "",
                            index == content.percents.length - 1 ? "xl:pl-[50px] pt-[30px] lg:pt-0" : "",
                            "gap-[clamp(2px,1vh,5px)]"
                        )
                    }>
                        <div className="flex items-center justify-center text-green-60 font-medium fluid-58">
                            <CountUp value={item.percent} className="max-w-max" />%
                        </div>
                        <p className="text-grey-70 fluid-18 font-light">{item.title}</p>
                    </div>
                )}
            </Mapper>

            <Link href="/" className="min-w-max max-w-max fluid-18 px-[clamp(20px,2vw,24px)] py-[clamp(14px,2vh,18px)]  custom-rounded bg-grey-11 custom-border" >
                Learn More
            </Link>
        </div>
    )
}

export default Statistics