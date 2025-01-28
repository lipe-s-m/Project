import { useNavigate, useParams } from "react-router-dom";
import "./CardapioAluno.css";
import { useState } from "react";
import Axios from "axios";
import ModalCardapioAluno from "./ModalCardapioAluno";

function CardapioAlunoAtivo() {
  const [principal, setPrincipal] = useState("");
  const [opcao, setOpcao] = useState("");
  const [vegetariana, setVegetariana] = useState("");
  const [acompanhamento, setAcompanhamentos] = useState("");
  const [guarnicao, setGuarnicao] = useState("");
  const [salada, setSalada] = useState("");
  const [sobremesa, setSobremesa] = useState("");
  const [data, setData] = useState("");
  const [turno, setTurno] = useState("");

  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();
  const { hora } = useParams();
  const { senha } = useParams();
  const hash = localStorage.getItem('hashUser');


  const [openModal, setOpenModal] = useState(false);

  const handleChangeData = (valor) => {
    setData(valor);
  };

  const handleChangeTurno = (valor) => {
    setTurno(valor);
  };

  const navigate = useNavigate();

  const voltarLoginPage = () => {
    navigate(`/AgendarHorarioAtivo/${hash}/${nomeUsuario}/${emailUsuario}/${hora}/${senha}`);
  };

  const handleChangeVisualizar = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//obterCardapio", {
      params: { data: data, turno: turno },
    })
      .then((response) => {
        const cardapio = response.data;
        setPrincipal(cardapio.principal);
        setOpcao(cardapio.opcao);
        setVegetariana(cardapio.vegetariana);
        setAcompanhamentos(cardapio.acompanhamentos);
        setGuarnicao(cardapio.guarnicao);
        setSalada(cardapio.salada);
        setSobremesa(cardapio.sobremesa);
        setOpenModal(!openModal);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alert("O Cardápio desse dia ainda não foi feito");
      });
  };

  return (
    <>
      {/* chamar os pop ups de cada botao */}
      <ModalCardapioAluno
        principal={principal}
        opcao={opcao}
        vegetariana={vegetariana}
        acompanhamento={acompanhamento}
        guarnicao={guarnicao}
        salada={salada}
        sobremesa={sobremesa}
        data={data}
        turno={turno}
        setTurno={setTurno}
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
      ></ModalCardapioAluno>

      <div id="CAIXA_PRINCIPAL">
        <div id="IMAGEM_CARDAPIO"></div>
        <div id="title">Cardápio</div>
        <div id="TEXTO_BANDEJAO">Bandejão</div>

        <div id="data">Data</div>
        <div>
          {" "}
          <label htmlFor="date">
            <input
              type="date"
              value={data}
              onChange={(e) => handleChangeData(e.target.value)}
              placeholder="Insira a Data aqui..."
            />
          </label>
        </div>

        <hr id="hr"></hr>

        <div id="data">Turno</div>

        <div id="select-turno">
          {" "}
          <div id="date" >
            <label htmlFor="turn">
              <select
                value={turno}
                onChange={(e) => handleChangeTurno(e.target.value)}
              >

                <option value="">Selecione um Turno</option>
                <option value="Almoco">Almoço</option>
                <option value="Janta">Janta</option>
              </select>{" "}
            </label>
          </div>

        </div>

        <hr id="hr"></hr>


        <button className="botao-navegacao verde" onClick={handleChangeVisualizar}>
          Visualizar
        </button>

        <button className="botao-navegacao vermelho" onClick={voltarLoginPage}>
          Voltar
        </button>
        <div className="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </div>
      </div>
    </>
  );
}
export default CardapioAlunoAtivo;
