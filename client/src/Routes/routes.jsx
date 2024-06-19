import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/LoginPage";
import CardapioAdmin from "../Pages/Admin/CardapioAdmin";
import AgendarHorario from "../Pages/Home/AgendarHorario";
import VisualizarSenha from "../Pages/Home/VisualizarSenha";
import AgendarHorarioAtivo from "../Pages/Home/AgendarHorarioAtivo";
import CardapioAluno from "../Pages/Cardapio/CardapioAluno";
import CardapioAlunoAtivo from "../Pages/Cardapio/CardapioAlunoAtivo";

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
          path="/AgendarHorarioAtivo/:nomeUsuario/:emailUsuario/:hora/:senha"
          element={<AgendarHorarioAtivo />}
        />
        <Route
          path="/VisualizarSenha/:nomeUsuario/:emailUsuario/:hora/:senha"
          element={<VisualizarSenha />}
        />
        <Route path="/CardapioAdmin" element={<CardapioAdmin />} />

        <Route path="/CardapioAluno/:nomeUsuario/:emailUsuario" element={<CardapioAluno />} />
        <Route path="/CardapioAlunoAtivo/:nomeUsuario/:emailUsuario/:hora/:senha" element={<CardapioAlunoAtivo />} />

      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
