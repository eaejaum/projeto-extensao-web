const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lbypratas",
});

// Middlewares necessários
app.use(cors());
app.use(express.json()); // Para processar JSON no corpo das requisições

// Endpoint para listar usuários
app.get("/", (req, res) => {
  let SQL = "SELECT * FROM USUARIO";
  db.query(SQL, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint para listar itens do estoque
app.get("/estoque", (req, res) => {
  const query = "SELECT * FROM ITEM";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint para buscar um item específico do estoque
app.get("/estoque/:numberProductId", (req, res) => {
  const { numberProductId } = req.params;
  const query = "SELECT * FROM ITEM WHERE CODIGO_ITEM = ?";
  db.query(query, [parseInt(numberProductId)], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint para cadastrar um novo item no estoque
app.post("/estoque", (req, res) => {
  const { nome, valor, quantidade } = req.body;
  const query = "INSERT INTO ITEM (NOME, VALOR, QUANTIDADE) VALUES (?, ?, ?)";

  db.query(query, [nome, valor, quantidade], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar produto:", err);
      return res.status(500).json({ error: "Erro ao cadastrar produto" });
    }

    const newItem = {
      CODIGO_ITEM: result.insertId,
      NOME: nome,
      VALOR: valor,
      QUANTIDADE: quantidade,
    };

    res.status(201).json(newItem);
  });
});

app.delete("/estoque/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM ITEM WHERE CODIGO_ITEM = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Erro ao deletar item:", err);
      return res.status(500).json({ error: "Erro ao deletar item" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item não encontrado" });
    }

    res.status(200).json({ message: "Item deletado com sucesso" });
  });
});

// Inicializando o servidor na porta 3001
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
