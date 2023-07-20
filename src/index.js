const routes = require('./router/routes.js')
const express = require('express')
const app = express();


app.use(express.json());
app.use(routes)
app.listen(3000);