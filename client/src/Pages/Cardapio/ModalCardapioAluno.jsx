import { useNavigate } from "react-router-dom";
import "./ModalCardapioAluno.css";
import { useEffect, useState } from "react";

function ModalCardapioAluno({
  principal,
  opcao,
  vegetariana,
  acompanhamento,
  guarnicao,
  salada,
  sobremesa,
  data,
  turno,
  setTurno,
  isOpen,
  setOpenModal,
}) {
  const voltarCardapio = () => {
    setOpenModal(!isOpen);
  };

  useEffect(() => {
    if( turno === "Almoco"){
      console.log("odwo")
      setTurno("Almoço")
      console.log(turno)
    }
  }, [isOpen])

  if (isOpen) {
    return (
      <>
        <div id="BACKGROUND_id">
            <div id="CAIXA_PRINCIPAL">
              <div id="TEXTO_CARDAPIO">Cardápio</div>
              <div id="subtitulo">
                {turno} - {data}
              </div>

              <div id="LINHA_PRINCIPAL_OPCAO">
                _________________________________________________________________
              </div>

              <div id="PRINCIPAL">Prato Principal</div>
              <div id="IMAGEM_GARFO_FACA"></div>
              <div id="resposta_PRINCIPAL">{principal}</div>
              <div id="LINHA_PRINCIPAL">
                _________________________________________________________________
              </div>

              <div id="OPCAO">Opção</div>
              <div id="resposta_SECUNDARIA">{opcao}</div>
              <div id="LINHA_OPCAO">
                _________________________________________________________________
              </div>
              <div id="IMG_OPCAO"></div>

              <div id="VEGETARIANA">Opção Vegetariana</div>
              <div id="resposta_VEGETARIANA">{vegetariana}</div>
              <div id="LINHA_VEGETARIANA_OPCAO">
                _________________________________________________________________
              </div>
              <div id="IMG_VEGETARIANA"></div>

              <div id="modal-acompanhamento">Acompanhamentos</div>
              <div id="resposta_ACOMPANHAMENTOS">{acompanhamento}</div>
              <div id="LINHA_ACOMPANHAMENTOS_OPCAO">
                _________________________________________________________________
              </div>
              <div id="IMG_ACOMPANHAMENTOS"></div>

              <div id="modal-guarnicao">Guarnição</div>
              <div id="resposta_GUARNICOES">{guarnicao}</div>
              <div id="LINHA_GUARNICAO">
                _________________________________________________________________
              </div>
              <div id="IMG_GUARNICAO"></div>

              <div id="modal-salada">Salada</div>
              <div id="resposta_SALADA">{salada}</div>

              <div id="LINHA_SALADA">
                _________________________________________________________________
              </div>
              <div id="IMG_SALADA"></div>

              <div id="modal-sobremesa">Sobremesa</div>
              <div id="resposta_SOBREMESA">{sobremesa}</div>
              <div id="LINHA_SOBREMESA">
                _________________________________________________________________
              </div>
              <div id="IMG_SOBREMESA"></div>

              <button id="BLOCO_VOLTAR_CARDAPIO" onClick={voltarCardapio}>
                Voltar
              </button>
              <div id="BLOCO_CREDITOS">
                Desenvolvido por
                <strong className="bold">: Alunos de C.COMP</strong>
              </div>
            </div>
          </div>
      </>
    );
  }
}
export default ModalCardapioAluno;
