const { Schema, model } = require('mongoose');

const chordSchema = new Schema({
  "type": {
    type: String,
    required: 'missing type',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  "shape": {
    type: String,
    required: 'missing shape',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  "frets": {
    type: [Number], 
    required: true
  }
});

const Chord = model('Chord', chordSchema);

module.exports = Chord;