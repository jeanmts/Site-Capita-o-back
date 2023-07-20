
const express = require('express');
const {dados, usuarios} = require('../controllers/Info');
const routes = express();


routes.post('/cadastro', dados )
routes.get('/usuarios', usuarios)
module.exports = routes;