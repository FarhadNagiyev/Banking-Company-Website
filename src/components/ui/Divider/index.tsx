
type DividerProps = {
    children?: React.ReactNode;
    variant?: "line" | "between";
}
function Divider({ children, variant = "line" }: DividerProps) {


    return (
        <div>
            {variant === "line" ? (
                <hr className='border-grey-15 border-[1px]' />

            ) : (
                <div className="flex justify-center items-center gap-[20px]">
                    <div className="h-[1px] w-full bg-grey-70"></div>
                    <div className="min-w-max fluid-18 text-grey-70">
                        {children}
                    </div>
                    <div className="h-[1px] w-full bg-grey-70"></div>
                </div>
            )}
        </div>
    )
}

export default Divider
