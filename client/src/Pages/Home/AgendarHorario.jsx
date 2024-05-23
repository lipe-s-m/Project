import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./AgendarHorario.css";
import Axios from "axios";
import Modal from "./Modal";

function AgendarHorario() {
  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();

  // Valor inicial da lotação, pode ser alterado conforme necessário
  const [lotacaoBotao1, setLotacaoBotao1] = useState(50);
  const [lotacaoBotao2, setLotacaoBotao2] = useState(47);
  const [lotacaoBotao3, setLotacaoBotao3] = useState(36);
  const [lotacaoBotao4, setLotacaoBotao4] = useState(28);
  const [lotacaoBotao5, setLotacaoBotao5] = useState(31);
  const [lotacaoBotao6, setLotacaoBotao6] = useState(35);
  const [lotacaoBotao7, setLotacaoBotao7] = useState(12);
  const [lotacaoBotao8, setLotacaoBotao8] = useState(17);
  const [lotacaoBotao9, setLotacaoBotao9] = useState(5);
  const [lotacaoBotao10, setLotacaoBotao10] = useState(1);

  //alterar valor lotacao dos popups
  const [openModal1140, setOpenModal1140] = useState(false);
  const [openModal1150, setOpenModal1150] = useState(false);
  const [openModal1200, setOpenModal1200] = useState(false);
  const [openModal1210, setOpenModal1210] = useState(false);
  const [openModal1220, setOpenModal1220] = useState(false);
  const [openModal1230, setOpenModal1230] = useState(false);
  const [openModal1240, setOpenModal1240] = useState(false);
  const [openModal1250, setOpenModal1250] = useState(false);
  const [openModal1300, setOpenModal1300] = useState(false);
  const [openModal1310, setOpenModal1310] = useState(false);

  //define cor do botao conforme lotacao
  function definirCorBotao(lotacao) {
    if (lotacao >= 0 && lotacao < 10) {
      return "button-green";
    } else if (lotacao >= 10 && lotacao < 20) {
      return "button-green-light";
    } else if (lotacao >= 20 && lotacao < 30) {
      return "button-yellow";
    } else if (lotacao >= 30 && lotacao < 40) {
      return "button-orange";
    } else if (lotacao >= 40 && lotacao < 50) {
      return "button-red-light";
    } else if (lotacao === 50) {
      return "button-red-strong";
    }
  }

  return (
    <>
      {/* chamar os pop ups de cada botao */}
      <Modal
        hora={"11:40"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao1}
        setLotacaoBotao={setLotacaoBotao1}
        isOpen={openModal1140}
        setModalOpen={() => setOpenModal1140(!openModal1140)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"11:50"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao5}
        setLotacaoBotao={setLotacaoBotao5}
        isOpen={openModal1150}
        setModalOpen={() => setOpenModal1150(!openModal1150)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:00"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao2}
        setLotacaoBotao={setLotacaoBotao2}
        isOpen={openModal1200}
        setModalOpen={() => setOpenModal1200(!openModal1200)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:10"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao6}
        setLotacaoBotao={setLotacaoBotao6}
        isOpen={openModal1210}
        setModalOpen={() => setOpenModal1210(!openModal1210)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:20"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao3}
        setLotacaoBotao={setLotacaoBotao3}
        isOpen={openModal1220}
        setModalOpen={() => setOpenModal1220(!openModal1220)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:30"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao7}
        setLotacaoBotao={setLotacaoBotao7}
        isOpen={openModal1230}
        setModalOpen={() => setOpenModal1230(!openModal1230)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:40"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao4}
        setLotacaoBotao={setLotacaoBotao4}
        isOpen={openModal1240}
        setModalOpen={() => setOpenModal1240(!openModal1240)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"12:50"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao8}
        setLotacaoBotao={setLotacaoBotao8}
        isOpen={openModal1250}
        setModalOpen={() => setOpenModal1250(!openModal1250)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"13:00"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao10}
        setLotacaoBotao={setLotacaoBotao10}
        isOpen={openModal1300}
        setModalOpen={() => setOpenModal1300(!openModal1300)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"13:10"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao9}
        setLotacaoBotao={setLotacaoBotao9}
        isOpen={openModal1310}
        setModalOpen={() => setOpenModal1310(!openModal1310)}
      >
        {/* children*/}
      </Modal>
      {/* corpo do html */}
      <div id="registro">
        {/* titulo da pagina */}
        <div>
          <h3>
            <div id="title">Agendar Horário</div>
          </h3>

          {/* mostrar botoes */}
          <div id="botoes">
            <div className="coluna">
              <button
                className={`button ${definirCorBotao(lotacaoBotao1)}`}
                onClick={() => setOpenModal1140(true)}
              >
                11:40
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao2)}`}
                onClick={() => setOpenModal1200(true)}
              >
                12:00
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao3)}`}
                onClick={() => setOpenModal1220(true)}
              >
                12:20
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao4)}`}
                onClick={() => setOpenModal1240(true)}
              >
                12:40
              </button>

              <button
                className={`button ${definirCorBotao(lotacaoBotao10)}`}
                onClick={() => setOpenModal1300(true)}
              >
                13:00
              </button>
            </div>
            <div className="coluna">
              <button
                className={`button ${definirCorBotao(lotacaoBotao5)}`}
                onClick={() => setOpenModal1150(true)}
              >
                11:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao6)}`}
                onClick={() => setOpenModal1210(true)}
              >
                12:10
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao7)}`}
                onClick={() => setOpenModal1230(true)}
              >
                12:30
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao8)}`}
                onClick={() => setOpenModal1250(true)}
              >
                12:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao9)}`}
                onClick={() => setOpenModal1310(true)}
              >
                13:10
              </button>
            </div>
          </div>
        </div>

        {/* Cardapio */}
        {/* Rodapé */}
        <button id="cardapio">Ver Cardápio</button>

        <p id="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
      {/* verifica parametros */}
      {console.log("email: %s \n nome: %s", emailUsuario, nomeUsuario)};
    </>
  );
}

export default AgendarHorario;
