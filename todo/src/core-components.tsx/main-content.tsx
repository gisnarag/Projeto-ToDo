import React from "react"
import { cx } from "class-variance-authority"

// React.ComponentProps<"main"> existe apenas para tipagem. Ele só diz ao TypeScript: Esse componente aceita todas as props que um <main> HTML aceita.
interface MainContentProps extends React.ComponentProps<"main"> { }

export default function MainContent({ children, className, ...props }: MainContentProps) {
    return <main className={cx("mt-4 md:mt-8", className)} {...props}>{children}</main>
}