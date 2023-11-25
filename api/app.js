const express = require('express');
const app = express(); 
const mysql = require('mysql');
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: 'sharkdb',
  port: process.env.PORT
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM user', (error, results) => {
    if (error) throw error;
    res.json(results);  
  });
});



app.listen(5000);