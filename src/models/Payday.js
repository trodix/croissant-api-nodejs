const mongoose = require('mongoose');
//const Player = require('../models/Player');
//const Rule = require('../models/Rule');

var paydaySchema = mongoose.Schema({
    player:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    rule:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rule'
    },
    date:{
        type: Date,
        required: true
    },
    "payed":{
      type: Boolean,
      required: true
    }
},{ timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Payday', paydaySchema);