const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const e = require("cors");

//conectando banco
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "artefatobandejao",
});

app.use(cors());
app.use(express.json());

//BANCO
// criando instancias no banco
app.post("/register", (req, res) => {
  //recebe as infos
  const { email, name } = req.body;
  let insert = "INSERT INTO aluno (email, nome) VALUES (?, ?)"; //string insert

  //VERIFICA SE ALUNO JA ESTA CADASTRADO
  db.query("SELECT * from aluno WHERE email = ?", [email], (err, result) => {
    if (err) {
      //se der erro
      console.error(err);
      return console.log("Deu ruim rapaziada kkk");
    }
    if (result.length > 0) {
      //se o resultado for > 0 significa q ja tem um email cadastrado, logo:
      return console.log("o aluno %s já esta cadastrado", name);
    }
    // Se os resultados anteriores forem falso, ent o email não existe, inseir os dados no banco:
    db.query(insert, [email, name], (err, result) => {
      if (err) {
        console.error(err);
        return console.log("deu ruim dnv manerr ksksksk");
      }

      // Retorna uma resposta de sucesso
      return console.log("Aluno cadastrado com sucesso");
    });
  });
});

//criando agendamento
app.post("/agendar", (req, res) => {
  res.send("Requisição recebida com sucesso");
  //pegando parametros
  const { senha, data, hora, email, ativo } = req.body;
  let insertAgend =
    "INSERT INTO agendamento (senha, data, horario, email, ativo) VALUES (?, ?,  ?, ?, ?)"; //string insert

  //verifica se aluno ja tem agendamento
  db.query(
    "SELECT * from agendamento WHERE email = ? AND ativo = 1",
    [email],
    (err, result) => {
      //se der erro
      if (err) {
        console.error(err);
        return console.log("po o mano fez besteiraKKK");
      }
      //se ja tiver agendamento ativo
      if (result.length > 0) {
        return console.log(
          "Este usuario ja possui um agendamento ativo, nao foi possível criar outro agendamento"
        );
      }
      //se poder fazer
      db.query(
        insertAgend,
        [senha, data, hora, email, ativo],
        (err, result) => {
          //se der erro
          if (err) {
            console.error(err);
            return console.log("pai fez besteiraKKK");
          }
          //se der certo
          return console.log("Agendamento feito com sucesso, %s!", email);
        }
      );
    }
  );
});

//cancelando agendamento
app.post("/cancelarAgendamento", (req, res) => {
  res.send("Requisição recebida com sucesso");

  //pegando parametros
  const { email } = req.body;
  let DeleteAgend = "UPDATE agendamento SET ativo = FALSE WHERE email = ?"; //string insert

  //cancela agendamento do aluno
  db.query(DeleteAgend, [email], (err, result) => {
    //se der erro
    if (err) {
      console.error(err);
      return console.log("pai fez besteiraKKK");
    }
    //se der certo
    return console.log("Agendamento cancelado com sucesso, %s!", email);
  });
});

//verifica se aluno ja possui agendamento
app.get("/verificarAgendamento", (req, res) => {
  console.log("Verificando se possui agendamento Ativo");
  const { emailUsuario } = req.query;
  const query =
    "SELECT senha, data, horario, email FROM agendamento WHERE email = ? AND ativo = true;";

  db.query(query, [emailUsuario], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao realizar a consulta");
      return console.error("Erro ao realizar a consulta:", err);
    }
    if (result.length === 0) {
      console.log("Este Usuário não possui Agendamento ativo!");
      return res.status(500).send("Este Usuário não possui nenhum Agendamento ativo!");
    }
    if (result.length > 0) {
      console.log("Este Usuário possui Agendamento ativo!");
      res.json(result[0]);
    }
  });
});

app.get("/contarVagas", (req, res) => {
  const { horario } = req.query;
  const query =
    "SELECT count(*) as count from agendamento where horario = ? and ativo = true;";

  db.query(query, [horario], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao realizar a consulta");
      return console.error("Erro ao realizar a consulta:", err);
    }
    res.send({ count: results[0].count });
  });
});

app.post("/trocarAgendamento", (req, res) => {
  res.send("Requisição recebida com sucesso");

  //pegando parâmetros
  const { senha, data, hora, email, ativo } = req.body;
  let deleteAgend = "UPDATE agendamento SET ativo = FALSE WHERE email = ?"; // string para cancelar agendamento
  let insertAgend =
    "INSERT INTO agendamento (senha, data, horario, email, ativo) VALUES (?, ?,  ?, ?, ?)"; // string para agendar novo horário

  // cancela o agendamento do aluno
  db.query(deleteAgend, [email], (err, deleteResult) => {
    // se der erro
    if (err) {
      console.error(err);
      return console.log("Erro ao cancelar o agendamento:", err);
    }
    // se o cancelamento for bem-sucedido
    console.log("Agendamento cancelado com sucesso para o email:", email);

    // agora, agendar o novo horário
    db.query(
      insertAgend,
      [senha, data, hora, email, ativo],
      (err, insertResult) => {
        // se der erro
        if (err) {
          console.error(err);
          return console.log("Erro ao agendar novo horário:", err);
        }
        // se o agendamento for bem-sucedido
        console.log("Novo agendamento feito com sucesso para o email:", email);
      }
    );
  });
});

app.get("/obterCardapio", (req, res) => {
  console.log("Requisição obter cardapio recebida com Sucesso...");
  const { data, turno } = req.query;
  const SELECT =
    "SELECT principal, opcao, vegetariana, acompanhamentos, guarnicao, salada, sobremesa, data, turno FROM cardapio WHERE data = ? AND turno = ?";

  db.query(SELECT, [data, turno], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(404).send("Erro ao buscar o cardapio");
    }
    if (result.length === 0) {
      console.log("Cardapio desse dia ainda nao foi feito");
      return res.status(500).send("Cardapio desse dia ainda nao foi feito!");
    }
    console.log(result);
    res.json(result[0]);
  });
});

app.post("/criarCardapio", (req, res) => {
  res.send("Requisição criar cardapio recebida com Sucesso");

  //pegando os parametros
  const {
    principal,
    opcao,
    vegetariana,
    acompanhamentos,
    guarnicao,
    salada,
    sobremesa,
    data,
    turno,
  } = req.body;

  db.query(
    "INSERT INTO cardapio (principal, opcao, vegetariana, acompanhamentos, guarnicao, salada, sobremesa, data, turno) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      principal,
      opcao,
      vegetariana,
      acompanhamentos,
      guarnicao,
      salada,
      sobremesa,
      data,
      turno,
    ],
    (err, result) => {
      //se der erro
      if (err) {
        console.error(err);
        return console.log("Erro ao criar o cardapio:", err);
      }
      // se a criação for bem-sucedido
      console.log("Cardapio Criado com Sucesso");
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando servidor");
});
