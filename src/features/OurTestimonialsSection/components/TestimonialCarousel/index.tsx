"use client"

import React from 'react';

import { cardContents } from '../../data/contents';
import useWindowWidth from '@/utils/hooks/useWindowWidth';
import useCarouselControls from '@/utils/hooks/useCarouselControls';
import CarouselControls from '../CarouselControls';
import TestimonialSlider from '../TestimonialSlider';


function TestimonialCarousel() {
    const windowWidth = useWindowWidth();
    const {
        emblaRef,
        scrollPrev,
        scrollNext,
        prevBtnDisabled,
        nextBtnDisabled
    } = useCarouselControls();

    const isDesktop = windowWidth > 1024;

    return (
        <section className="py-10 px-4 grid gap-4 lg:grid-cols-[auto_1fr_auto] items-center">
            {/* Desktop left control */}
            {isDesktop && (
                <CarouselControls.Button
                    variant="left"
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                />
            )}

            <div className="lg:relative grid">
                {isDesktop && (
                    <div className="absolute inset-0 z-[1000] radial-shadow-filter w-full"></div>
                )}

                <TestimonialSlider
                    emblaRef={emblaRef}
                    testimonials={cardContents}
                />
            </div>

            {/* Desktop right control */}
            {isDesktop && (
                <CarouselControls.Button
                    variant="right"
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                />
            )}

            {/* Mobile controls */}
            {!isDesktop && (
                <CarouselControls.MobileButtons
                    onPrevClick={scrollPrev}
                    onNextClick={scrollNext}
                    prevDisabled={prevBtnDisabled}
                    nextDisabled={nextBtnDisabled}
                />
            )}
        </section>
    );
}

export default TestimonialCarousel;