
import Icon from '@/components/Icon'
import React from 'react'

function FacebookAuthButton() {
    return (
        <button className='custom-flex-center'>
            <Icon alt="facebook logo" src="/facebookgreen.svg" variant="large" className='text-green-60' />
        </button>
    )
}

export default FacebookAuthButton
