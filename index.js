const express = require("express");
const db = require("./db");
const port = process.env.PORT || 4002;

const app = express();

app.listen(`listening on: ${port}`);
