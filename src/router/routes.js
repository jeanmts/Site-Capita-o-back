
const express = require('express');
const {dados, usuarios} = require('../controllers/Info');
const routes = express();


routes.post('/cadastro', dados )
routes.get('/usuarios', usuarios)
routes.get('/', (req, res) => {
    res.send("Servidor ON")
})

module.exports = routes;