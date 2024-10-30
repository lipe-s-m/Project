import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./AgendarHorario.css";
import Modal from "./Modal";
import Axios from "axios";

function AgendarHorario() {
  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();
  const { ativo } = useParams();
  const { setAtivo } = useParams();

  // Valor inicial da lotação, pode ser alterado conforme necessário
  const [lotacaoBotao1, setLotacaoBotao1] = useState(null);
  const [lotacaoBotao2, setLotacaoBotao2] = useState(null);
  const [lotacaoBotao3, setLotacaoBotao3] = useState(null);
  const [lotacaoBotao4, setLotacaoBotao4] = useState(null);
  const [lotacaoBotao5, setLotacaoBotao5] = useState(null);
  const [lotacaoBotao6, setLotacaoBotao6] = useState(null);
  const [lotacaoBotao7, setLotacaoBotao7] = useState(null);
  const [lotacaoBotao8, setLotacaoBotao8] = useState(null);
  const [lotacaoBotao9, setLotacaoBotao9] = useState(null);
  const [lotacaoBotao10, setLotacaoBotao10] = useState(null);
  const [lotacaoBotao11, setLotacaoBotao11] = useState(null);
  const [lotacaoBotao12, setLotacaoBotao12] = useState(null);
  const [lotacaoBotao13, setLotacaoBotao13] = useState(null);
  const [lotacaoBotao14, setLotacaoBotao14] = useState(null);
  const [lotacaoBotao15, setLotacaoBotao15] = useState(null);
  const [lotacaoBotao16, setLotacaoBotao16] = useState(null);
  const [lotacaoBotao17, setLotacaoBotao17] = useState(null);
  const [lotacaoBotao18, setLotacaoBotao18] = useState(null);
  const [lotacaoBotao19, setLotacaoBotao19] = useState(null);
  const [lotacaoBotao20, setLotacaoBotao20] = useState(null);


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
  const [openModal1700, setOpenModal1700] = useState(false);
  const [openModal1710, setOpenModal1710] = useState(false);
  const [openModal1720, setOpenModal1720] = useState(false);
  const [openModal1730, setOpenModal1730] = useState(false);
  const [openModal1740, setOpenModal1740] = useState(false);
  const [openModal1750, setOpenModal1750] = useState(false);
  const [openModal1800, setOpenModal1800] = useState(false);
  const [openModal1810, setOpenModal1810] = useState(false);
  const [openModal1820, setOpenModal1820] = useState(false);
  const [openModal1830, setOpenModal1830] = useState(false);
  //obter as lotacoes
  useEffect(() => {
    obterLotacao1140();
    obterLotacao1150();
    obterLotacao1200();
    obterLotacao1210();
    obterLotacao1220();
    obterLotacao1230();
    obterLotacao1240();
    obterLotacao1250();
    obterLotacao1300();
    obterLotacao1310();
    obterLotacao1700();
    obterLotacao1710();
    obterLotacao1720();
    obterLotacao1730();
    obterLotacao1740();
    obterLotacao1750();
    obterLotacao1800();
    obterLotacao1810();
    obterLotacao1820();
    obterLotacao1830();
  }, []);
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

  const agora = new Date();
  const horaAtual = agora.getHours();
  const navigate = useNavigate();



  //obter lotacao
  const obterLotacao1140 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "11:40" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao1(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1150 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "11:50" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao5(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1200 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:00" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao2(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1210 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:10" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao6(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  ///obter lotacao
  const obterLotacao1220 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:20" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao3(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1230 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:30" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao7(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1240 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:40" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao4(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1250 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "12:50" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao8(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1300 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "13:00" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao9(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1310 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "13:10" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao10(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1700 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:00" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao11(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1710 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:10" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao15(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1720 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:20" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao12(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1730 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:30" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao16(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  ///obter lotacao
  const obterLotacao1740 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:40" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao13(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };
  //obter lotacao
  const obterLotacao1750 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "17:50" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao17(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1800 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "18:00" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao14(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1810 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "18:10" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao18(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1820 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "18:20" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao19(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };

  //obter lotacao
  const obterLotacao1830 = () => {
    Axios.get("https://www.dcc.ufrrj.br/filaruservicos//contarVagas", {
      params: { horario: "18:30" }, // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        setLotacaoBotao20(response.data.count);
      })
      .catch((error) => {
        console.log("erro na requisicao: ", error);
      });
  };


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
      <Modal

        hora={"17:00"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao11}
        setLotacaoBotao={setLotacaoBotao1}
        isOpen={openModal1700}
        setModalOpen={() => setOpenModal1700(!openModal1700)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"17:10"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao15}
        setLotacaoBotao={setLotacaoBotao5}
        isOpen={openModal1710}
        setModalOpen={() => setOpenModal1710(!openModal1710)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"17:20"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao12}
        setLotacaoBotao={setLotacaoBotao2}
        isOpen={openModal1720}
        setModalOpen={() => setOpenModal1720(!openModal1720)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"17:30"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao16}
        setLotacaoBotao={setLotacaoBotao6}
        isOpen={openModal1730}
        setModalOpen={() => setOpenModal1730(!openModal1730)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"17:40"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao13}
        setLotacaoBotao={setLotacaoBotao3}
        isOpen={openModal1740}
        setModalOpen={() => setOpenModal1740(!openModal1740)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"17:50"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao17}
        setLotacaoBotao={setLotacaoBotao7}
        isOpen={openModal1750}
        setModalOpen={() => setOpenModal1750(!openModal1750)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"18:00"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao14}
        setLotacaoBotao={setLotacaoBotao4}
        isOpen={openModal1800}
        setModalOpen={() => setOpenModal1800(!openModal1800)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"18:10"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao18}
        setLotacaoBotao={setLotacaoBotao8}
        isOpen={openModal1810}
        setModalOpen={() => setOpenModal1810(!openModal1810)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"18:20"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao19}
        setLotacaoBotao={setLotacaoBotao9}
        isOpen={openModal1820}
        setModalOpen={() => setOpenModal1820(!openModal1820)}
      >
        {/* children*/}
      </Modal>
      <Modal
        hora={"18:30"}
        nomeUsuario={nomeUsuario}
        emailUsuario={emailUsuario}
        integer={lotacaoBotao20}
        setLotacaoBotao={setLotacaoBotao10}
        isOpen={openModal1830}
        setModalOpen={() => setOpenModal1830(!openModal1830)}
      >
        {/* children*/}
      </Modal>
      {/* Se esta no turno do almoço */}
      {horaAtual < 20 && (
        <div id="box-agendar">
          {/* titulo da pagina */}
          
            <h3 id="title">
              Agendar Horário
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
          

          {/* Cardapio */}
          {/* Rodapé */}
          <button className="botao-navegacao verde" onClick={(event) => navigate(`/CardapioAluno/${nomeUsuario}/${emailUsuario}`)}>
            Ver Cardápio
          </button>

          <button className="botao-navegacao vermelho" onClick={(e) => navigate(`/`)}>
            Desconectar
          </button>

          <p className="lowText">
            Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
          </p>
        </div>
      )}
      {/* Se esta no turno do almoço */}
      {horaAtual >= 20 && (
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
                  className={`button ${definirCorBotao(lotacaoBotao11)}`}
                  onClick={() => setOpenModal1700(true)}
                >
                  17:00
                </button>

                <button
                  className={`button ${definirCorBotao(lotacaoBotao12)}`}
                  onClick={() => setOpenModal1720(true)}
                >
                  17:20
                </button>

                <button
                  className={`button ${definirCorBotao(lotacaoBotao13)}`}
                  onClick={() => setOpenModal1740(true)}
                >
                  17:40
                </button>

                <button
                  className={`button ${definirCorBotao(lotacaoBotao14)}`}
                  onClick={() => setOpenModal1800(true)}
                >
                  18:00
                </button>

                <button
                  className={`button ${definirCorBotao(lotacaoBotao20)}`}
                  onClick={() => setOpenModal1820(true)}
                >
                  18:20
                </button>
              </div>
              <div className="coluna">
                <button
                  className={`button ${definirCorBotao(lotacaoBotao15)}`}
                  onClick={() => setOpenModal1710(true)}
                >
                  17:10
                </button>
                <button
                  className={`button ${definirCorBotao(lotacaoBotao16)}`}
                  onClick={() => setOpenModal1730(true)}
                >
                  17:30
                </button>
                <button
                  className={`button ${definirCorBotao(lotacaoBotao17)}`}
                  onClick={() => setOpenModal1750(true)}
                >
                  17:50
                </button>
                <button
                  className={`button ${definirCorBotao(lotacaoBotao18)}`}
                  onClick={() => setOpenModal1810(true)}
                >
                  18:10
                </button>
                <button
                  className={`button ${definirCorBotao(lotacaoBotao19)}`}
                  onClick={() => setOpenModal1830(true)}
                >
                  18:30
                </button>
              </div>
            </div>
          </div>

          {/* Cardapio */}
          {/* Rodapé */}
          <button id="cardapio" onClick={(event) => navigate(`/CardapioAluno/${nomeUsuario}/${emailUsuario}`)}>
            Ver Cardápio
          </button>

          <button id="botao-desconectar" onClick={(e) => navigate(`/`)}>
            Desconectar
          </button>

          <p id="lowText">
            Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
          </p>
        </div>
      )}

    </>
  );
}

export default AgendarHorario;
