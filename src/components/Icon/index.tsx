import DynamicImage from '../DynamicImage'

type IconProps = {
    alt: string;
    src: string;
    variant: "mini" | "large";
}
function Icon({ src, alt, variant }: IconProps) {
    let max: number = 0;
    let min: number = 0;
    let middle: number = 0;
    if (variant === "mini") {
        max = 24
        middle = 20
        min = 20

    } else if (variant == "large") {
        max = 36
        middle = 24
        min = 24

    } else {
        max = 20;
        middle = 20;
        min = 20;
    }
    return (
        <DynamicImage
            alt={alt}
            src={src}
            maxWidth={max}
            middleWidth={middle}
            minWidth={min}
            maxHeight={max}
            middleHeight={middle}
            minHeight={min}
            priority={true}
        />
    )
}

export default Icon
