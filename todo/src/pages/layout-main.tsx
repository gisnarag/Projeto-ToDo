import { Outlet } from "react-router";
import Header from "../core-components.tsx/header";
import MainContent from "../core-components.tsx/main-content";
import Footer from "../core-components.tsx/footer";

// O layout será um wrapper de todas as páginas que eu desenhar no route
export default function LayoutMain() {
    return <>
        <Header />
        <MainContent>
            <Outlet />
        </MainContent>
        <Footer />
    </>
}
