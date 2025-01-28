import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./LoginPage.css";
import Axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Icon from "../../UI/Icons/1144760.png";
import erro from "../../UI/Icons/erro.png";
import { useNavigate, useParams } from "react-router-dom";


function Login() {
  //obtendo dados do usuario
  var [user, setUser] = useState({});

  const navigate = useNavigate();
  const hash = useParams();
  const encodedHash = encodeURIComponent(hash.hash);

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

  const [loading, setLoading] = useState(null);
  //usuario logado com sucesso, prosseguir pra proxima pagina
  async function nextPage(event) {
    const nomeUsuario = user.name;
    const emailUsuario = user.email;
    setLoading(true)
    try {
      console.log("Enviando dados:", { email: emailUsuario, name: nomeUsuario });

      // Verifica se possui agendamento ativo    
      const response = await Axios.get(
        "https://www.dcc.ufrrj.br/filaruservicos/verificarAgendamento",
        { params: { emailUsuario: emailUsuario } } // Aqui, o nome do parâmetro precisa ser igual ao esperado no backend
      );
      const dados = response.data;
      setLoading(dados)
      console.log(dados);
      if (dados === null) {
        // alert("nao tem agendamento ativo")
        localStorage.setItem('hashUser', null);
        localStorage.setItem('horaUser', null);
        localStorage.setItem('dataUser', null);
        navigate(`/AgendarHorario/${nomeUsuario}/${emailUsuario}`);
      }
      else {
        const { senha, horario, idhash } = dados;
        // alert("Voce tem um agendamento ativo com a senha: ", senha);
        console.log(dados)
        navigate(`/VisualizarSenha/${idhash}/${nomeUsuario}/${emailUsuario}/${horario}/${senha}`);
      }
    } catch (error) {
      // Caso não tenha agendamento ativo, redireciona para a página de agendamento
      console.error("Erro na verificação de agendamento:", error);

    } finally {
      // Indica que o carregamento terminou
      setLoading(false);
    }
  }
  function nextPageCardapio(event) {
    //cria atributos com os valores do objeto
    const nomeUsuario = user.name;

    console.log("ir para próxima página, %s", nomeUsuario);

    if (user.email === "filadobandejao@gmail.com") {
      //carrega pagina de agendamento
      navigate(`/CardapioAdmin`);
    }
    else {
      localStorage.setItem('emailUsuario', user.email);
      navigate(`/LerQrCode/${encodedHash}`)
    }

  }

  function verificarLogin() {
    try {
      const emailUsuario = localStorage.getItem('emailUsuario');
      if (emailUsuario === "bandejaoadmexterno@gmail.com") {
        navigate(`/LerQrCode/${encodedHash}`)
      }
      else {

      }

    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false);

    }
  }

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {


      setLoading(true)

      try {
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
        document.getElementById("signInDiv").hidden = false;
      }
      /* global google */
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
      verificarLogin()
    }
    // Adiciona o script à página
    document.body.appendChild(script);

    // Limpeza: remover o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
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

        {Object.keys(user).length !== 0 &&
          user.hd !== "ufrrj.br" &&
          (user.email !== "filadobandejao@gmail.com" && user.email !== "bandejaoadmexterno@gmail.com") && (
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
          //  ( user.email !== "filadobandejao@gmail.com" && user.email !== "raulzin09@gmail.com")
          (
            <div className="loginResponse">
              <div className="saudacao">
                <img id="userPic" src={user.picture} alt="PicImage"></img>{" "}
                <br></br>
                Ola, {user.name[0].toUpperCase() + user.name.substring(1).toLowerCase().split(" ")[0]} {user.name.split(" ")[user.name.split(" ").length - 1][0].toUpperCase() + user.name.split(" ")[user.name.split(" ").length - 1].substring(1).toLowerCase()}!
              </div>

              <button id="prosseguirLog" onClick={(e) => nextPage(e)}>
                Prosseguir
              </button>
              <button id="desconect" onClick={(e) => handleSignOut(e)}>
                Desconectar
              </button>
            </div>
          )}
        {/* //emailcardapio : filadobandejao@gmail.com   //// raulzin09@gmail.com*/}
        {Object.keys(user).length !== 0 &&
          (user.email === "filadobandejao@gmail.com" || user.email === "bandejaoadmexterno@gmail.com") && (
            <div className="loginResponse">
              <div className="saudacao">
                <img id="admin-pic" src={user.picture} alt="PicImage"></img>{" "}
                <br></br>
                Ola, Admin {user.name[0].toUpperCase() + user.name.substring(1).toLowerCase().split(" ")[0]} {user.name.split(" ")[user.name.split(" ").length - 1][0].toUpperCase() + user.name.split(" ")[user.name.split(" ").length - 1].substring(1).toLowerCase()}!
              </div>

              <button
                id="prosseguirLog"
                onClick={(e) => nextPageCardapio(e)}
              >
                Prosseguir
              </button>
              <button id="desconect" onClick={(e) => handleSignOut(e)}>
                Desconectar
              </button>
            </div>
          )}
        {loading && <div className="loading"> <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop></div>} {/* Mostra o carregamento */}
        <p className="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
    </>
  );
}

export default Login;
