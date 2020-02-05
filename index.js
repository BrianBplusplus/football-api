const express = require("express");
const teamRouter = require("./team/router");
const port = process.env.PORT || 4000;
const app = express();

app.use(teamRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
