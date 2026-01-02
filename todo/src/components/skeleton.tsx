import { cva, type VariantProps } from "class-variance-authority";

// Skeleton é um componente visual usado para representar o estado de carregamento de dados. Ele aplica a animação animate-pulse do Tailwind.
export const skeletonVariants = cva("animate-pulse bg-gray-200 pointer-events-none", {
    variants: {
        rounded: {
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full"
        }
    },
    defaultVariants: {
        rounded: "lg",
    }
});

// A tipagem com React.ComponentProps<"div", indica que o componente Skeleton só vai aceitar as mesmas props que um <div> HTML aceita.
interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> { }

export default function Skeleton({ rounded, className, ...props }: SkeletonProps) {
    return <div className={skeletonVariants({ rounded, className })} {...props} />
}