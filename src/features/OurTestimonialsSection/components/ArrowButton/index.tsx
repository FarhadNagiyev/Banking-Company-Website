import Icon from '@/components/Icon'
import { cn } from '@/utils/MergeTailwindclasses'

type ArrowButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant: "left" | "right";
    disabled?: boolean;
    className?: string;
};

function ArrowButton({ onClick, variant, disabled, className }: ArrowButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            aria-label={variant === "left" ? "Previous testimonials" : "Next testimonials"}
            className={
                cn(
                    "p-[clamp(12px,1vw,14px)]",
                    "custom-border",
                    "bg-grey-11",
                    "rounded-full",
                    variant === "left" ? "scale-x-[-1] rotate-[-45deg]" : "rotate-[45deg]",
                    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-grey-15 transition-colors",
                    className
                )}>
            <Icon alt="arrow" src="/arrow.svg" variant='mini' />
        </button>
    )
}

export default ArrowButton