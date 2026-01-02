import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

// Estilização do botão, usar doc tailwind para entender a config do size
export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg group gap-2", {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-pink-light"
        },
        size: {
            md: "h-14 py-4 px-5"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
        handling: {
            true: "pointer-events-none",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
        handling: false,
    }
});

// Para o SVG herdar cor, usa-se fill
export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "fill-pink-base"
        },
        size: {
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text- gray - 400"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

// ButtonProps herda todas as props nativas do <button> Incluindo automaticamente: onClick, type, disabled etc. Assim, o componente <Button /> se comporta como um botão HTML real em termos de tipagem.

// Para tipagem coloco o nome e estendo as propriedades do react.componentProps que será as propriedades do botão
// Como o componente icon possui prop svg, escreve assim para herdar
// Omitimos as props nativas do <button> do HTML (ex: size) para evitar conflito com as variantes controladas pelo cva que também se chama size. 
interface ButtonProps extends Omit<React.ComponentProps<"button">, 'size' | "disabled">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
    handling?: boolean;

}

// Para usar o componente de ícone no button, como é opcional usa a lógica com o operador && -> Se A for true, então retorna B. Ou seja, se IconComponent é true retorna o Icon
export default function Button({ variant, size, disabled, className, children, handling, icon, ...props }: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, size, disabled, handling, className })}
            {...props}>
            {icon && (
                <Icon
                    svg={handling ? SpinnerIcon : icon}
                    animate={handling}
                    className={buttonIconVariants({ variant, size })} />
            )}
            <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
                {children}
            </Text>
        </button >
    )
}