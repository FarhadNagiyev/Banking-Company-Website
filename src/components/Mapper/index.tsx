import React from 'react';
import { cn } from '@/utils/MergeTailwindclasses';

interface MapperProps<T> {
    children: React.ReactNode | ((item: T, index: number) => React.ReactNode);
    ulStyle?: string;
    liStyle?: string;
    array: T[];
}

function Mapper<T>({
    children,
    ulStyle = "",
    liStyle = "",
    array
}: MapperProps<T>) {
    return (
        <ul className={cn(ulStyle)}>
            {
                array && array.map((item, index) => (
                    <li
                        key={index}
                        className={cn(liStyle)}
                    >
                        {typeof children === "function"
                            ? (children as (item: T, index: number) => React.ReactNode)(item, index)
                            : children}
                    </li>
                ))
            }
        </ul>
    );
}

export default Mapper;