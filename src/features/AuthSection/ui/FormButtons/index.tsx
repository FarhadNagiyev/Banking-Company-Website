"use client"
import PrimaryButton from '@/components/ui/PrimaryButton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function FormButtons() {
    const path = usePathname();

    const submitButtonContent = path === "/auth/signup" ? "Sign Up" : "Login";
    const linkButtonContent = path === "/auth/signup" ? "Login" : "Sign Up";
    const linkHref = path === "/auth/signup" ? "/auth/login" : "/auth/signup";

    return (
        <div className="flex flex-col w-full 2xl:gap-[24px] gap-[20px]">
            <PrimaryButton className="rounded-[63px]">
                {submitButtonContent}
            </PrimaryButton>
            <Link href={linkHref} className='w-full'>
                <PrimaryButton className="bg-grey-15 text-white w-full">
                    {linkButtonContent}
                </PrimaryButton>
            </Link>
        </div>
    )
}

export default FormButtons
