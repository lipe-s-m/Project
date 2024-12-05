import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./../Home/VisualizarSenha.css";
import Iconagend from "../../UI/Icons/agend3.png";
import IconUser from "../../UI/Icons/homem-usuario.png";
import IconClock from "../../UI/Icons/relogio.png";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import QRCode from 'react-qr-code';
import {Html5QrcodeScanner} from 'html5-qrcode'
import "../../App.css";
import Axios from "axios";


function LerQrCode() {
  //pegando dados do usuario

  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(null);
  const [scanResult, setScanResult] = useState(null);

  useEffect( () => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        heigth: 250,
      },
      fps: 5,
    })

    scanner.render(success, error);
    function success(result){
      scanner.clear();
      setScanResult(result);
    }

    function error(err){
      console.warn(err)
    }
  }, [])
  
  function handleLerQrCode() {

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
          // navigate(`/AgendarHorario/${nomeUsuario}/${emailUsuario}`);
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
            <div id="reader"></div>
            <hr></hr>
          </div>
         


          <button className="botao-navegacao verde agendamento" onClick={handleLerQrCode}>
            Ler Qr Code
          </button>
          <button
            className="botao-navegacao vermelho agendamento"
            // onClick={() => handleIncreaseDesagendar(emailUsuario)}
          >
            Desconectar
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
export default LerQrCode;
