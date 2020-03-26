const express  = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
/*
Rota/recurso

3333/users
*/
/*
Métodos http:

GET: Buscar/listar uma informação do backend

POST: Criar uma informação no backend

PUT: Alterar uma informação no backend

DELETE: deleta uma informação no backend
*/

/*

Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após o símbolo de interrogação e servem para (filtros, paginação)

Routes Params: Parâmetros utilizados para identificar recursos

Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*Sql: Mysql, Sqlite, PostgreSQL, Oracle, Sql Server

NoSQL: MongoDB, CouchDB etc...*/

/*

Driver: SELECT * FROM users

Query Builder: Table('users').select('*').where()

*/



