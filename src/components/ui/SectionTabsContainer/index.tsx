import React from 'react'
type SectionTabsWrapperProps = {
    children: React.ReactNode;
}
function SectionTabsContainer({ children }: SectionTabsWrapperProps) {
    return (
        <div className="flex bg-grey-11 custom-rounded 2xl:p-[14px] p-[12px] custom-border min-w-max max-w-max max-h-max">
            {children}
        </div>
    )
}

export default SectionTabsContainer
