import { cn } from '@/utils/MergeTailwindclasses'
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'

function SignUpButton() {
    return (
        <form className='flex items-center justify-center'>
            <PrimaryButton className={cn(
                "bg-[var(--grey-11)]",
                "text-white"

            )}>
                Sign Up
            </PrimaryButton>
        </form>
    )
}

export default SignUpButton
