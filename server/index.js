const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

//conectando banco
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "artefatobandejao",
});

app.use(cors());
app.use(express.json());

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
        return console.log("Este usuario ja possui um agendamento ativo, nao foi possivel criar outro agendamento");
      }
      //se poder fazer
      db.query(insertAgend, [senha, data, hora, email, ativo], (err, result) => {
        //se der erro
        if (err) {
          console.error(err);
          return console.log("pai fez besteiraKKK");
        }
        //se der certo
        return console.log("Agendamento feito com sucesso, %s!", email);
      });
    }
  );
});


//cancelando agendamento
app.post("/cancelarAgendamento", (req, res) => {
  res.send("Requisição recebida com sucesso");

  //pegando parametros
  const { email } = req.body;
  let DeleteAgend =
  "UPDATE agendamento SET ativo = FALSE WHERE email = ?"; //string insert

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
    }
  );

app.listen(3001, () => {
  console.log("Rodando servidor");
});
