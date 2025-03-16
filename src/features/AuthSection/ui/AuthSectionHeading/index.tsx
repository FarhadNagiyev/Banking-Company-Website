"use client"
import SectionHeader from '@/components/ui/SectionHeader'
import { usePathname } from 'next/navigation'
import { content } from '../../AuthSection.content'

function AuthSectionHeading() {
    const path = usePathname();

    const heading =
        path === "/auth/signup" ? content.SignupHeading :
            path === "/auth/login" ? content.LoginHeading :
                "Welcome to Authentication";

    const description =
        path === "/auth/signup" ? content.SignupDescription :
            path === "/auth/login" ? content.LoginDescription :
                "Please select an authentication option.";

    return (
        <SectionHeader

            heading={heading}
            description={description}
            className="lg:justify-center  lg:items-center 2xl:gap-[20px] md:gap-4 gap-2.5"
            descriptionStyle='flex items-center justify-center text-center max-w-full'
        />
    )
}

export default AuthSectionHeading
