const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const {API_VERSION} = require('./config');

const userRoutes = require("./src/routes/user");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Evitar bloqueo del CORS
app.use(cors());

app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;