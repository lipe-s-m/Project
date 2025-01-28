import "./ModalAtivo.css";

import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function ModalAtivo({
  hora,
  nomeUsuario,
  emailUsuario,
  integer,
  setLotacaoBotao,
  isOpen,
  setModalOpen,
  children,
}) {
  const navigate = useNavigate();
  const [horaMinutoAtual, setHoraMinutoAtual] = useState(0);
  const [loading, setLoading] = useState(null);


  // eslint-disable-next-line
  useEffect(() => {
    let agora = new Date();
    let horaAtual = agora.getHours();
    let minutoAtual = agora.getMinutes();
    let horaMinAtual = horaAtual.toString().padStart(2, '0') + minutoAtual.toString().padStart(2, '0');
    setHoraMinutoAtual(horaMinAtual)
    if (isOpen) {
      obterLotacao();
    }
  }, [isOpen]);

  //obter lotacao
  const obterLotacao = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: hora } // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        console.log(response.data); // Mostrar a resposta do servidor
        setLotacaoBotao(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error)
      })
  }

  async function handleIncreaseLotacaoBotao() {
    if (integer < 50) {
      setLoading(true);
      setLotacaoBotao((prevLotacao) => prevLotacao + 1);
      //pega data atual
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(integer);
      const senha = integer + 1;

      //agendando no banco
      await Axios.post("https://www.dcc.ufrrj.br/filaruservicos//trocarAgendamento", {
        senha: integer + 1,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          const hash = response.data.hash;
          navigate(
            `/VisualizarSenha/${hash}/${nomeUsuario}/${emailUsuario}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        }).finally(() => {
          setLoading(false)
        });
    } else {
      console.log("Lotação maxima ");
    }
    setModalOpen();
  };

  const horaMinutoModal = +hora.replace(":", "");
  if (isOpen) {
    if (horaMinutoAtual > horaMinutoModal + 9) {
      return (
        <div id="BACKGROUND_id">
          {loading && <div className="loading"> <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop></div>} {/* Mostra o carregamento */}
          <div id="MODAL_id">
            <div id="TITULO_INDISPONIVEL">Indisponível</div>
            <div id="CONTEUDO_MODAL">

              <p id="IMAGEM_INDISPONIVEL"></p>
              <p id="desc-fora-horario">Fora de Horário</p>
              {/* <p id="PESSOAS_MODAL">mod: {horaMinutoModal + 9} atu: {horaMinutoAtual}</p> */}

              <hr></hr>
            </div>
            <button id="BLOCO_CANCELAR" onClick={setModalOpen}>Voltar</button>
          </div>
        </div>

      )
    }

    else if (integer < 50) {
      return (
        <>
          <div id="BACKGROUND_id">
            {loading && <div className="loading"> <Backdrop
              sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop></div>} {/* Mostra o carregamento */}
            <div id="MODAL_id">
              <div id="CONTEUDO_MODAL">
                <h3 id="TITULO_DISPONIVEL" className="ativo">Atenção</h3>
                <p id="IMAGEM_INDISPONIVEL" className="imagem-ativo"></p>

                <p id="IMAGEM"></p>
                <p id="VAGAS_MODAL">Vagas Preenchidas / Total</p>
                <p id="PESSOAS_MODAL"><p id="IMAGEM_USUARIO"></p>{integer} / 50</p>
                <p id="aviso-modal">Você já possui um outro agendamento, deseja trocá-lo por este?</p>
                <hr></hr>
              </div>
              <button id="BLOCO_CONFIRMAR" onClick={handleIncreaseLotacaoBotao}>
                Trocar Agendamento
              </button>
              <button id="BLOCO_CANCELAR" onClick={setModalOpen}>
                Voltar
              </button>
            </div>
          </div>
        </>
      );
    }
    else {
      return (
        <div id="BACKGROUND_id">
          {loading && <div className="loading"> <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop></div>} {/* Mostra o carregamento */}
          <div id="MODAL_id">
            <div id="TITULO_INDISPONIVEL">Indisponível</div>
            <div id="CONTEUDO_MODAL">

              <p id="IMAGEM_INDISPONIVEL"></p>
              <p id="VAGAS_MODAL">Vagas Preenchidas / Total</p>
              <p id="PESSOAS_MODAL"><p id="IMAGEM_USUARIO"></p>{integer} / 50</p>

              <hr></hr>
            </div>
            <button id="BLOCO_CANCELAR" onClick={setModalOpen}>Voltar</button>
          </div>
        </div>
      )
    }
  }
  return null;
}
