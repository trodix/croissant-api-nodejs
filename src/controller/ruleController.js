const ObjectID = require('mongodb').ObjectID;
const Rule = require('../models/Rule');


// route get rule  @ruleController.getRules
exports.getRules = (req, res) => {
  console.log(req.body);

  Rule.find((err, rules) => {
    if(err) {
      res.status(500).json({
        "message": "Internal error",
      });
    } else {
      res.status(200).json({
        "message": "Success",
        "data": rules
      });
    }
  });
}

exports.getOneRule = (req, res) => {
  console.log(req.params.id);
  if(!ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request",
    });
  } else {
    Rule.findById(req.params.id, (err, rule) => {
      if(err) {
        console.log(err);
        res.status(500).json({
          "message": "Internal error",
        });
      } else {
        res.status(200).json({
          "message": "Success",
          "data": rule
        });
      }
    });
  }
}

exports.postRules = (req, res) => {
  console.log(req.body);
  if(!req.body.nom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    _rule = new Rule(req.body);
    _rule.save((err, rule) => {
      if(err) {
        res.status(500).json({
          "message": "Internal error"
        });
      } else {
        res.status(201).json({
          "message": "Rule created",
          "data": rule
        });
      }
    });
  } 
}
