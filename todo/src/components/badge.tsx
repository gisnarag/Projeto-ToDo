import Skeleton from "./skeleton";
import Text from "./text";
import { cx, cva, type VariantProps } from "class-variance-authority";

// 1º parâmetro: classes base (aplicadas a todas as variantes). 2º parâmetro: objeto de configuração(variants, defaultVariants, compoundVariants)
// variant como config de cor
export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
    variants: {
        variant: {
            none: "",
            primary: "bg-green-light",
            secondary: "bg-pink-light"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
});

export const badgeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-green-dark",
            secondary: "text-pink-dark"
        },
    },
    defaultVariants: {
        variant: "primary"
    }
})

// React.ComponentProps é um tipo utilitário do React + TypeScript que extrai automaticamente as props de um componente. o Badge: aceita tudo que um <div> aceita

// O typeof do TypeScript serve para transformar um valor em um tipo. O VariantProps não quer o valor, quer o tipo dessa função.

// Uso VariantProps + typeof para extrair automaticamente os tipos das variantes definidas em badgeVariants.

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> { loading?: boolean; }

// Variante de tamanho para o Skeleton
export const badgeSkeletonVariants = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6",
        }
    },
    defaultVariants: {
        size: "sm",
    }
});

// variant, size, className eu defino no cva. O cva() é uma função da lib class-variance-authority que permite definir variantes de classes CSS. E a partir dessa configuração, o TypeScript consegue inferir automaticamente os tipos das variantes, que depois são usados nos componentes.
// O skeleton de carregamento vai aparecer se true.
// cx vai unir as strings de classes geradas pelos DOIS cva e entregar uma única className final para o componente.
// cx(badgeVariants({ variant: "none" }), é para desconsiderar o estilo padrão do texto e do bdga e considere o estilo de cor do skeleton (ocorre automaticamente)
export default function Badge({ variant, size, className, children, loading, ...props }: BadgeProps) {
    if (loading) {
        return (<Skeleton
            rounded="full"
            className={cx(badgeVariants({ variant: "none" }),
                badgeSkeletonVariants({ size }), className)}
        />
        );
    }

    // Estilizando div com badgeVariants e suas config
    return (<div className={badgeVariants({ variant, size, className })} {...props}>
        <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>{children}</Text>
    </div>
    )
}

