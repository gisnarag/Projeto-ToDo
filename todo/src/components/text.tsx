import React from "react";

// O type está indicando que eu quero apenas o tipo e não a variável em si no runtime 
// cva → é a função principal da lib, VariantProps → é um tipo padrão exportado pela lib da class-variance-authority, você só está importando.
import { cva, type VariantProps } from "class-variance-authority";

// Variações de estilo
// Dentro do () coloco o padrão da fonte que é usado em toda aplicação. E abro objeto com as chaves que irão conter as variantes de estilo.
export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        // Variações para texto
        variant: {
            // sm é tamanho 14px, leading é line height significa 5 × 0.25rem e o font-semibold é o font-weight do texto
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold"
        }
    },
    defaultVariants: {
        variant: "body-md"
    }
});

// Estrutura do componente com typescript
interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements; // React.JSX.IntrinsicElements é um mapa de todas as tags HTML que o React conhece (div, span, button, p, etc.). keyof transforma esse objeto em uma união das chaves. "div" | "span" | "button", isso significa que meu componente aceita uma prop as, e ela só pode ser uma tag HTML válida.
    className?: string;
    children?: React.ReactNode; // React Node é qualquer valor válido que pode aparecer entre as tags JSX. ou seja, essa caixa aceita qualquer coisa que possa ser exibida na tela: número, elemento, texto, etc.
}

// É preciso passar um valor para o as, nesse caso por padrão será span.
export default function Text({ as = "span", variant, className, children, ...props }: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, className }),
            ...props
        },
        children
    )
}