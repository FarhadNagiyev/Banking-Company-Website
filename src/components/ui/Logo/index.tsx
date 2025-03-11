"use client"
import React from 'react'
import LogoImg from "@/assets/Logo.svg"
import Link from 'next/link'
import DynamicImage from '@/components/DynamicImage' // Adjust the import path as needed

function Logo() {
    return (
        <Link href="/">
            <DynamicImage
                alt="logo"
                src={LogoImg}
                minWidth={101}
                minHeight={26}
                middleWidth={117}
                middleHeight={30}
                maxWidth={156}
                maxHeight={40}
                priority={true}
            />
        </Link>
    )
}

export default Logo