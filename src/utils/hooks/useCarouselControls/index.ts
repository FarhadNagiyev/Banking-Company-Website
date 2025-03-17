"use client"

import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function useCarouselControls() {
    // Using state only for the setter function to trigger re-renders
    const [, forceRender] = useState(0);

    // Initialize embla carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        loop: false
    });

    // Scroll controls that force re-renders
    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            // Force re-render to update button states
            forceRender(prev => prev + 1);
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            // Force re-render to update button states
            forceRender(prev => prev + 1);
        }
    }, [emblaApi]);

    // Calculate button states directly
    const prevBtnDisabled = !emblaApi || !emblaApi.canScrollPrev();
    const nextBtnDisabled = !emblaApi || !emblaApi.canScrollNext();

    return {
        emblaRef,
        scrollPrev,
        scrollNext,
        prevBtnDisabled,
        nextBtnDisabled
    };
}

export default useCarouselControls;