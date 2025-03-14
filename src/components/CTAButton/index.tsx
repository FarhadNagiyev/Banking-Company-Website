import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import Link from 'next/link'

function CTAButton() {
    return (
        <PrimaryButton className='2xl:py-[18px] py-[14px] min-w-max max-w-max max-h-max'>
            <Link href="/auth/signup">
                Open Account
            </Link>
        </PrimaryButton>
    )
}

export default CTAButton
