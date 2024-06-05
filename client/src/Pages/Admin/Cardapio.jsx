import "./Cardapio.css";
function Cardapio() {
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
          _____________________________________________
        </div>

        <div id="OPCAO_SECUNDARIA">Opção</div>
        <div id="RESPOSTA_SECUNDARIA"></div>
        <div id="LINHA_SECUNDARIA_OPCAO">
          _____________________________________________
        </div>
        <div id="IMAGEM_OPCAO"></div>

        <div id="OPCAO_VEGETARIANA">Opção Vegetariana</div>
        <div id="RESPOSTA_VEGETARIANA"></div>
        <div id="LINHA_VEGETARIANA_OPCAO">
          _____________________________________________
        </div>
        <div id="IMAGEM_VEGETARIANA"></div>

        <div id="ACOMPANHAMENTOS">Acompanhamentos</div>
        <div id="RESPOSTA_ACOMPANHAMENTOS"></div>
        <div id="LINHA_ACOMPANHAMENTOS_OPCAO">
          _____________________________________________
        </div>
        <div id="IMAGEM_ACOMPANHAMENTOS"></div>

        <div id="GUARNICAO">Guarnição</div>
        <div id="RESPOSTA_GUARNICOES"></div>
        <div id="LINHA_GUARNICAO">
          _____________________________________________
        </div>
        <div id="IMAGEM_GUARNICAO"></div>

        <div id="SALADA">Salada</div>
        <div id="RESPOSTA_SALADA"></div>

        <div id="LINHA_SALADA">
          _____________________________________________
        </div>
        <div id="IMAGEM_SALADA"></div>

        <div id="SOBREMESA">Sobremesa</div>
        <div id="RESPOSTA_SOBREMESA"></div>
        <div id="LINHA_SOBREMESA">
          _____________________________________________
        </div>
        <div id="IMAGEM_SOBREMESA"></div>

        <button id="BLOCO_VOLTAR_CARDAPIO">Voltar</button>
        <div id="BLOCO_CREDITOS">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </div>
      </div>
    </>
  );
}
export default Cardapio;
