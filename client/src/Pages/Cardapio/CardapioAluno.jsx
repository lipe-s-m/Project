import { useNavigate } from "react-router-dom";
import "./CardapioAluno.css";


function CardapioAluno() {
  const navigate = useNavigate();

  const voltarLoginPage = () => {
    navigate(`/`);
  };

  return (
    <>
      <div id="CAIXA_PRINCIPAL">
        <div id="IMAGEM_CARDAPIO"></div>
        <div id="TEXTO_CARDAPIO">Cardápio</div>
        <div id="TEXTO_BANDEJAO">Bandejão</div>

        <div id="OPCAO_PRINCIPAL">Prato Principal</div>
        <div id="IMAGEM_GARFO_FACA"></div>
        <div id="RESPOSTA_PRINCIPAL"></div>
        <div id="LINHA_PRINCIPAL_OPCAO">
          _________________________________________________________________
        </div>

        <div id="OPCAO_SECUNDARIA">Opção</div>
        <div id="RESPOSTA_SECUNDARIA"></div>
        <div id="LINHA_SECUNDARIA_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_OPCAO"></div>

        <div id="OPCAO_VEGETARIANA">Opção Vegetariana</div>
        <div id="RESPOSTA_VEGETARIANA"></div>
        <div id="LINHA_VEGETARIANA_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_VEGETARIANA"></div>

        <div id="ACOMPANHAMENTOS">Acompanhamentos</div>
        <div id="RESPOSTA_ACOMPANHAMENTOS"></div>
        <div id="LINHA_ACOMPANHAMENTOS_OPCAO">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_ACOMPANHAMENTOS"></div>

        <div id="GUARNICAO">Guarnição</div>
        <div id="RESPOSTA_GUARNICOES"></div>
        <div id="LINHA_GUARNICAO">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_GUARNICAO"></div>

        <div id="SALADA">Salada</div>
        <div id="RESPOSTA_SALADA"></div>

        <div id="LINHA_SALADA">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_SALADA"></div>

        <div id="SOBREMESA">Sobremesa</div>
        <div id="RESPOSTA_SOBREMESA"></div>
        <div id="LINHA_SOBREMESA">
          _________________________________________________________________
        </div>
        <div id="IMAGEM_SOBREMESA"></div>

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
