const express = require("express");
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"lbypratas",
})

app.get("/",(req, res)=>{
    let SQL = "SELECT * FROM usuario";
    db.query(SQL,(err,result)=>{
        console.log(err,result);
    });
})

app.listen(3001);