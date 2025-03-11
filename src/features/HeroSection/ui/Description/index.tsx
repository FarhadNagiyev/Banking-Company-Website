import { cn } from '@/utils/MergeTailwindclasses'
type HomePageDescriptionProps = {
    className?: string;
}
const content = {
    desc: "At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers&apos; needs."
}
function HomePageDescription({ className }: HomePageDescriptionProps) {
    return (
        <p className={cn('description-fluid-18 font-light text-white-90', className)}>
            {content.desc}
        </p>
    )
}

export default HomePageDescription
