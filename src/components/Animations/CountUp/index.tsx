"use client"
import { cn } from '@/utils/MergeTailwindclasses';
import React from 'react';

interface CountUpProps {
    value?: number;
    className?: string;
}

interface CountUpState {
    count: number;
    animationStarted: boolean;
}

class CountUp extends React.Component<CountUpProps, CountUpState> {
    private targetValue: number;
    private animationDuration: number;
    private animationRef: NodeJS.Timeout | null;

    constructor(props: CountUpProps) {
        super(props);
        this.state = {
            count: 0,
            animationStarted: false
        };

        // Ensure value is within 0-100 range
        this.targetValue = Math.min(Math.max(0, props.value || 0), 100);
        this.animationDuration = 2000; // 2 seconds in milliseconds
        this.animationRef = null;
    }

    componentDidMount(): void {
        this.startAnimation();
    }

    componentDidUpdate(prevProps: CountUpProps): void {
        if (prevProps.value !== this.props.value) {
            // Update target value if props change
            this.targetValue = Math.min(Math.max(0, this.props.value || 0), 100);
            this.startAnimation();
        }
    }

    componentWillUnmount(): void {
        if (this.animationRef) {
            clearTimeout(this.animationRef);
        }
    }

    startAnimation(): void {
        // Clear any existing animation
        if (this.animationRef) {
            clearTimeout(this.animationRef);
        }

        const startTime = Date.now();
        const startValue = this.state.count;
        const endValue = this.targetValue;
        const duration = this.animationDuration;

        const updateCounter = (): void => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime < duration) {
                // Calculate the current count based on elapsed time and easing
                const progress = elapsedTime / duration;
                const easedProgress = this.easeOutQuad(progress);
                const newCount = Math.floor(startValue + (endValue - startValue) * easedProgress);

                this.setState({ count: newCount });

                // Continue animation
                this.animationRef = setTimeout(updateCounter, 16); // ~60fps
            } else {
                // Animation complete
                this.setState({ count: endValue });
                this.animationRef = null;
            }
        };

        // Start the animation loop
        updateCounter();
    }

    // Easing function for smooth animation
    easeOutQuad(t: number): number {
        return t * (2 - t);
    }

    render(): React.ReactNode {
        return (
            <div className={cn(
                this.props.className
            )}>
                {this.state.count}
            </div>
        );
    }
}

export default CountUp;