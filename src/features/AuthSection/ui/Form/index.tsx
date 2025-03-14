import React from 'react'
type FormProps = {
    children: React.ReactNode;
}
function Form({ children }: FormProps) {
    return (
        <div className='w-full'>
            {children}
        </div>
    )
}

export default Form
