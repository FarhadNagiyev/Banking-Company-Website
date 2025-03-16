import Icon from '@/components/Icon'
import Link from 'next/link'
import React from 'react'

type ContentCardProps = {
    title: string;
    description?: string;
    link?: string;
    showDescription?: boolean;
    showLink?: boolean;
    className?: string;
    children?: React.ReactNode;
}

/**
 * A versatile card component for displaying content with optional description and link
 * 
 * @param title - Main heading of the card
 * @param description - Optional description text
 * @param link - Optional URL for the card link
 * @param showDescription - Controls visibility of description (defaults to true if description provided)
 * @param showLink - Controls visibility of link (defaults to true if link provided)
 * @param className - Additional CSS classes to apply to the card container
 * @param children - Optional children to render inside the card
 */
const ContentCard: React.FC<ContentCardProps> = ({
    title,
    description,
    link,
    showDescription = !!description,
    showLink = !!link,
    className = '',
    children
}) => {
    return (
        <div className={`min-h-full flex flex-col bg-grey-11 custom-border p-[clamp(30px,5vw,50px)] rounded-[0.75rem] gap-[clamp(20px,5vh,30px)] ${className}`}>
            <div className='flex justify-between items-center'>
                <h3 className='fluid-22'>
                    {title}
                </h3>
                {showLink && link && (
                    <Link href={link}>
                        <Icon alt="arrow top-left" src='/arrow.svg' variant='large' />
                    </Link>
                )}
            </div>

            {showDescription && description && (
                <p className='fluid-18 text-grey-70 font-light'>
                    {description}
                </p>
            )}

            {children}
        </div>
    )
}

export default ContentCard