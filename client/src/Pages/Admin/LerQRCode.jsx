import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./../Home/VisualizarSenha.css";
import "./LerQRCode.css";
import Iconagend from "../../UI/Icons/agend3.png";
import IconUser from "../../UI/Icons/homem-usuario.png";
import IconClock from "../../UI/Icons/relogio.png";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import QRCode from 'react-qr-code';
import "../../App.css";
import Axios from "axios";
import axios from "axios";


function LerQrCode() {
  //pegando dados do usuario

  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [agendamentoAtivo, setAgendamentoAtivo] = useState(null);
  const { hash } = useParams();

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [hora, setHora] = useState([]);
  const [horaSemPonto, setHoraSemPonto] = useState(null);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState([]);
  const [idHash, setIdHash] = useState([]);

  const date = new Date();
  const dataFormatada = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  useEffect(() => {

    horaAtual = agora.getHours();
    minutoAtual = agora.getMinutes();
    horaMinutoAtual = horaAtual.toString().padStart(2, '0') + minutoAtual.toString().padStart(2, '0');
    setLoading(true)

    handleLerQrCode()

    if (horaSemPonto !== undefined) {
      if (horaMinutoAtual > horaSemPonto + 10) {
        console.log(`Seu agendamento passou da hora, não é mais válido ${horaMinutoAtual} + ${horaSemPonto}`);
        setAgendamentoAtivo(false);
      } else {
        console.log(`Seu agendamento está no horario, é válido ${horaMinutoAtual} + ${horaSemPonto}`);
        setAgendamentoAtivo(true);
      }
    }


  }, [horaSemPonto, horaMinutoAtual]);

  async function handleLerQrCode() {
    console.log(hash)
    try {
      const response = await Axios.get("https://www.dcc.ufrrj.br/filaruservicos/verificarAgendamentoHash", {
        params: { idhash: hash }
      })
      const dados = response.data;
      console.log(dados);
      if (dados === null) {
        document.getElementById("aviso-qrcode").hidden = false;
        document.getElementById("info-aluno").hidden = true;

        console.log("Nenhum qr code scanneado")
      }
      else {
        document.getElementById("aviso-qrcode").hidden = true;
        document.getElementById("info-aluno").hidden = false;

        const { horario, idhash, email, nome, data } = dados;
        setData(data);
        setHora(horario)
        setHoraSemPonto(parseInt(horario.replace(":", "")));
        console.log(horaSemPonto);  // Verifique se o valor está correto
        setIdHash(idhash)
        setNomeUsuario(nome)
        setEmail(email)
        console.log(dados)

      }
    } catch (error) {
      console.log(error.message);
    }
    finally {
      setLoading(false)
    }

  }

  function handleDesconectar() {
    try {
      localStorage.setItem('emailUsuario', null);
      navigate('/');
    }
    catch (error) {
      console.error("Erro na requisição:", error);
    }
    finally {
      setLoading(false)
    };
    console.log("apagando");
  }

  async function handleValidarAgendamento(email) {
    setLoading(true)
    try {
      const response = await Axios.post("https://www.dcc.ufrrj.br/filaruservicos/cancelarAgendamento", {
        email: email
      }).then((response) => {
        console.log(response.data);
      })
      console.log("apagando agendamento")
      setNomeUsuario("");

    }
    catch (error) {
      console.error("Erro na requisição:", error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div id="box-visualizar-senha">
        <img id="iconAgend" src={Iconagend} alt="IconeAgendamento"></img>
        <div id="title" className="titulo-agendamento">Agendamento</div>

        {/* informacoes do agendamento */}
        <div id="informacoes">
          <p className="text" id="aviso-qrcode">Scanneie o QrCode com sua câmera do celular</p>
          <div id="info-aluno" >

            {nomeUsuario && nomeUsuario.length > 0
              ? < div >
                <div className="info">
                  <div className="text">Nome: </div>
                  <div className="textLight">
                    <img id="iconUser" src={IconUser} alt="IconeUsuario"></img>
                    {/* <div className="infoUser"> {nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1).split(" ")[0].toLowerCase()} {nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1][0].toUpperCase() + nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1].substring(1).toLowerCase()} </div> */}
                    <div className="infoUser">
                      {nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1).split(" ")[0].toLowerCase() + " " +
                        nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1][0].toUpperCase() +
                        nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1].substring(1).toLowerCase()}
                    </div>
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

                  {nomeUsuario && nomeUsuario.length > 0
                    && agendamentoAtivo && agendamentoAtivo === true
                    ?
                    <p className="lowText">
                      <strong className="bold">Agendamento Válido</strong>
                    </p>
                    : <p className="lowText">
                      <strong className="bold texto-vermelho">Agendamento Inválido</strong>
                    </p>}
                </div>
              </div>
              : <div></div>}


          </div>



          {/* <button className="botao-navegacao verde agendamento" onClick={handleLerQrCode}>
            Ler Qr Code
          </button> */}
          {nomeUsuario && nomeUsuario.length > 0
            ? agendamentoAtivo && agendamentoAtivo === true
              ? <button onClick={() => handleValidarAgendamento(email)} className="botao-navegacao verde agendamento">Validar agendamento</button>
              : <button onClick={() => handleValidarAgendamento(email)} className="botao-navegacao vermelho agendamento">Cancelar agendamento</button>
            : <button
              className="botao-navegacao vermelho agendamento"
              onClick={() => handleDesconectar()}
            >
              Desconectar
            </button>}

        </div>
        <p className="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div >

      {loading && <div className="loading"> <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop></div>
      } {/* Mostra o carregamento */}
    </>
  );
}
export default LerQrCode;

let agora = new Date();
export let horaAtual = agora.getHours();
let minutoAtual = agora.getMinutes();
export let horaMinutoAtual = horaAtual.toString().padStart(2, '0') + minutoAtual.toString().padStart(2, '0');