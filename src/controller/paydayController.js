const ObjectID = require('mongodb').ObjectID;
const Payday = require('../models/Payday');


// route get payday  @paydayController.getPaydays
exports.getPaydays = (req, res) => {
  console.log(req.body);

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
  console.log(req.params.id);
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

exports.postPaydays = (req, res) => {
  console.log(req.body);
  if(!req.body.player || !req.body.rule || !req.body.date || !req.body.payed) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    _payday = new Payday(req.body);
    _payday.save((err, payday) => {
      if(err) {
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
