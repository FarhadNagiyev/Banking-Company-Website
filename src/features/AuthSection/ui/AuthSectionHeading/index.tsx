"use client"
import SectionHeader from '@/components/ui/SectionHeader'
import { usePathname } from 'next/navigation'
import { content } from '../../AuthSection.content'

function AuthSectionHeading() {
    const path = usePathname();

    const heading =
        path === "/auth/signup" ? content.SignupHeading :
            path === "/auth/login" ? content.LoginHeading :
                "Welcome to Authentication"; // `/auth` için varsayılan başlık

    const description =
        path === "/auth/signup" ? content.SignupDescription :
            path === "/auth/login" ? content.LoginDescription :
                "Please select an authentication option."; // `/auth` için varsayılan açıklama

    return (
        <SectionHeader
            heading={heading}
            description={description}
            className="items-center text-center 2xl:gap-[20px] md:gap-4 gap-2.5"
        />
    )
}

export default AuthSectionHeading
