"use client"
import Image from 'next/image';
import useWindowWidth from '@/utils/hooks/useWindowWidth';

type DynamicImageProps = {
    alt: string;
    src: string;

    maxWidth: number;
    minWidth: number;
    middleWidth: number;

    maxHeight: number;
    minHeight: number;
    middleHeight: number;

}
function DynamicImage({ alt, src, maxWidth, minWidth, middleWidth, maxHeight, minHeight, middleHeight }: DynamicImageProps) {
    const windowWidth: number = useWindowWidth()
    let width: number;
    let height: number;
    if (windowWidth <= 390) {
        width = minWidth
        height = minHeight
    } else if (windowWidth > 390 && windowWidth <= 1440) {
        width = middleWidth
        height = middleHeight
    } else {
        width = maxWidth
        height = maxHeight
    }
    return (

        <Image
            alt={alt}
            src={src}
            height={height}
            width={width}
            priority />

    )
}

export default DynamicImage
