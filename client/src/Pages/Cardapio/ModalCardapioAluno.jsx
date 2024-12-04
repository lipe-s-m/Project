import "./ModalCardapioAluno.css";
import { useEffect } from "react";

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
            <div className="box-agendar cardapio-admin modal-aluno">
              <div id="TEXTO_CARDAPIO">Cardápio</div>
              <div id="TEXTO_BANDEJAO">
                {turno} - {data}
              </div>



              <p>Prato Principal</p>
              <div className="resposta-modal-aluno">{principal}</div>
              <hr></hr>


              <p>Opção</p>
              <div className="resposta-modal-aluno">{opcao}</div>
              <hr></hr>


              <p>Opção Vegetariana</p>
              <div className="resposta-modal-aluno">{vegetariana}</div>
              <hr></hr>


              <p>Acompanhamentos</p>
              <div className="resposta-modal-aluno">{acompanhamento}</div>
              <hr></hr>


              <p>Guarnição</p>
              <div className="resposta-modal-aluno">{guarnicao}</div>
              <hr></hr>


              <p>Salada</p>
              <div className="resposta-modal-aluno">{salada}</div>
              <hr></hr>


              <p>Sobremesa</p>
              <div className="resposta-modal-aluno">{sobremesa}</div>
              <hr></hr>


              <button id="BLOCO_CANCELAR" onClick={voltarCardapio}>
                Voltar
              </button>
              <div id="lowtext">
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
