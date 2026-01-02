import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

// <BrowserRouter> indica que vai ter um roteamento
// <Routes> -> Vai receber as rotas
// <Route> -> Rota de fato, o elemento dele vai ser o componente que eu quero definir como a rota
// Path -> o nome que eu quero chamar para acessar a página
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}


