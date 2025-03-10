"use client"
import Image from 'next/image'
import React from 'react'
import LogoImg from "@/assets/Logo.svg"
import Link from 'next/link'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
function Logo() {
    const windowWidth: number = useWindowWidth()
    let width: number;
    let height: number;
    if (windowWidth <= 390) {
        width = 101
        height = 26
    } else if (windowWidth > 390 && windowWidth <= 1440) {
        width = (117)
        height = (30)
    } else {
        width = (156)
        height = (40)
    }
    return (
        <Link href="/">
            <Image
                alt="logo"
                src={LogoImg}
                height={height}
                width={width}
                priority />
        </Link>
    )
}

export default Logo
