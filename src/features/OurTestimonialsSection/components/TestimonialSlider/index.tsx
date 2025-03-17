"use client"

import React from 'react';
import TestimonialCard from '../TestimonialCard';

interface Testimonial {
    comment: string;
    author: string;
}

interface TestimonialSliderProps {
    emblaRef: React.MutableRefObject<HTMLDivElement | null> | ((instance: HTMLDivElement | null) => void);
    testimonials: Testimonial[];
}

interface TestimonialSlideProps {
    comment: string;
    author: string;
}

function TestimonialSlider({ emblaRef, testimonials }: TestimonialSliderProps) {
    return (
        <div className="lg:relative z-[1] max-w-6xl mx-auto w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {testimonials.map((testimonial, index) => (
                    <TestimonialSlide
                        key={index}
                        comment={testimonial.comment}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </div>
    );
}

function TestimonialSlide({ comment, author }: TestimonialSlideProps) {
    return (
        <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
            <div className="mx-2 h-full">
                <TestimonialCard
                    comment={comment}
                    author={author}
                />
            </div>
        </div>
    );
}

export default TestimonialSlider;