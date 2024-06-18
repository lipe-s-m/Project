import { useNavigate } from "react-router-dom";
import "./CardapioAdmin.css";
import { useState } from "react";
function CardapioAdmin() {
  const navigate = useNavigate();

  const voltarLoginPage = () => {
    navigate(`/`);
  };

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
  return (
    <>
      <div id="CAIXA_PRINCIPAL">
        <div id="IMAGEM_CARDAPIO"></div>
        <div id="TEXTO_CARDAPIO">Cardápio</div>
        <div id="TEXTO_BANDEJAO">Bandejão</div>

        <form>
          <div id="OPCAO_PRINCIPAL">Prato Principal</div>
          <div id="IMAGEM_GARFO_FACA"></div>
          <div id="RESPOSTA_PRINCIPAL">
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

          <div id="LINHA_PRINCIPAL_OPCAO">
            _________________________________________________________________
          </div>

          <div id="OPCAO_SECUNDARIA">Opção</div>
          <div id="RESPOSTA_SECUNDARIA">
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
          <div id="LINHA_SECUNDARIA_OPCAO">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_OPCAO"></div>

          <div id="OPCAO_VEGETARIANA">Opção Vegetariana</div>
          <div id="RESPOSTA_VEGETARIANA">
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
          <div id="LINHA_VEGETARIANA_OPCAO">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_VEGETARIANA"></div>

          <div id="ACOMPANHAMENTOS">Acompanhamentos</div>
          <div id="RESPOSTA_ACOMPANHAMENTOS">
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
          <div id="LINHA_ACOMPANHAMENTOS_OPCAO">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_ACOMPANHAMENTOS"></div>

          <div id="GUARNICAO">Guarnição</div>
          <div id="RESPOSTA_GUARNICOES">
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
          <div id="LINHA_GUARNICAO">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_GUARNICAO"></div>

          <div id="SALADA">Salada</div>
          <div id="RESPOSTA_SALADA">
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
          <div id="LINHA_SALADA">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_SALADA"></div>

          <div id="SOBREMESA">Sobremesa</div>
          <div id="RESPOSTA_SOBREMESA">
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
          <div id="LINHA_SOBREMESA">
            _________________________________________________________________
          </div>
          <div id="IMAGEM_SOBREMESA"></div>
        </form>

        {/* Enviar Cardapio */}
        <button id="botao-enviar" onClick={voltarLoginPage}>
          Enviar
        </button>

        {/* voltar ao LoginPage */}
        <button id="botao-voltar" onClick={voltarLoginPage}>
          Voltar
        </button>

        {/* creditos */}
        <div id="BLOCO_CREDITOS">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </div>
      </div>
    </>
  );
}
export default CardapioAdmin;
