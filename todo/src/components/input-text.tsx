// O cva possui uma função chamada cx, onde junta várias classes (strings, condicionais ou retornos do cva) em uma única string válida para className.
import { cva, cx, type VariantProps } from "class-variance-authority"
import React from "react";
import { textVariants } from "./text";

export const inputTextVariants = cva("border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none", {
    variants: {
        size: {
            md: "pb-2 px-2"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false,
    }
});

interface inputTextProps extends VariantProps<typeof inputTextVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function inputTextProps({
    size,
    disabled,
    className,
    ...props

}: inputTextProps) {
    return <input className={cx(inputTextVariants({ size, disabled }),
        textVariants(),
        className
    )} {...props} />
}