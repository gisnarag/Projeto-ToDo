import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

// Variações de estilo do botão
export const buttonIconVariants = cva("inline-flex items-center justify-center cursor-pointer transition group", {
    variants: {
        variant: {
            none: "",
            primary: "bg-green-base hover:bg-green-dark",
            secondary: "bg-gray-200 hover:bg-pink-base",
            tertiary: "bg-transparent hover:bg-gray-200"
        },
        size: {
            sm: "w-6 h-6 p-1 rounded"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
        handling: {
            true: "pointer-events-none",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
        disabled: false,
        handling: false,
    }
});

// Icone de lixeira
// group-hover: permite reagir ao hover do pai
export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant: {
            none: "",
            primary: "fill-white",
            secondary: "fill-pink-base group-hover:fill-white",
            tertiary: "fill-gray-300 group-hover:fill-gray-400"
        },
        size: {
            sm: "w-4 h-4"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})

// Herda todas as props do <button> exceto size e disabled, ou seja, essse bptão com ícone aceita tudo que um botão HTML aceita.
// icon precisa ser um componente React que renderiza um SVG
interface ButtonIconProps extends VariantProps<typeof buttonIconVariants>, Omit<React.ComponentProps<"button">, "size" | "disabled"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
    loading?: boolean;
    handling?: boolean;
}

// Criando componente de botão para variação de estilo 
export default function ButtonIcon({ variant, size, disabled, className, icon, loading, handling, ...props }: ButtonIconProps) {
    if (loading) {
        return <Skeleton rounded="sm" className={buttonIconVariants({ variant: "none", size, className })} />
    }

    return (
        <button className={buttonIconVariants({ variant, size, disabled, className, handling })} {...props}>
            <Icon
                svg={handling ? SpinnerIcon : icon}
                animate={handling}
                className={buttonIconIconVariants({ variant, size })}>
            </Icon>
        </button >
    )
}       