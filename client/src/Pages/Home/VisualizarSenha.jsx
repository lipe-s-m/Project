import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./VisualizarSenha.css";
import Iconagend from "../../UI/Icons/agend3.png";
import IconUser from "../../UI/Icons/homem-usuario.png";
import IconClock from "../../UI/Icons/relogio.png";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import QRCode from 'react-qr-code';

import "../../App.css";

import Axios from "axios";

function VisualizarSenha() {
  //pegando dados do usuario

  const { hash } = useParams();
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
  const [loading, setLoading] = useState(null);

  //carrega pagina de agendamento
  function handleIncreaseHorarios() {
    localStorage.setItem('hashUser', hash);
    navigate(
      `/AgendarHorarioAtivo/${hash}/${nomeUsuario}/${emailUsuario}/${hora}/${senha}`
    );
  }
  function handleIncreaseDesagendar(emailUsuario) {

    try {
      setLoading(true)
      //apagando agendamento no banco
      Axios.post("https://www.dcc.ufrrj.br/filaruservicos//cancelarAgendamento", {
        email: emailUsuario,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          localStorage.setItem('hashUser', null);
          navigate(`/AgendarHorario/${nomeUsuario}/${emailUsuario}`);
        }).catch((err) => {
          console.log(err)
        })
    }
    catch (error) {
      console.error("Erro na requisição:", error);
    }
    finally {
      setLoading(false)
    };
    console.log("apagando");
  }

  return (
    <>
      <div id="box-visualizar-senha">
        <img id="iconAgend" src={Iconagend} alt="IconeAgendamento"></img>
        <div id="title" className="titulo-agendamento">Agendamento</div>

        {/* informacoes do agendamento */}
        <div id="informacoes">
          <div className="info">
            <div className="text">Nome: </div>
            <div className="textLight">
              <img id="iconUser" src={IconUser} alt="IconeUsuario"></img>
              <div className="infoUser"> {nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1).split(" ")[0].toLowerCase()} {nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1][0].toUpperCase() + nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1].substring(1).toLowerCase()} </div>
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
            {/* {" "}
            Senha:
            <div id="numSenha">{senha}</div> */}

            <QRCode id="qr-code" value={`www.dcc.ufrrj.br/filaru/#/${hash}`} />

          </div>


          <button className="botao-navegacao verde agendamento" onClick={handleIncreaseHorarios}>
            Visualizar Horarios
          </button>
          <button
            className="botao-navegacao vermelho agendamento"
            onClick={() => handleIncreaseDesagendar(emailUsuario)}
          >
            Cancelar Agendamento
          </button>
        </div>
        <p className="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>

      {loading && <div className="loading"> <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop></div>} {/* Mostra o carregamento */}
    </>
  );
}
export default VisualizarSenha;
