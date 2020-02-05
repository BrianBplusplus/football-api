const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/teams", (req, res, next) => {
  console.log("request received at " + new Date());
  Team.findAll().then(teams => res.json(teams));
});

module.exports = router;
