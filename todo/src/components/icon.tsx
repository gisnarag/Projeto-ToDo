// Criando um componente de ícone para configurar a estilização de forma dinâmica

//O tipo React.ComponentProps<"svg" significa todas as props que um elemento <svg> aceita no React. Ele já inclui: className, width, fill etc. Esse tipo vive dentro do objeto React, então o TypeScript precisa saber quem é React.
import React from "react"
import { cva, type VariantProps } from "class-variance-authority";

// Criando variação para os ícones usando cva
export const iconVariants = cva("", {
    variants: { // objeto padrão cva
        animate: {  // Nome da variante 
            false: "", // opção 1
            true: "animate-spin"  // opção 2
        }
    },
    defaultVariants: { // Variação padrão
        animate: false
    }
})

// React.ComponentProps<"svg"> pega as propriedades do svg e coloca dentro da interface

// svg: React.FC<React.ComponentProps<"svg">> significa que o svg é do tipo componente funcional, ou seja, possui return de um svg.
interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

// Receber svg e fazer o spread das props para receber estilo. Chave: valor, o svg agora se chama SvgComponent
// className do iconVariants vem do cva, ela sempre aceita um objeto com as variantes que você definiu (animate) e className automaticamente, mesmo que você não declare que é comportamento padrão da class-variance-authority.
export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
    return <SvgComponent className={iconVariants({ animate, className })} {...props} />
}