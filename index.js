const express = require("express");
const db = require("./db");
const Team = require("./team/model");
const port = process.env.PORT || 4005;

const app = express();

app.listen(`listening on: ${port}`);
