const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/teams", (req, res, next) => {
  console.log("request received at " + new Date());
  Team.findAll().then(teams => res.json(teams));
});

router.post("/teams", (req, res, next) => {
  console.log("REQUEST BODY TO CREATE TEAM", req.body);
  // const { teamName } = req.body;
  Team.create(req.body)
    .then(team => {
      console.log("Created the team!");
      res.json(team);
    })
    .catch(error => next(error));
});

router.get("/teams/:id", (req, res, next) => {
  const teamId = parseInt(req.params.id);
  console.log(teamId);
  Team.findByPk(teamId).then(team => {
    if (!team) {
      res.status(404).send("Team not found!");
    } else {
      res.json(team);
    }
  });
});

module.exports = router;
