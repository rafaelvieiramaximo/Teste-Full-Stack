const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.connect((err, client, release) =>{
    if(err){
        return console.error('Erro ao conectar com o banco de dados', err.stack);
    }else{
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        release();
    }
});

module.exports = pool;