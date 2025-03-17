
type ValueCardProps = {
    title: string;
    description: string;
}
function ValueCard({ title, description }: ValueCardProps) {
    return (
        <div className="border-l border-green-60 pl-[clamp(20px,3vw,30px)] space-y-[clamp(14px,2vh,30px)] flex flex-col justify-between py-0">
            <h3 className='font-medium  text-[clamp(30px,3vw,58px)] text-grey-30 leading-min'>
                {title}
            </h3>
            <p className="fluid-18 text-grey-70">
                {description}
            </p>
        </div>
    )
}

export default ValueCard
