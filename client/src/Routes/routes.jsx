import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/LoginPage";
import Cardapio from "../Pages/Admin/Cardapio";
import AgendarHorario from "../Pages/Home/AgendarHorario";
import VisualizarSenha from "../Pages/Home/VisualizarSenha";
import AgendarHorarioAtivo from "../Pages/Home/AgendarHorarioAtivo";

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
          path="/AgendarHorarioAtivo/:nomeUsuario/:emailUsuario"
          element={<AgendarHorarioAtivo />}
        />
        <Route
          path="/VisualizarSenha/:nomeUsuario/:emailUsuario/:hora/:senha"
          element={<VisualizarSenha />}
        />
        <Route path="/Cardapio" element={<Cardapio />} />

      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
