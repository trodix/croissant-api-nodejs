const mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    }
},{ timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Player', playerSchema);