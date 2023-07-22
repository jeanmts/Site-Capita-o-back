require('dotenv').config();

const routes = require('./router/routes.js');
const express = require('express');
const app = express();
const cors =  require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3000);