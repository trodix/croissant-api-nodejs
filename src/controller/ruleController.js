const ObjectID = require('mongodb').ObjectID;
const Rule = require('../models/Rule');


// route get rule  @ruleController.getRules
exports.getRules = (req, res) => {
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

exports.createRule = (req, res) => {
  if(!req.body.nom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    const _rule = new Rule({
      _id: new ObjectID(),
      nom: req.body.nom
    });
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

exports.updateOneRule = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id) || !req.body.nom) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Rule.findByIdAndUpdate(
      { _id: req.params.id }, req.body, false, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Rule updated",
            "data": result
          });
        }
      }
    );
  } 
}

exports.deleteOneRule = (req, res) => {
  if(!req.params.id || !ObjectID.isValid(req.params.id)) {
    res.status(400).json({
      "message": "Invalid request"
    });
  } else {
    Rule.findByIdAndDelete(
      { _id: req.params.id }, (err, result) => {
        if(err) {
          res.status(500).json({
            "message": "Internal error"
          });
        } else {
          res.status(201).json({
            "message": "Rule deleted",
            "data": null
          });
        }
      }
    );
  } 
}
