"use client"
import Logo from '@/components/ui/Logo'
import NavigationLinks from '@/components/NavigationLinks'
import SignUpButton from '@/components/SignUpButton'
import { cn } from '@/utils/MergeTailwindclasses'
import React from 'react'
import LoginButton from '@/components/LoginButton'
import MobileMenuButton from './ui/MobileMenuButton'


function Header() {

    return (
        <header className={cn(
            "flex",
            "justify-between",
            "items-center",
            "2xl:px-[34px] px-[24px]",
            "2xl:py-[20px] py-[14px]",
            "rounded-[100px]",
            "bg-[var(--grey-11)]",
            "custom-border",
            "my-[30px] 2xl:my-[50px]"

        )}>
            <Logo />

            <NavigationLinks
                wrapperStyle='md:flex justify-between items-center hidden'
                linkStyle='text-[14px] 2xl:text-[18px] px-[18px] 2xl:px-[24px] py-[10px] 2xl:py-[12px] custom-rounded'
                activeClass="bg-grey-15"
            />

            <div className='md:flex items-center justify-between hidden'>
                <SignUpButton />
                <LoginButton />
            </div>
            <MobileMenuButton className='md:hidden' />
        </header >
    )
}

export default Header
