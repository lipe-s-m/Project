import { Navigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import "./AgendarHorario.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function AgendarHorario() {
  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();
  const navigate = useNavigate();

  // Valor inicial da lotação, pode ser alterado conforme necessário
  const [lotacaoBotao1, setLotacaoBotao1] = useState(0);
  const [lotacaoBotao2, setLotacaoBotao2] = useState(0);
  const [lotacaoBotao3, setLotacaoBotao3] = useState(0);
  const [lotacaoBotao4, setLotacaoBotao4] = useState(0);
  const [lotacaoBotao5, setLotacaoBotao5] = useState(0);
  const [lotacaoBotao6, setLotacaoBotao6] = useState(0);
  const [lotacaoBotao7, setLotacaoBotao7] = useState(0);
  const [lotacaoBotao8, setLotacaoBotao8] = useState(0);
  const [lotacaoBotao9, setLotacaoBotao9] = useState(0);
  const [lotacaoBotao10, setLotacaoBotao10] = useState(0);

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

  // Manipula o aumento da lotação para o Botão 1
  const handleIncreaseLotacaoBotao1 = () => {
    if (lotacaoBotao1 < 50) {
      setLotacaoBotao1((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao1 + 1);
      //pega data atual
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "11:40";
      const senha = lotacaoBotao1 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: lotacaoBotao1 + 1,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };

  // Manipula o aumento da lotação para o Botão 2
  const handleIncreaseLotacaoBotao2 = () => {
    if (lotacaoBotao2 < 50) {
      setLotacaoBotao2((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao2 + 1);

      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "12:00";
      const senha = lotacaoBotao2 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };

  const handleIncreaseLotacaoBotao3 = () => {
    if (lotacaoBotao3 < 50) {
      setLotacaoBotao3((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao3 + 1);

      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "12:20";
      const senha = lotacaoBotao3 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };
  const handleIncreaseLotacaoBotao4 = () => {
    if (lotacaoBotao4 < 50) {
      setLotacaoBotao4((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao4 + 1);

      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "12:40";
      const senha = lotacaoBotao4 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };
  const handleIncreaseLotacaoBotao5 = () => {
    if (lotacaoBotao5 < 50) {
      setLotacaoBotao5((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao5 + 1);

      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "11:50";
      const senha = lotacaoBotao5 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };
  const handleIncreaseLotacaoBotao6 = () => {
    if (lotacaoBotao6 < 50) {
      setLotacaoBotao6((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao6 + 1);

      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "12:10";
      const senha = lotacaoBotao5 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };
  const handleIncreaseLotacaoBotao7 = () => {
    if (lotacaoBotao7 < 50) {
      setLotacaoBotao7((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao7 + 1);

       //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "12:30";
      const senha = lotacaoBotao5 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };

  const handleIncreaseLotacaoBotao8 = () => {
    if (lotacaoBotao8 < 50) {
      setLotacaoBotao8((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao8 + 1);

       //pega data atual hora  e SENHA
       const dataAtual = new Date();
       const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
       console.log(dataFormatada);
       const hora = "12:50";
       const senha = lotacaoBotao5 + 1;
 
       //agendando no banco
       Axios.post("http://localhost:3001/agendar", {
         senha: senha,
         data: dataFormatada,
         hora: hora,
         email: emailUsuario,
         ativo: true,
       })
         .then((response) => {
           console.log(response.data); // Mostrar a resposta do servidor
           navigate(
             `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
           );
         })
         .catch((error) => {
           console.error("Erro na requisição:", error);
         });
    }
  };
  const handleIncreaseLotacaoBotao9 = () => {
    if (lotacaoBotao9 < 50) {
      setLotacaoBotao9((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao9 + 1);

       //pega data atual hora  e SENHA
       const dataAtual = new Date();
       const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
       console.log(dataFormatada);
       const hora = "13:10";
       const senha = lotacaoBotao5 + 1;
 
       //agendando no banco
       Axios.post("http://localhost:3001/agendar", {
         senha: senha,
         data: dataFormatada,
         hora: hora,
         email: emailUsuario,
         ativo: true,
       })
         .then((response) => {
           console.log(response.data); // Mostrar a resposta do servidor
           navigate(
             `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
           );
         })
         .catch((error) => {
           console.error("Erro na requisição:", error);
         });
    }
  };
  const handleIncreaseLotacaoBotao10 = () => {
    if (lotacaoBotao10 < 50) {
      setLotacaoBotao10((prevLotacao) => prevLotacao + 1);
      console.log(lotacaoBotao10 + 1);
      //pega data atual hora  e SENHA
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toISOString().split("T")[0]; // Formata a data como YYYY-MM-DD
      console.log(dataFormatada);
      const hora = "13:00";
      const senha = lotacaoBotao5 + 1;

      //agendando no banco
      Axios.post("http://localhost:3001/agendar", {
        senha: senha,
        data: dataFormatada,
        hora: hora,
        email: emailUsuario,
        ativo: true,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
          navigate(
            `/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${dataAtual.toLocaleDateString}/${hora}/${senha}`
          );
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
  };

  function handleIncreaseCardapio(emailUser) {
    //apagando agendamento no banco
    Axios.post("http://localhost:3001/cancelarAgendamento", {
      email: emailUsuario,
    })
      .then((response) => {
        console.log(response.data); // Mostrar a resposta do servidor
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
    console.log("apagando");
  }

  return (
    <>
      <div id="registro">
        {/* titulo da pagina */}
        <div>
          <h3>
            <div id="title">Agendar Horário</div>
          </h3>

          <div id="botoes">
            <div className="coluna">
              <button
                className={`button ${definirCorBotao(lotacaoBotao1)}`}
                onClick={handleIncreaseLotacaoBotao1}
              >
                11:40
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao2)}`}
                onClick={handleIncreaseLotacaoBotao2}
              >
                12:00
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao3)}`}
                onClick={handleIncreaseLotacaoBotao3}
              >
                12:20
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao4)}`}
                onClick={handleIncreaseLotacaoBotao4}
              >
                12:40
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao10)}`}
                onClick={handleIncreaseLotacaoBotao10}
              >
                13:00
              </button>
            </div>
            <div className="coluna">
              <button
                className={`button ${definirCorBotao(lotacaoBotao5)}`}
                onClick={handleIncreaseLotacaoBotao5}
              >
                11:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao6)}`}
                onClick={handleIncreaseLotacaoBotao6}
              >
                12:10
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao7)}`}
                onClick={handleIncreaseLotacaoBotao7}
              >
                12:30
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao8)}`}
                onClick={handleIncreaseLotacaoBotao8}
              >
                12:50
              </button>
              <button
                className={`button ${definirCorBotao(lotacaoBotao9)}`}
                onClick={handleIncreaseLotacaoBotao9}
              >
                13:10
              </button>
            </div>
          </div>
        </div>

        {/* Cardapio */}
        {/* Rodapé */}
        <button
          id="cardapio"
          onClick={() => handleIncreaseCardapio(emailUsuario)}
        >
          Ver Cardápio
        </button>

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
