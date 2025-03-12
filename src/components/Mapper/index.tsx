import React from 'react';
import { cn } from '@/utils/MergeTailwindclasses';

type LiAttributes = React.HTMLAttributes<HTMLLIElement>;

interface MapperProps<T> {
    children: React.ReactNode | ((item: T) => React.ReactNode);
    ulStyle?: string;
    liStyle?: string;
    array?: T[];
}

function Mapper<T extends Partial<LiAttributes>>({
    children,
    ulStyle = "",
    liStyle = "",
    array
}: MapperProps<T>) {
    return (
        <ul className={cn(
            ulStyle
        )}>
            {
                array && array.map((item, index) => (
                    <li
                        key={index}
                        {...item}
                        className={cn(
                            liStyle
                        )}
                    >
                        {typeof children === "function"
                            ? (children as (item: T) => React.ReactNode)(item)
                            : children}
                    </li>
                ))
            }
        </ul>
    );
}

export default Mapper;