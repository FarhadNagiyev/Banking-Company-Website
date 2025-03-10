
import Image from 'next/image'
import React from 'react'
import siderbarImg from "@/assets/icons/sidebar.svg"
import { cn } from '@/utils/MergeTailwindclasses'
type MobileMenuButtonProps = {
    className?: string;
}
function MobileMenuButton({ className }: MobileMenuButtonProps) {
    return (
        <button className={cn(
            "custom-rounded",
            "flex items-center justify-center",
            "bg-[var(--green-60)]",
            "px-[14px]",
            "py-[6px]",
            className
        )}>
            <Image src={siderbarImg} alt='sidebar image' width={28} height={28} />
        </button>
    )
}

export default MobileMenuButton
