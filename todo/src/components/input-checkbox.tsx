import React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import Icon from "./icon"
import CheckIcon from "../assets/icons/check.svg?react"
import Skeleton from "./skeleton";

// group marca o elemento como pai para que os filhos possam reagir aos estados dele como group-hover
export const inputCheckboxWrapperVariants = cva("inline-flex items-center justify-center relative group");

// appearance-none reseta as propriedades padrão do checkbox
//  peer -> meus irmãos podem reagir ao meu estado. Como o input checkbox e o ícone de check são elementos irmãos,  `peer` faz com que o estado do checkbox (checked, focus, etc.) possa alterar o estilo do ícone.
// overflow: hidden -> Tudo que ultrapassar o tamanho do elemento não aparece
export const inputCheckboxVariants = cva(
    `
    appearance-none peer flex items-center justify-center cursor-pointer
    transition overflow-hidden
     `,
    {
        variants: {
            variant: {
                none: "",
                default: `border-2 border-solid
                 border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark`
            },
            size: {
                md: "w-5 h-5 rounded-sm"
            },
            disabled: {
                true: "pointer-events-none"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            disabled: false,
        }
    }
);

// Icone de check
export const inputCheckboxIconVariants = cva(
    `absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white 
    `, {
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> { loading?: boolean }

export default function InputCheckbox({ variant, size, disabled, className, loading, ...props }: InputCheckboxProps) {
    if (loading) {
        return <Skeleton rounded="sm" className={inputCheckboxVariants({ variant: "none", size })} />
    }

    return (
        <label className={inputCheckboxWrapperVariants({ className })}>
            <input type="checkbox"
                className={inputCheckboxVariants({ variant, size, disabled })} {...props} />

            <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
        </label>
    )
};