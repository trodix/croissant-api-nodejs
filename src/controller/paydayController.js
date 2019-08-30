const ObjectID = require('mongodb').ObjectID;
const Payday = require('../models/Payday');


// route get payday  @paydayController.getPaydays
exports.getPaydays = (req, res) => {
  Payday.find((err, paydays) => {
    if(err) {
      res.status(500).json({
        "message": "Internal error",
      });
    } else {
      res.status(200).json({
        "message": "Success",
        "data": paydays
      });
    }
  });
}

exports.getOnePayday = (req, res) => {
  if(!ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request",
    });
  } else {
    Payday.findById(req.params.id, (err, payday) => {
      if(err) {
        console.log(err);
        res.status(500).json({
          "message": "Internal error",
        });
      } else {
        res.status(200).json({
          "message": "Success",
          "data": payday
        });
      }
    });
  }
}

exports.createPayday = (req, res) => {
  if(!req.body.player || !req.body.rule || !req.body.date || !req.body.payed) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    const _payday = new Payday({
      _id: new ObjectID(),
      player: req.body.player,
      rule: req.body.rule,
      date: req.body.date,
      payed: req.body.payed
    });
    _payday.save((err, payday) => {
      if(err) {
        console.log(err);
        res.status(500).json({
          "message": "Internal error"
        });
      } else {
        res.status(201).json({
          "message": "Payday created",
          "data": payday
        });
      }
    });
  } 
}

exports.updateOnePayday = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id) || !req.body.player || !req.body.rule || !req.body.date || !req.body.payed) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Payday.findByIdAndUpdate(
      { _id: req.params.id }, req.body, false, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Payday updated",
            "data": result
          });
        }
      }
    );
  } 
}

exports.deleteOnePayday = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Payday.findByIdAndDelete(
      { _id: req.params.id }, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Payday deleted",
            "data": null
          });
        }
      }
    );
  } 
}
