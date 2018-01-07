var mongoose = require('mongoose');

var schema = mongoose.Schema({

    nome: { type: String, required: true, index: { unique: true } }

}, { collection: 'usuario' });

module.exports = mongoose.model('Usuario', schema);


