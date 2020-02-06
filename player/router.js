const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");

const router = new Router();

router.get("/players", (req, res, next) => {
  console.log("request received at " + new Date());
  Player.findAll().then(players => res.json(players));
});

router.post("/players", (req, res, next) => {
  console.log("REQUEST BODY TO CREATE A PLAYER", req.body);
  const { name, number, teamId } = req.body;
  Player.create({ name: name, number: number, teamId: teamId })
    .then(player => {
      console.log("Created the player!");
      res.json(player);
    })
    .catch(error => next(error));
});

router.get("/players/:id", (req, res, next) => {
  const playerId = parseInt(req.params.id);
  console.log("ID of the player: ", playerId);
  Player.findByPk(playerId, { include: [Team] }).then(player => {
    if (!player) {
      res.status(404).send("Player not found!");
    } else {
      res.json(player);
    }
  });
});

module.exports = router;
