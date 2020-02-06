const { Router } = require("express");
const Player = require("./model");

const router = new Router();

router.get("/players", (req, res, next) => {
  console.log("request received at " + new Date());
  Player.findAll().then(players => res.json(players));
});

router.post("/players", (req, res, next) => {
  console.log("REQUEST BODY TO CREATE A PLAYER", req.body);
  const { playerName } = req.body;
  Player.create({ name: playerName })
    .then(player => {
      console.log("Created the player!");
      res.json(player);
    })
    .catch(error => next(error));
});

router.get("/players/:id", (req, res, next) => {
  const playerId = parseInt(req.params.id);
  console.log("ID of the player: ", playerId);
  Player.findByPk(playerId).then(player => {
    if (!player) {
      res.status(404).send("Player not found!");
    } else {
      res.json(player);
    }
  });
});

module.exports = router;
