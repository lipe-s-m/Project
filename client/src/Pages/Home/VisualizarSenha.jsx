import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./VisualizarSenha.css";
import Iconagend from "../../UI/Icons/agend3.png";
import IconUser from "../../UI/Icons/homem-usuario.png";
import IconClock from "../../UI/Icons/relogio.png";
import { useNavigate } from "react-router-dom";

import "../../App.css";

import Axios from "axios";

function VisualizarSenha() {
  //pegando dados do usuario

  const { emailUsuario } = useParams();
  const { nomeUsuario } = useParams();
  const { senha } = useParams();
  const { hora } = useParams();
  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const navigate = useNavigate();

  //carrega pagina de agendamento
  function handleIncreaseHorarios() {
    navigate(`/AgendarHorarioAtivo/${nomeUsuario}/${emailUsuario}`);
  }
  function handleIncreaseDesagendar(emailUsuario) {
    //apagando agendamento no banco
    Axios.post("http://localhost:3001/cancelarAgendamento", {
      email: emailUsuario,
    })
      .then((response) => {
        console.log(response.data); // Mostrar a resposta do servidor
        navigate(`/AgendarHorario/${nomeUsuario}/${emailUsuario}`);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
    console.log("apagando");
  }

  return (
    <>
      <div id="registro">
        <img id="iconAgend" src={Iconagend} alt="IconeAgendamento"></img>
        <div id="titulo">Agendamento</div>

        {/* informacoes do agendamento */}
        <div id="informacoes">
          <div className="info">
            <div className="text">Nome: </div>
            <div className="textLight">
              <img id="iconUser" src={IconUser} alt="IconeUsuario"></img>
              <div className="infoUser"> {nomeUsuario} </div>
            </div>
            <hr></hr>
          </div>
          <div className="info">
            <div className="text">Data / Hora: </div>
            <div className="textLight">
              <img id="iconUser" src={IconClock} alt="IconeUsuario"></img>
              <div className="infoUser">
                {" "}
                {dataFormatada} - {hora}
              </div>
            </div>
            <hr></hr>
          </div>
          <div id="senha">
            {" "}
            Senha:
            <div id="numSenha">{senha}</div>
          </div>

          <button id="verHorario" onClick={handleIncreaseHorarios}>
            Visualizar Horarios
          </button>
          <button
            id="cancelarAgend"
            onClick={() => handleIncreaseDesagendar(emailUsuario)}
          >
            Cancelar Agendamento
          </button>
        </div>
        <p id="rodape">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
    </>
  );
}
export default VisualizarSenha;
