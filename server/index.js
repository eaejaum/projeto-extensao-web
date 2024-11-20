const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"lbypratas",
})

const corsOptions = {
    origin: 'http://localhost:3000/',   // Permitir apenas a origem desejada
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true,  // Permitir o envio de cookies e autenticação
  };
  
  app.use(cors());

app.get("/",(req, res)=>{
    let SQL = "SELECT * FROM usuario";
    db.query(SQL,(err,result)=>{
        console.log(err,result);
    });
})

app.get('/estoque', (req, res) => {
    const query = 'SELECT * FROM ITEM'; // Consulta para pegar todos os itens
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message }); // Retorna erro, se houver
      }
      res.json(results); // Retorna os dados da tabela ITEM como JSON
    });
  });

app.listen(3001);