require("dotenv").config();
const connToDB = require("./config/db");
const express = require("express");
const routes = require("./Routes/routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

connToDB();
app.use("/",routes);

module.exports = app;