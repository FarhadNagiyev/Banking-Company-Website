"use client"
import { cn } from '@/utils/MergeTailwindclasses'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navLinks = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "/careers",
        content: "Careers"
    },
    {
        href: "/about",
        content: "About"
    },
    {
        href: "/security",
        content: "Security"
    },

]
type NavigationLinksProps = {
    wrapperStyle: string;
    linkStyle: string;
    activeClass: string;

}
function NavigationLinks({ wrapperStyle, linkStyle, activeClass }: NavigationLinksProps) {
    const pathname = usePathname()
    return (

        <nav>
            <ul className={cn(
                wrapperStyle
            )}>
                {
                    navLinks && navLinks.map((item, index) => (
                        <li key={index}
                            className={cn(
                                `
                                ${pathname === item.href ? activeClass : ""}
                                `,
                                linkStyle
                            )}>
                            <Link href={item.href}>
                                {item.content}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}

export default NavigationLinks
