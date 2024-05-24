import "./ModalAtivo.css";

import Axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const handleIncreaseLotacaoBotao = () => {
    if (integer < 50) {
      setLotacaoBotao((prevLotacao) => prevLotacao + 1);
      //pega data atual
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(integer);
      const senha = integer + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/trocarAgendamento", {
        senha: integer + 1,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    } else {
      console.log("Lotação maxima ");
    }
    setModalOpen();
  };

  if (isOpen) {
    if(integer < 50){
    return (
      <>

        <div id="BACKGROUND_id">
          <div id="MODAL_id_ATIVO">
            <button id="BLOCO_CANCELAR_ATIVO" onClick={setModalOpen}>
              Voltar
            </button>

            <button id="BLOCO_CONFIRMAR_ATIVO" onClick={handleIncreaseLotacaoBotao}>
              Trocar Agendamento
            </button>

            <div id="CONTEUDO_MODAL">
              <p id="TITULO_ATIVO">Atenção</p>

              <p id="IMAGEM_ATIVO"></p>

              <p id="VAGAS_MODAL_ATIVO">Vagas Preenchidas / Total</p>

              <p id="IMAGEM_USUARIO_ATIVO"></p>

              <p id="PESSOAS_MODAL_ATIVO">{integer} / 50</p>
              <p id="AVISO_MODAL_ATIVO">Você já possui um outro agendamento, deseja trocá-lo por este?</p>

              <p id="LINHA_MODAL_ATIVO">
                ________________________________________________
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
    return(

      <div id="BACKGROUND_id">

          <div id="BLOCO_INDISPONÍVEL">

          <button id = "BLOCO_VOLTAR" onClick={setModalOpen}>Voltar</button>

          <div id = "CONTEUDO_MODAL">

              <p id = "TITULO_INDISPONIVEL">Indisponível</p>

              <p id = "IMAGEM_INDISPONIVEL"></p>

              <p id = "VAGAS_INDISPONIVEL">Vagas Preenchidas / Total</p>
              
              <p id = "PESSOAS_INDISPONIVEL">{integer} / 50</p>

              <p id = "PESSOAS_IMAG_INDISPONIVEL"></p>

              <p id = "LINHA_INDISPONIVEL">________________________________________________</p>

          </div>

          </div>

      </div>
  )
  }
}
  return null;
}
