import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./LoginPage.css";
import Axios from "axios";

import Icon from "../../UI/Icons/1144760.png";
import erro from "../../UI/Icons/erro.png";
import { useNavigate } from "react-router-dom";

function Login() {
  //obtendo dados do usuario
  var [user, setUser] = useState({});
  const [senha, setSenha] = useState("");
  const [hora, setHora] = useState("");

  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    //imprime o id do email
    // console.log("Encoded JWT ID token: " + response.credential);

    //traduzir as informações pelo id com o decode
    var userObject = jwtDecode(response.credential);

    console.log(userObject);

    //verifica se usuario é da rural
    if (userObject.hd === "ufrrj.br") {
      console.log("Usuario %s logado com sucesso", userObject.email);
    } else if (userObject.hd !== "ufrrj.br") {
      console.log(
        "O email %s não pertence ao dominio da UFRRJ",
        userObject.email
      );
    }

    //setar as informaçoes do usuario no objeto
    setUser((user) => {
      return { ...user, ...userObject };
    });
    //esconder botao
    document.getElementById("signInDiv").hidden = true;
    //Guardar info do usuario
    // localStorage.setItem("_usuario_logado", JSON.stringify(userObject));
    console.log(userObject.name);
  }

  //funcao de logout
  function handleSignOut(event) {
    //limpar usuario
    setUser({});

    //reaparecer botao
    document.getElementById("signInDiv").hidden = false;
  }

  //usuario logado com sucesso, prosseguir pra proxima pagina
  function nextPage(event) {
    //cria atributos com os valores do objeto
    const nomeUsuario = user.name;
    const emailUsuario = user.email;
    console.log("ir para próxima página, %s", nomeUsuario);

    //cadastro provisorio
    Axios.post("https://www.dcc.ufrrj.br/filaruservicos//register", {
      email: emailUsuario,
      name: nomeUsuario,
    }).then((response) => {
      console.log(response);
    });

    //verifica se possui agendamento ativo
    // Axios.get("https://www.dcc.ufrrj.br/filaruservicos//verificarAgendamento", {
    //   params: {emailUsuario: emailUsuario}
    // }).then((response) => {
    //   console.log(response.data)
    //   const dados = response.data;
    //   setSenha(dados.senha);
    //   setHora(dados.horario);
    //   navigate(`/VisualizarSenha/${nomeUsuario}/${emailUsuario}/${hora}/${senha}`);
    // }).catch((error) => {
    //   console.log("erro na requisicao: ", error)
    // });

    // se não possui agendamento ativo, carrega pagina de agendamento
    navigate(`/AgendarHorario/${nomeUsuario}/${emailUsuario}`);
  }
  function nextPageCardapio(event) {
    //cria atributos com os valores do objeto
    const nomeUsuario = user.name;
    console.log("ir para próxima página, %s", nomeUsuario);

    //carrega pagina de agendamento
    navigate(`/CardapioAdmin`);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "853325995754-9pe7828a2ma28l8teelef548n3dljfj2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    //botao de login
    //se Não tiver usuario logado: mostrar botão de Login;
    //se tiver usuario logado: mostrar botão de Log out;
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "continue_with",
      logo_alignment: "left",
      width: "300",
    });
  }, []);

  return (
    <>
      <div className="Login">
        {/* Se usuario nao tiver, logado, pede p conectar */}
        <div id="Login">
          {Object.keys(user).length === 0 && (
            <h3>
              <img src={Icon} alt="Icon"></img> <br></br>{" "}
              <div className="title">Login</div>
            </h3>
          )}
        </div>

        {/* carrega o botao de login google*/}
        <div id="signInDiv"></div>
        {/* Botao de Log Out */}
        {/* {Object.keys(user).length !== 0 && user.hd === "ufrrj.br" && (
          <button id="desconect" onClick={(e) => handleSignOut(e)}>
            Desconectar
          </button>
        )} */}
        {/* Email nao é da UFRRJ */}
        {Object.keys(user).length !== 0 &&
          user.hd !== "ufrrj.br" &&
          user.email !== "bandejaoadm@gmail.com" && (
            <div className="loginResponse">
              <div className="loginNegado">
                <img src={erro} alt="erroImage"></img> <br></br>
                Este Email não pertence à UFRRJ
              </div>

              <button id="desconect" onClick={(e) => handleSignOut(e)}>
                Voltar
              </button>
            </div>
          )}

        {/* Usuario logado com sucesso */}
        {Object.keys(user).length !== 0 &&
          user.hd === "ufrrj.br" &&
          user.email !== "bandejaoadm@gmail.com" && (
            <div className="loginResponse">
              <div className="saudacao">
                <img id="userPic" src={user.picture} alt="PicImage"></img>{" "}
                <br></br>
                Ola, {user.name}!
              </div>

              <button id="prosseguirLog" onClick={(e) => nextPage(e)}>
                Prosseguir
              </button>
              <button id="desconect" onClick={(e) => handleSignOut(e)}>
            Desconectar
          </button>
            </div>
          )}
        {Object.keys(user).length !== 0 &&
          user.email === "bandejaoadm@gmail.com" && (
            <div className="loginResponse">
              <div className="saudacao">
                <img id="admin-pic" src={user.picture} alt="PicImage"></img>{" "}
                <br></br>
                Ola, Admin {user.name}!
              </div>

              <button
                id="admin-prosseguirLog"
                onClick={(e) => nextPageCardapio(e)}
              >
                Prosseguir
              </button>
              <button id="desconect-admin" onClick={(e) => handleSignOut(e)}>
                Desconectar
              </button>
            </div>
          )}
        <p className="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
    </>
  );
}

export default Login;
