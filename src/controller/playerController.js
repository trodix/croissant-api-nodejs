const ObjectID = require('mongodb').ObjectID;
const Player = require('../models/Player');
const Payday = require('../models/Payday');


// route get player  @playerController.getPlayers
exports.getPlayers = (req, res) => {
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

exports.getOnePlayerPaydays = (req, res) => {
  if(!ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request",
    });
  } else {
    Payday.find({player: req.params.id})
      .exec()
      .then((paydays) => {
        res.status(200).json({
          "message": "Success",
          "data": paydays
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          "message": "Internal error",
        });
      });
  }
}

exports.createPlayer = (req, res) => {
  if(!req.body.nom || ! req.body.prenom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    const _player = new Player({
      _id: new ObjectID(),
      nom: req.body.nom,
      prenom: req.body.prenom
    });
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

exports.updateOnePlayer = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id) || !req.body.nom || !req.body.prenom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Player.findByIdAndUpdate(
      { _id: req.params.id }, req.body, false, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Player updated",
            "data": result
          });
        }
      }
    );
  } 
}

exports.deleteOnePlayer = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Player.findByIdAndDelete(
      { _id: req.params.id }, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Player deleted",
            "data": null
          });
        }
      }
    );
  } 
}
