const { Schema, model } = require('mongoose');

const chordSchema = new Schema({

});

const Chord = model('Chord', chordSchema);

module.exports = Chord;
