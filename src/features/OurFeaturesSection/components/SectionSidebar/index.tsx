"use client"
import { cn } from '@/utils/MergeTailwindclasses'
import Mapper from '@/components/Mapper'
import { sidebar } from '../../data/contents'
import { useDispatch, useSelector } from 'react-redux'
import { changeRenderedFutures } from '@/store/slices/renderedFuturesSlice'
import { RootState } from "@/store/store";


type SectionSidebarProps = {
    className?: string;
}
function SectionSidebar({ className }: SectionSidebarProps) {


    const activeTabId = useSelector((state: RootState) => state.renderedFutures.renderedFutures);
    const dispatch = useDispatch();

    const handleClick = (id: string) => {
        dispatch(changeRenderedFutures(id))
    }

    return (
        <aside

            className={cn(

                "max-h-max",
                "p-[clamp(20px,2vw,50px)]",
                "bg-grey-11",
                "rounded-xl",
                "lg:overflow-x-visible overflow-x-auto lg:whitespace-normal whitespace-nowrap",
                className
            )}>
            <Mapper
                ulStyle='flex lg:flex-col  lg:justify-start justify-center gap-[clamp(20px,3vw,24px)] min-w-max'
                array={sidebar}>
                {(item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "min-w-full",
                            "px-[clamp(20px,2vh,24px)]",
                            "py-[clamp(14px,2vh,18px)]",
                            "custom-border",
                            "bg-grey-11",
                            "rounded-[100px]",
                            "lg:text-start",
                            activeTabId === item.id ? "text-green-60 bg-grey-10" : "text-white"
                        )}
                        onClick={() => handleClick(item.id)}
                    >
                        {item.title}
                    </button>
                )}
            </Mapper>
        </aside>
    )
}

export default SectionSidebar