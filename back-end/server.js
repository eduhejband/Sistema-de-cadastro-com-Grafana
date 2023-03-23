const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');

app.use(cors()); // habilita o middleware cors

// cria uma conexão com o banco de dados
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pessoas',
    password: '123.',
    port: 5432,
});

app.use(express.json()); // habilita o parseamento de JSON

app.post('/inserir', (req, res) => {
    const { id, nome, idade } = req.body; // recupera os valores do corpo da requisição

    // insere os valores no banco de dados
    pool.query(`INSERT INTO cadastros (id, nome, idade) VALUES ($1, $2, $3)`, [id, nome, idade], (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send('Valores inseridos com sucesso!');
        }
    });
});

app.listen(3002, () => {
    console.log('Server started on port 3002');
});





