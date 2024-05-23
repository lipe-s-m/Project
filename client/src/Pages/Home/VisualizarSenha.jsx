import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./VisualizarSenha.css";
import Axios from "axios";

function VisualizarSenha() {
  //pegando dados do usuario
  const { emailUsuario } = useParams();
  const { nomeUsuario } = useParams();
  const { senha } = useParams();
  const { data } = useParams();
  const { hora } = useParams();

  return (
    <>
      <div id="registro">
        <p id="test">oi {nomeUsuario} Sua senha é {senha}</p>
      </div>
    </>
  );
}
export default VisualizarSenha;
