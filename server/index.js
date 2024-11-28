const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const Port = process.env.PORT || 3001;

// Configuração do banco de dados
const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.query(`USE ${process.env.MYSQLDATABASE}`, (err) => {
  if (err) {
    console.error("Erro ao selecionar o banco de dados:", err);
  } else {
    console.log("Banco de dados selecionado com sucesso.");
  }
});

// Configuração do multer para salvar imagens na pasta 'uploads/'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Certifique-se de que a pasta 'uploads/' existe
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Gera um nome único para o arquivo
  },
});

const upload = multer({ storage });

// Middlewares necessários
app.use(cors());
app.use(express.json()); // Para processar JSON no corpo das requisições
app.use("/uploads", express.static("uploads")); // Servir arquivos estáticos da pasta 'uploads'

// Endpoint para listar usuários
app.get("/", (req, res) => {
  res.send("Servidor rodando");
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
    if (results.length > 0) {
      // Formata o caminho completo da foto antes de retornar
      const item = results[0];
      if (item.FOTO) {
        item.FOTO = `https://serverlby.vercel.app${item.FOTO}`;
      }
      res.json(item);
    } else {
      res.status(404).json({ message: "Item não encontrado" });
    }
  });
});

// Endpoint para cadastrar um novo item no estoque (com foto opcional)
app.post("/estoque", upload.single("foto"), (req, res) => {
  const { nome, valor, quantidade } = req.body;
  const foto = req.file ? `https://serverlby.vercel.app/uploads/${req.file.filename}` : null;

  const query =
    "INSERT INTO ITEM (NOME, VALOR, QUANTIDADE, FOTO) VALUES (?, ?, ?, ?)";
  db.query(query, [nome, valor, quantidade, foto], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar produto:", err);
      return res.status(500).json({ error: "Erro ao cadastrar produto" });
    }

    const newItem = {
      CODIGO_ITEM: result.insertId,
      NOME: nome,
      VALOR: valor,
      QUANTIDADE: quantidade,
      FOTO: foto ? `https://serverlby.vercel.app/${foto}` : null,
    };

    res.status(201).json(newItem);
  });
});

// Endpoint para editar item do estoque (com foto opcional)
app.put("/estoque/editar/:id", upload.single("foto"), (req, res) => {
  const productId = req.params.id;
  const { nome, valor, quantidade } = req.body;
  const foto = req.file ? `/uploads/${req.file.filename}` : null;

  let query;
  let params;

  if (foto) {
    query =
      "UPDATE ITEM SET NOME = ?, VALOR = ?, QUANTIDADE = ?, FOTO = ? WHERE CODIGO_ITEM = ?";
    params = [nome, valor, quantidade, foto, productId];
  } else {
    query =
      "UPDATE ITEM SET NOME = ?, VALOR = ?, QUANTIDADE = ? WHERE CODIGO_ITEM = ?";
    params = [nome, valor, quantidade, productId];
  }

  db.query(query, params, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao editar produto" });
    }

    res.json({ message: "Produto editado com sucesso" });
  });
});

// Endpoint para deletar um item do estoque
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
app.listen(Port, () => {
  console.log("Servidor rodando na porta " + Port);
});
