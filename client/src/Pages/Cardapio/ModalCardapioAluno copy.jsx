import { useNavigate } from "react-router-dom";
import "./CardapioAluno.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function CardapioAluno() {
  const [principal, setPrincipal] = useState("");
  const [opcao, setOpcao] = useState("");
  const [vegetariana, setVegetariana] = useState("");
  const [acompanhamento, setAcompanhamentos] = useState("");
  const [guarnicao, setGuarnicao] = useState("");
  const [salada, setSalada] = useState("");
  const [sobremesa, setSobremesa] = useState("");
  const [data, setData] = useState("");
  const [turno, setTurno] = useState("");

  const handleChangeData = (valor) => {
    setData(valor);
  };

  const handleChangeTurno = (valor) => {
    setTurno(valor);
  };
  
  const navigate = useNavigate();

  const voltarLoginPage = () => {
    navigate(`/`);
  };
  useEffect(() => {

    const date = new Date(); // Defina o ID da linha que você deseja buscar
    console.log(date) 
    Axios.get("http://localhost:3001/obterCardapio", {
      params: { data: date } // Note que o horário é passado como parâmetro
    })
      .then((response) => {
        const data = response.data;
        setPrincipal(data.principal);
        setOpcao(data.opcao);
        setVegetariana(data.vegetariana);
        setAcompanhamentos(data.acompanhamentos);
        setGuarnicao(data.guarnicao);
        setSalada(data.salada);
        setSobremesa(data.sobremesa);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  return (
    <>
      <div id="CAIXA_PRINCIPAL">
        <div id="IMAGEM_CARDAPIO"></div>
        <div id="TEXTO_CARDAPIO">Cardápio</div>
        <div id="TEXTO_BANDEJAO">Bandejão</div>

        <div id="data">Data</div>
          <div id="imagem-data"></div>
          <div id="RESPOSTA_PRINCIPAL">
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

          <div id="LINHA_PRINCIPAL_OPCAO">
            _________________________________________________________________
          </div>

          <div id="turno">Turno</div>
          <div id="imagem-data"></div>
          <div id="resposta-turno">
            {" "}
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

          <div id="LINHA_PRINCIPAL_OPCAO">
            _________________________________________________________________
          </div>

        <div id="OPCAO_PRINCIPAL">Prato Principal</div>
        <div id="IMAGEM_GARFO_FACA"></div>
        <div id="resposta_PRINCIPAL"></div>
        <div id="LINHA_PRINCIPAL">
          _________________________________________________________________
        </div>

        <div id="OPCAO_SECUNDARIA">Opção</div>
        <div id="resposta_SECUNDARIA"></div>
        <div id="LINHA_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMG_OPCAO"></div>

        <div id="OPCAO_VEGETARIANA">Opção Vegetariana</div>
        <div id="resposta_VEGETARIANA"></div>
        <div id="LINHA_VEGETARIANA_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMG_VEGETARIANA"></div>

        <div id="ACOMPANHAMENTOS">Acompanhamentos</div>
        <div id="resposta_ACOMPANHAMENTOS"></div>
        <div id="LINHA_ACOMPANHAMENTOS_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMG_ACOMPANHAMENTOS"></div>

        <div id="GUARNICAO">Guarnição</div>
        <div id="resposta_GUARNICOES"></div>
        <div id="LINHA_GUARNICAO">
          _________________________________________________________________
        </div>
        <div id="IMG_GUARNICAO"></div>

        <div id="SALADA">Salada</div>
        <div id="resposta_SALADA"></div>

        <div id="LINHA_SALADA">
          _________________________________________________________________
        </div>
        <div id="IMG_SALADA"></div>

        <div id="SOBREMESA">Sobremesa</div>
        <div id="resposta_SOBREMESA"></div>
        <div id="LINHA_SOBREMESA">
          _________________________________________________________________
        </div>
        <div id="IMG_SOBREMESA"></div>

        <button id="BLOCO_VOLTAR_CARDAPIO" onClick={voltarLoginPage}>
          Voltar
        </button>
        <div id="BLOCO_CREDITOS">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </div>
      </div>
    </>
  );
}
export default CardapioAluno;
