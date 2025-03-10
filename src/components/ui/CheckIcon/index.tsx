"use client"
import DynamicImage from '@/components/DynamicImage'
import React from 'react'
import CheckIconImg from './check.svg';
function CheckIcon() {

    return (
        <DynamicImage
            alt="check icon"
            src={CheckIconImg}
            maxWidth={24}
            maxHeight={24}

            middleWidth={20}
            middleHeight={20}

            minWidth={20}
            minHeight={20} />
    )
}

export default CheckIcon
