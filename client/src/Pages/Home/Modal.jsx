import "./Modal.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Podal({
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
    if(integer < 50){

        setLotacaoBotao((prevLotacao) => prevLotacao + 1);
        console.log("cheguei na funcao");
        //pega data atual
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
        console.log(integer);
        const senha = integer + 1;
        
        //agendando no banco
        Axios.post("http://localhost:3001/agendar", {
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
        
    }
    else{
        console.log("Lotação maxima ")
    }
        setModalOpen();
  };

  if (isOpen) {
    return (
      <div id="BACKGROUND_id">
        <div id="MODAL_id">
          <button id="BLOCO_CANCELAR" onClick={setModalOpen}>
            Cancelar
          </button>

          <button id="BLOCO_CONFIRMAR" onClick={handleIncreaseLotacaoBotao}>
            Confirmar
            {setModalOpen}
          </button>

          <div id="CONTEUDO_MODAL">
            {children}
            {integer}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
