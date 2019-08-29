const mongoose = require('mongoose');

var ruleSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true
    }
},{ timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Rule', ruleSchema);