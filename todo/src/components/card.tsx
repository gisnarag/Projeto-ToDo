import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
    ` rounded-lg border border-solid border-gray-200
    bg-white shadow-sm
    `, {
    variants: {
        size: {
            none: "",
            md: "p-5"
        }
    },
    defaultVariants: {
        size: "none"
    }
});


// React.JSX.IntrinsicElements é um tipo do React que representa todos os elementos HTML válidos no JSX, usando keyof nele, a prop `as` pode receber qualquer tag HTML válida para o card que por padrão é div. 
interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({ as = "div", size, children, className, ...props }: CardProps) {
    return React.createElement(
        as,
        {
            className: cardVariants({ size, className }),
            ...props
        },
        children
    );
}