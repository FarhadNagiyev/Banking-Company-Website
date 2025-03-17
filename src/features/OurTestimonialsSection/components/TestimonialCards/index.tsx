"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowButton from '../ArrowButton';
import TestimonialCard from '../TestimonialCard';
import { cardContents } from '../../data/contents';


function TestimonialCards() {
    // Using state only for the setter function to trigger re-renders
    const [, forceRender] = React.useState(0);

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

    return (
        <section className="py-10 px-4 grid gap-4 lg:grid-cols-[auto_1fr_auto] items-center">
            {/* Sol buton - Küçük ekranlarda gizlenmez */}
            <ArrowButton
                variant="left"
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="lg:block hidden"
            />

            {/* Carousel */}
            <div className="max-w-6xl mx-auto w-full overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {cardContents.map((card, index) => (
                        <div className="flex-[0_0_100%]  sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]" key={index}>
                            <div className="mx-2 h-full">
                                <TestimonialCard
                                    comment={card.comment}
                                    author={card.author}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sağ buton - Küçük ekranlarda gizlenmez */}
            <ArrowButton
                variant="right"
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="lg:block hidden"
            />

            {/* Küçük ekranlar için butonları aşağıda yan yana göster */}
            <div className="flex justify-center gap-4 lg:hidden">
                <ArrowButton
                    variant="left"
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                />
                <ArrowButton
                    variant="right"
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                />
            </div>
        </section>

    );
}

export default TestimonialCards;