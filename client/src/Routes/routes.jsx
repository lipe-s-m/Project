import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/LoginPage";
import Cardapio from "../Pages/Home/Cardapio";
import AgendarHorario from "../Pages/Home/AgendarHorario";
import VisualizarSenha from "../Pages/Home/VisualizarSenha";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* As Rotas do Sistema */}
        <Route path="/" element={<Login />} />
        <Route
          path="/AgendarHorario/:nomeUsuario/:emailUsuario"
          element={<AgendarHorario />}
        />
        <Route
          path="/VisualizarSenha/:nomeUsuario/:emailUsuario/:data/:hora/:senha"
          element={<VisualizarSenha />}
        />
        <Route path="/Cardapio" element={<Cardapio />} />

      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
