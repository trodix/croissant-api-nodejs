const ObjectID = require('mongodb').ObjectID;
const Player = require('../models/Player');


// route get player  @playerController.getPlayers
exports.getPlayers = (req, res) => {
  console.log(req.body);

  Player.find((err, players) => {
    if(err) {
      res.status(500).json({
        "message": "Internal error",
      });
    } else {
      res.status(200).json({
        "message": "Success",
        "data": players
      });
    }
  });
}

exports.getOnePlayer = (req, res) => {
  console.log(req.params.id);
  if(!ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request",
    });
  } else {
    Player.findById(req.params.id, (err, player) => {
      if(err) {
        console.log(err);
        res.status(500).json({
          "message": "Internal error",
        });
      } else {
        res.status(200).json({
          "message": "Success",
          "data": player
        });
      }
    });
  }
}

exports.postPlayers = (req, res) => {
  console.log(req.body);
  if(!req.body.nom || ! req.body.prenom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    _player = new Player(req.body);
    _player.save((err, player) => {
      if(err) {
        res.status(500).json({
          "message": "Internal error"
        });
      } else {
        res.status(201).json({
          "message": "Player created",
          "data": player
        });
      }
    });
  } 
}
