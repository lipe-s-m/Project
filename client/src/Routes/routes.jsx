import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/LoginPage";
import CardapioAdmin from "../Pages/Admin/CardapioAdmin";
import AgendarHorario from "../Pages/Home/AgendarHorario";
import VisualizarSenha from "../Pages/Home/VisualizarSenha";
import AgendarHorarioAtivo from "../Pages/Home/AgendarHorarioAtivo";
import CardapioAluno from "../Pages/Cardapio/CardapioAluno";
import CardapioAlunoAtivo from "../Pages/Cardapio/CardapioAlunoAtivo";
import LerQRCode from "../Pages/Admin/LerQRCode";

function AppRoutes() {
  return (
    <Router>
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
          path="/VisualizarSenha/:hash/:nomeUsuario/:emailUsuario/:hora/:senha"
          element={<VisualizarSenha />}
        />
        <Route path="/CardapioAdmin" element={<CardapioAdmin />} />

        <Route path="/CardapioAluno/:nomeUsuario/:emailUsuario" element={<CardapioAluno />} />
        <Route path="/CardapioAlunoAtivo/:nomeUsuario/:emailUsuario/:hora/:senha" element={<CardapioAlunoAtivo />} />
        <Route path = "/LerQRCode" element = {< LerQRCode />} />

      </Routes>
    </Router>
  );
}
export default AppRoutes;
