import { useNavigate } from "react-router-dom";
import "./CardapioAdmin.css";
import { useState } from "react";
import Axios from "axios";
function CardapioAdmin() {
  const navigate = useNavigate();

  const [principal, setPrincipal] = useState("");
  const [opcao, setOpcao] = useState("");
  const [vegetariana, setVegetariana] = useState("");
  const [acompanhamento, setAcompanhamentos] = useState("");
  const [guarnicao, setGuarnicao] = useState("");
  const [salada, setSalada] = useState("");
  const [sobremesa, setSobremesa] = useState("");
  const [data, setData] = useState("");
  const [turno, setTurno] = useState("");


  const handleChangePrincipal = (valor) => {
    setPrincipal(valor);
  };
  const handleChangeOpcao = (valor) => {
    setOpcao(valor);
  };
  const handleChangeVegetariana = (valor) => {
    setVegetariana(valor);
  };
  const handleChangeAcompanhamento = (valor) => {
    setAcompanhamentos(valor);
  };
  const handleChangeGuarnicao = (valor) => {
    setGuarnicao(valor);
  };
  const handleChangeSalada = (valor) => {
    setSalada(valor);
  };
  const handleChangeSobremesa = (valor) => {
    setSobremesa(valor);
  };
  const handleChangeData = (valor) => {
    setData(valor);
  };

  const handleChangeTurno = (valor) => {
    setTurno(valor);
  };

  const voltarLoginPage = () => {
    navigate(`/`);
  };

  const handleChangeEnviar = (event) => {
    if (
      data.length > 0 &&
      turno.length > 0 &&
      principal.length > 0 &&
      acompanhamento.length > 0
    ) {
      alert(
        `Refeição do dia ${data}: \n${turno} \n${principal} \n${opcao} \n${vegetariana} \n${acompanhamento} \n${guarnicao} \n${salada} \n${sobremesa}`
      );
      Axios.post("https://www.dcc.ufrrj.br/filaruservicos//criarCardapio", {
        principal: principal,
        opcao: opcao,
        vegetariana: vegetariana,
        acompanhamentos: acompanhamento,
        guarnicao: guarnicao,
        salada: salada,
        sobremesa: sobremesa,
        data: data,
        turno: turno,
      })
        .then((response) => {
          console.log(response.data); // Mostrar a resposta do servidor
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
    }
    else alert("Preencha todos os campos Obrigatórios *");
  };

  return (
    <>
      <div className="box-agendar cardapio-admin">
        <div id="IMAGEM_CARDAPIO"></div>
        <div id="TEXTO_CARDAPIO">Cardápio</div>
        <div id="TEXTO_BANDEJAO">Bandejão</div>

        <form>
          <p>Data *</p>
          <div id="RESPOSTA_DATA">
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


          <p>Turno *</p>
          <div id="resposta-turno">
            
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
            {/* {" "} */}
            {/* <div id="imagem-data"></div> */}
          </div>


          <p>Prato Principal *</p>
          {/* <div id="IMAGEM_GARFO_FACA"></div> */}
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="principal">
              <input
                type="text"
                id="principal"
                value={principal}
                onChange={(e) => handleChangePrincipal(e.target.value)}
                placeholder="Insira o Prato Principal aqui..."
              />
            </label>
          </div>


          <p>Opção</p>
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="opcao">
              <input
                type="text"
                id="opcao"
                value={opcao}
                onChange={(e) => handleChangeOpcao(e.target.value)}
                placeholder="Insira a Opção Secundaria aqui..."
              />
            </label>
          </div>

          {/* <div id="IMAGEM_OPCAO"></div> */}

          <p>Opção Vegetariana</p>

          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="vegetariana">
              <input
                type="text"
                id="vegetariana"
                value={vegetariana}
                onChange={(e) => handleChangeVegetariana(e.target.value)}
                placeholder="Insira a Opção Vegetariana aqui..."
              />
            </label>
          </div>


          {/* <div id="IMAGEM_VEGETARIANA"></div> */}

 <p>Guarnição</p>
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="guarnicao">
              <input
                type="text"
                id="guarnicao"
                value={guarnicao}
                onChange={(e) => handleChangeGuarnicao(e.target.value)}
                placeholder="Insira a Guarnição aqui..."
              />
            </label>
          </div>

 {/* <div id="IMAGEM_ACOMPANHAMENTOS"></div> */}
          <p>Acompanhamentos</p>
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="acompanhamento">
              <input
                type="text"
                id="acompanhamento"
                value={acompanhamento}
                onChange={(e) => handleChangeAcompanhamento(e.target.value)}
                placeholder="Insira o Acompanhamento aqui..."
              />
            </label>
          </div>

          {/* <div id="IMAGEM_GUARNICAO"></div> */}
          <p>Salada</p>
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="salada">
              <input
                type="text"
                id="salada"
                value={salada}
                onChange={(e) => handleChangeSalada(e.target.value)}
                placeholder="Insira a Salada aqui..."
              />
            </label>
          </div>


          {/* <div id="IMAGEM_SALADA"></div> */}
          <p>Sobremesa</p>
          <div id="resposta-input-admin">
            {" "}
            <label htmlFor="sobremesa">
              <input
                type="text"
                id="sobremesa"
                value={sobremesa}
                onChange={(e) => handleChangeSobremesa(e.target.value)}
                placeholder="Insira a Sobremesa aqui..."
              />
            </label>
          </div>


          {/* <div id="IMAGEM_SOBREMESA"></div> */}
        </form>

        {/* Enviar Cardapio */}
        <button className="botao-navegacao verde" onClick={handleChangeEnviar}>
          Enviar
        </button>

        {/* voltar ao LoginPage */}
        <button className="botao-navegacao vermelho" onClick={voltarLoginPage}>
          Voltar
        </button>

        {/* creditos */}
        <div id="lowtext">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </div>
      </div>
    </>
  );
}
export default CardapioAdmin;
