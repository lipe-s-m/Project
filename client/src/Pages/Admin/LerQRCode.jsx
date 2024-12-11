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
    setLoading(true)

    handleLerQrCode()

  }, [])

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
        setIdHash(idhash)
        setNomeUsuario(nome)
        setEmail(email)
        console.log(dados)

      }
    } catch (error) {
      console.log(error.message);
    }
    finally {
      if (horaMinutoAtual > hora + 10) {
        console.log("Seu agendamento passou da hora, não é mais válido")
        setAgendamentoAtivo(false)
      }
      else {
        console.log("Seu agendamento está no horario, é válido")
        setAgendamentoAtivo(true)
      }
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
      const response = await axios.post("https://www.dcc.ufrrj.br/filaruservicos/verificarAgendamentoHash", {
        params: { email: email }
      });
      const data = response.data;
      console.log(data)
      console.log("apagando agendamento")

    }
    catch (err) {
      console.log(err)
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

            <div className="info">

              <div className="text">Nome: </div>
              <div className="textLight">
                <img id="iconUser" src={IconUser} alt="IconeUsuario"></img>
                {/* <div className="infoUser"> {nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1).split(" ")[0].toLowerCase()} {nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1][0].toUpperCase() + nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1].substring(1).toLowerCase()} </div> */}
                <div className="infoUser">
                  {nomeUsuario && nomeUsuario.length > 0
                    ? nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1).split(" ")[0].toLowerCase() + " " +
                    nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1][0].toUpperCase() +
                    nomeUsuario.split(" ")[nomeUsuario.split(" ").length - 1].substring(1).toLowerCase()
                    : "Nome não disponível"}
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
            </div>
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

const agora = new Date();
export const horaAtual = agora.getHours();
const minutoAtual = agora.getMinutes();
export const horaMinutoAtual = horaAtual.toString().padStart(2, '0') + minutoAtual.toString().padStart(2, '0');