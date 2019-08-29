const Player = require('../models/Player');
const Rule = require('../models/Rule');


// route get player  @routeTest.getPlayers
exports.getPlayers = (req, res) => {
  console.log(req.body);
  players = [
    {
      "nom": "Vallet",
      "prenom": "Sébastien"
    },
    {
      "nom": "Ladouce",
      "prenom": "Fabien"
    },
    {
      "nom": "Thazet",
      "prenom": "Aurélien"
    },
  ]
  res.send(players);
}

exports.getRules = (req, res) => {
  console.log(req.body);
  rules = [
    {
      "nom": "Chaise sur la table",
    },
    {
      "nom": "Pas verouillé sa session",
    },
    {
      "nom": "Anniverssaire",
    },
  ]
  res.send(rules);
}

exports.getPaydays = (req, res) => {
  console.log(req.body);
  paydays = [
    
  ]
  res.send(paydays);
}