import { cn } from '@/utils/MergeTailwindclasses'
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import Link from 'next/link'

function SignUpButton() {
    return (

        <PrimaryButton className={cn(
            "bg-[var(--grey-11)]",
            "text-white"

        )}>
            <Link href="/auth/signup">
                Sign Up
            </Link>
        </PrimaryButton>

    )
}

export default SignUpButton
